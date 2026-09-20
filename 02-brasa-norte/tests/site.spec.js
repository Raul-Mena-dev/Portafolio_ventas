import { test, expect } from "@playwright/test";
import { categories, dishes } from "../src/data/menu.js";
import {
  localDate,
  availableTimes,
  validateReservation,
} from "../src/utils/reservations.js";
function futureDay(day) {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  while (date.getDay() !== day) date.setDate(date.getDate() + 1);
  return localDate(date);
}
async function loadImages(page) {
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(async (el) => {
          await el.decode();
          return el.naturalWidth > 0;
        }),
      )
      .toBe(true);
  }
}
test("rutas, imágenes, enlaces y ausencia de errores o solicitudes externas", async ({
  page,
}) => {
  const errors = [];
  const external = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("request", (r) => {
    if (
      !r.url().startsWith("http://127.0.0.1:5174") &&
      !r.url().startsWith("data:")
    )
      external.push(r.url());
  });
  for (const route of ["/", "/menu", "/reservations", "/contact"]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await loadImages(page);
    const links = await page
      .locator("a[href]")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    expect(links.every((h) => h.startsWith("/") || h.startsWith("#"))).toBe(
      true,
    );
  }
  await page.goto("/pagina-inexistente");
  await expect(page.locator("h1")).toContainText("ESTE PLATILLO");
  expect(errors).toEqual([]);
  expect(external).toEqual([]);
});
test("25 platillos, seis categorías y enlaces de especialidades", async ({
  page,
}) => {
  expect(dishes).toHaveLength(25);
  await page.goto("/menu");
  for (const category of categories) {
    await page
      .getByRole("button", { name: new RegExp(`^${category}`) })
      .click();
    await expect(page.locator(".menu-item")).toHaveCount(
      dishes.filter((d) => d.category === category).length,
    );
    await expect(
      page.getByRole("button", { name: new RegExp(`^${category}`) }),
    ).toHaveAttribute("aria-pressed", "true");
  }
  await page.reload();
  await expect(page.locator(".menu-category-heading h2")).toHaveText("BEBIDAS");
  await page.goto("/");
  await page.locator(".dish-card").nth(1).click();
  await expect(page.locator(".menu-category-heading h2")).toHaveText(
    "HAMBURGUESAS",
  );
  await expect(page.locator("#burger-brasa")).toBeInViewport();
});
test("reservación validada, horarios cerrados, folio y modal accesible", async ({
  page,
}) => {
  await page.goto("/reservations");
  await page
    .getByRole("button", { name: "Confirmar reservación demo" })
    .click();
  await expect(page.locator(".field-error")).toHaveCount(6);
  await page.getByLabel("Nombre completo").fill("Andrea de Prueba");
  await page.getByLabel("Teléfono").fill("8112345678");
  await page.getByLabel("Correo electrónico").fill("andrea@example.com");
  await page.getByLabel("Fecha").fill(futureDay(1));
  await expect(page.getByLabel("Horario")).toBeDisabled();
  await page
    .getByRole("button", { name: "Confirmar reservación demo" })
    .click();
  await expect(
    page.getByText("Los lunes descansamos. Elige otro día."),
  ).toBeVisible();
  await page.getByLabel("Fecha").fill(futureDay(2));
  await page.getByLabel("Horario").selectOption("19:00");
  await page.getByLabel("Personas").selectOption("4");
  await page.getByRole("checkbox").check();
  await page
    .getByRole("button", { name: "Confirmar reservación demo" })
    .click();
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();
  await expect(modal).toContainText(/BR-\d{4}/);
  await expect(modal).toContainText("Andrea de Prueba");
  await expect(modal).toContainText("19:00 h");
  await expect(
    page.getByRole("button", { name: "Cerrar confirmación", exact: true }),
  ).toBeFocused();
  await expect
    .poll(() =>
      modal.evaluate((el) => {
        const r = el.getBoundingClientRect();
        return r.top >= 0 && r.bottom <= innerHeight;
      }),
    )
    .toBe(true);
  await page.screenshot({ path: "qa/confirmation.png" });
  await page.setViewportSize({ width: 375, height: 812 });
  await expect
    .poll(() =>
      modal.evaluate((el) => {
        const r = el.getBoundingClientRect();
        return r.top >= 0 && r.bottom <= innerHeight && r.width <= innerWidth;
      }),
    )
    .toBe(true);
  await page.screenshot({ path: "qa/confirmation-mobile.png" });
  await page.keyboard.press("Escape");
  await expect(modal).toHaveCount(0);
  await expect(page.getByLabel("Nombre completo")).toBeEmpty();
  await expect(
    page.getByRole("button", { name: "Confirmar reservación demo" }),
  ).toBeFocused();
});
test("reglas de horario y valores inválidos", () => {
  expect(availableTimes(futureDay(1))).toEqual([]);
  expect(availableTimes(futureDay(0)).at(-1)).toBe("19:30");
  expect(availableTimes(futureDay(6)).at(-1)).toBe("22:30");
  const invalid = validateReservation({
    name: "A",
    phone: "123",
    email: "sin-correo",
    date: "2000-01-01",
    time: "03:00",
    people: "9",
    consent: false,
  });
  expect(Object.keys(invalid)).toHaveLength(7);
});
test("preguntas frecuentes y fallback de imágenes", async ({ page }) => {
  await page.goto("/contact");
  await page
    .locator("summary")
    .filter({ hasText: "¿Hay opciones vegetarianas?" })
    .click();
  await expect(
    page.getByText("Sí. El menú incluye", { exact: false }),
  ).toBeVisible();
  await page.route("**/images/hero.jpg", (r) => r.abort());
  await page.goto("/");
  await expect(page.locator(".hero .picture-fallback")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Explorar el menú", exact: true }),
  ).toBeVisible();
});
for (const width of [375, 768, 1440])
  test(`responsive ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 950 });
    for (const route of ["/", "/menu", "/reservations", "/contact"]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await loadImages(page);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await page.evaluate(async () => {
        window.scrollTo({ top: 0, behavior: "instant" });
        await new Promise((r) =>
          requestAnimationFrame(() => requestAnimationFrame(r)),
        );
      });
      await page.screenshot({
        path: `qa/${width}-${route.replaceAll("/", "-")}.png`,
        fullPage: true,
      });
      if (route === "/")
        await page.screenshot({ path: `qa/${width}-hero.png` });
    }
    if (width === 375) {
      await page.getByRole("button", { name: "Abrir menú" }).click();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Reservar mesa" })
        .click();
      await expect(page.locator("h1")).toContainText("TE GUARDAMOS");
      await expect(
        page.getByRole("button", { name: "Abrir menú" }),
      ).toBeVisible();
    }
  });

import { test, expect } from "@playwright/test";
import { localDate, slotsFor } from "../src/utils/appointments.js";
import { services, vets } from "../src/data/clinic.js";
function futureDay(day = 1) {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  while (date.getDay() !== day) date.setDate(date.getDate() + 1);
  return localDate(date);
}
async function images(page) {
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
async function toTime(page) {
  await page.goto("/appointments");
  await page.locator(".pet-choice").filter({ hasText: "Milo" }).click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page
    .locator(".service-choice")
    .filter({ hasText: "Consulta general" })
    .click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page.locator(".vet-choice").filter({ hasText: "Ana Robles" }).click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page.getByLabel("Fecha de la visita").fill(futureDay());
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
}
async function book(page, time = "10:00 h") {
  await toTime(page);
  await page.getByRole("button", { name: time, exact: true }).click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Confirmar cita demo" }).click();
  await expect(page.locator("h1")).toContainText("confirmada");
}
test("cinco rutas, recursos locales y consola limpia", async ({ page }) => {
  const errors = [];
  const external = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("request", (r) => {
    if (
      !r.url().startsWith("http://127.0.0.1:5175") &&
      !r.url().startsWith("data:")
    )
      external.push(r.url());
  });
  for (const route of ["/", "/services", "/team", "/appointments", "/my-pet"]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await images(page);
    const links = await page
      .locator("a[href]")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    expect(links.every((h) => h.startsWith("/") || h.startsWith("#"))).toBe(
      true,
    );
  }
  await page.goto("/no-existe");
  await expect(page.locator("h1")).toContainText("desviamos");
  expect(errors).toEqual([]);
  expect(external).toEqual([]);
});
test("seis pasos, validación, fecha cerrada y compatibilidad", async ({
  page,
}) => {
  await page.goto("/appointments");
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("Selecciona una mascota");
  await page.locator(".pet-choice").filter({ hasText: "Milo" }).click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page.locator(".service-choice").filter({ hasText: "Estética" }).click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await expect(page.locator(".vet-choice")).toHaveCount(1);
  await page.locator(".vet-choice").click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page.getByLabel("Fecha de la visita").fill(futureDay(0));
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("fecha con horarios");
  await page.getByLabel("Fecha de la visita").fill(futureDay());
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page.getByRole("button", { name: "10:00 h", exact: true }).click();
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page.getByRole("button", { name: "Confirmar cita demo" }).click();
  await expect(page.getByRole("alert")).toContainText("demostración");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Confirmar cita demo" }).click();
  await expect(page.locator("h1")).toContainText("Milo");
  await expect(page.locator(".success-ticket")).toContainText("Valeria");
});
test("persistencia, bloqueo de horario, cancelación y restablecimiento", async ({
  page,
}) => {
  await book(page);
  await page.getByRole("link", { name: "Ver en el perfil de Milo" }).click();
  await expect(page.locator(".visit-row")).toHaveCount(1);
  await page.reload();
  await expect(page.locator(".visit-row")).toHaveCount(1);
  await page.screenshot({ path: "qa/profile-booked.png", fullPage: true });
  await toTime(page);
  await expect(
    page.getByRole("button", { name: "10:00 h", exact: true }),
  ).toHaveCount(0);
  await page.goto("/my-pet");
  await page
    .getByRole("button", { name: "Cancelar cita", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Volver", exact: true }).click();
  await expect(page.locator(".visit-row")).toHaveCount(1);
  await page
    .getByRole("button", { name: "Cancelar cita", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Sí, cancelar cita", exact: true })
    .click();
  await expect(page.locator(".visit-row")).toHaveCount(0);
  await expect(page.locator(".history-row")).toContainText("Cancelada");
  await page.reload();
  await expect(page.locator(".history-row")).toContainText("Cancelada");
  await toTime(page);
  await expect(
    page.getByRole("button", { name: "10:00 h", exact: true }),
  ).toBeVisible();
  await page.goto("/my-pet");
  await page
    .getByRole("button", { name: "Restablecer datos de demostración" })
    .click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Restablecer datos", exact: true })
    .click();
  await page.reload();
  await expect(page.locator(".history-row")).toHaveCount(0);
  await expect(
    page.getByText("Milo aún no tiene citas programadas."),
  ).toBeVisible();
});
test("perfiles de ambas mascotas y almacenamiento dañado", async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem("petcare-demo-appointments-v1", "not-json"),
  );
  await page.goto("/my-pet");
  await expect(page.locator(".pet-profile h2")).toHaveText("Milo");
  await expect(page.locator(".profile-stats")).toContainText("28 kg");
  await page.getByRole("button", { name: "Luna", exact: true }).click();
  await expect(page.locator(".pet-profile h2")).toHaveText("Luna");
  await expect(page.locator(".profile-stats")).toContainText("4.2 kg");
  await page.reload();
  await expect(page.locator(".pet-profile h2")).toHaveText("Luna");
});
test("duración, solapamiento y días de consulta", () => {
  const date = futureDay();
  const vet = vets.find((v) => v.id === "valeria");
  const service = services.find((s) => s.id === "estetica");
  const occupied = [
    {
      vetId: "valeria",
      date,
      time: "10:00",
      duration: 60,
      status: "confirmed",
    },
  ];
  const slots = slotsFor(date, vet, service, occupied);
  expect(slots).not.toContain("09:30");
  expect(slots).not.toContain("10:00");
  expect(slots).not.toContain("10:30");
  expect(slots).toContain("11:00");
  expect(slotsFor(futureDay(0), vet, service)).toEqual([]);
});
test("flujo completo en móvil y confirmación de cancelación", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await book(page, "11:00 h");
  await page.screenshot({ path: "qa/375-success.png", fullPage: true });
  await page.getByRole("link", { name: "Ver en el perfil de Milo" }).click();
  await page
    .getByRole("button", { name: "Cancelar cita", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  expect(
    await page.getByRole("dialog").evaluate((el) => {
      const r = el.getBoundingClientRect();
      return r.top >= 0 && r.bottom <= innerHeight && r.width <= innerWidth;
    }),
  ).toBe(true);
  await page.screenshot({ path: "qa/375-cancel.png" });
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
for (const width of [375, 768, 1440])
  test(`responsive ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 950 });
    for (const route of [
      "/",
      "/services",
      "/team",
      "/appointments",
      "/my-pet",
    ]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await images(page);
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
        .getByRole("link", { name: "Servicios", exact: true })
        .click();
      await expect(page.locator("h1")).toContainText("primer paseo");
      await expect(
        page.getByRole("button", { name: "Abrir menú" }),
      ).toBeVisible();
    }
  });

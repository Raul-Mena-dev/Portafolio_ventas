import { test, expect } from "@playwright/test";
import { projects } from "../src/data/projects.js";
test("rutas, fotografías y enlaces locales", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of [
    "/",
    "/projects",
    "/contact",
    ...projects.map((p) => `/projects/${p.id}`),
  ]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((i) => i.complete && i.naturalWidth > 0))
        .toBe(true);
    }
    await expect
      .poll(() =>
        page
          .locator("img")
          .evaluateAll((imgs) =>
            imgs.every((i) => i.complete && i.naturalWidth > 0),
          ),
      )
      .toBe(true);
    const links = await page
      .locator("a[href]")
      .evaluateAll((links) => links.map((a) => a.getAttribute("href")));
    expect(
      links.every((href) => href.startsWith("/") || href.startsWith("#")),
    ).toBe(true);
  }
  expect(errors).toEqual([]);
  await page.goto("/projects/no-existe");
  await expect(page.getByText("Este camino no lleva")).toBeVisible();
});
test("filtros y navegación entre proyectos", async ({ page }) => {
  await page.goto("/projects");
  await page.getByRole("button", { name: "Interiores" }).click();
  await expect(page.locator(".project-card")).toHaveCount(3);
  await page.reload();
  await expect(page.locator(".project-card")).toHaveCount(3);
  await page.locator(".project-card").first().click();
  await expect(page.locator("h1")).toHaveText("Residencia Nara");
  await page.locator(".next-project > a").first().click();
  await expect(page.locator("h1")).toHaveText("Loft Reforma");
});
test("validación y confirmación del formulario sin envío", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Enviar solicitud demo" }).click();
  await expect(page.locator(".field-error")).toHaveCount(5);
  await page.getByLabel("Tu nombre").fill("Ana Demo");
  await page.getByLabel("Correo electrónico").fill("ana@example.com");
  await page
    .getByLabel("Tipo de proyecto")
    .selectOption({ label: "Diseño de interiores" });
  await page
    .getByLabel("Tu idea")
    .fill("Quiero renovar la sala y aprovechar mejor la luz natural.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Enviar solicitud demo" }).click();
  await expect(page.getByRole("status")).toContainText("SIMULACIÓN COMPLETADA");
  await page.getByRole("button", { name: "Crear otra solicitud" }).click();
  await expect(page.getByLabel("Tu nombre")).toBeEmpty();
});
for (const width of [375, 768, 1440]) {
  test(`responsive ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 950 });
    for (const route of [
      "/",
      "/projects",
      "/projects/casa-horizonte",
      "/contact",
    ]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect
          .poll(() => img.evaluate((i) => i.complete && i.naturalWidth > 0))
          .toBe(true);
      }
      await page.evaluate(async () => {
        window.scrollTo({ top: 0, behavior: "instant" });
        await Promise.all(document.getAnimations().map((a) => a.finished));
      });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      await page.screenshot({
        path: `qa/${width}-${route.replaceAll("/", "-") || "home"}.png`,
        fullPage: true,
      });
    }
    if (width === 375) {
      await page.getByRole("button", { name: "Abrir menú" }).click();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Proyectos" })
        .click();
      await expect(page.locator("h1")).toContainText("Distintas formas");
      await expect(
        page.getByRole("button", { name: "Abrir menú" }),
      ).toBeVisible();
    }
  });
}

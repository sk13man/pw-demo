import { test, expect } from "@playwright/test";

test.describe("Suite name", () => {
  test("can show console logs", async ({ page }) => {
    await page.goto("https://playwright.dev/docs/intro#installation");
    await page.goto("https://github.com/sk13man");
    console.log(await page.title());
    expect(await page.title()).toContain("Sergey Golovin");
  });
});

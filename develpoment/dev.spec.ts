import { test, expect, type Page } from "@playwright/test";

test.describe("Suite name", () => {
  test("can show console logs", async ({ page }) => {
    await page.goto("https://playwright.dev/docs/intro#installation");
    console.log("wow");
    await page.goto("https://github.com/sk13man");
    expect(false).toBe(true);
  });
});

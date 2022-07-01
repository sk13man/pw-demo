const path = require("path");
import { _electron as electron, test, expect } from "@playwright/test";
let appDir = path.resolve(
  "out/elApp/electron-playwright-example.app/Contents/MacOS/electron-playwright-example"
);

test.describe("Electron application", () => {
  test("can use pageObject pattern", async () => {
    const application = await electron.launch({
      executablePath: appDir,
      env: { PWDEBUG: "" },
    });

    const window = await application.firstWindow();
    // console.log(await window.title());
    // const btnTxt = await window
    //   .locator("text=Create new window")
    //   .allInnerTexts();
    await window.waitForTimeout(5000);
    //console.log(btnTxt);
    // expect(btnTxt).toContain("Create new window");
    await application.close();
  });
});

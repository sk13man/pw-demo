import { expect, test } from '@playwright/test';
import App from '../pages';

const user = {
  login: process.env.LOGIN,
  pass: process.env.PASS,
};
test.describe('Login', () => {
  test(`Can login as user  - login: ${user.login}, pass: ${user.pass}`, async ({ page }) => {
    const app = new App(page);
    await app.loginPage.open();
    await app.loginPage.login(user.login, user.pass);
    expect(await app.userMenu.userMenuButton.isVisible()).toBeTruthy();
    await app.notifications.closeIfOpened();
    // await app.userMenu.open();
    // await page.pause();
  });
});

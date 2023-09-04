import { Page } from '@playwright/test';
import LoginPage from './loginPage';

export default class App {
  readonly page: Page;
  loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }
}

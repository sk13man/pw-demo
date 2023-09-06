import { Page } from '@playwright/test';
import LoginPage from './loginPage';
import UserMenu from './components/userMenu';
import Notifications from './components/notifications';

export default class App {
  private page: Page;
  readonly loginPage: LoginPage;
  readonly userMenu: UserMenu;
  readonly notifications: Notifications;

  constructor(page: Page) {
    this.page = page;
    this.userMenu = new UserMenu(page);
    this.loginPage = new LoginPage(page);
    this.notifications = new Notifications(page);
  }
}

import { Locator, Page } from '@playwright/test';

export default class UserMenu {
  private page: Page;
  readonly userMenuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userMenuButton = this.page.locator('app-user-menu').getByRole('button');
  }
  async open() {
    await this.userMenuButton.click({ force: true });
  }
}

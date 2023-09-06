import { Locator, Page } from '@playwright/test';

export default class Notifications {
  private page: Page;
  private notificationHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notificationHeader = this.page.getByText('Нотификации');
  }
  async closeIfOpened() {
    if (this.notificationHeader.isVisible()) {
      await this.notificationHeader.click();
    }
  }
}

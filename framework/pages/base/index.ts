import type {Locator, Page} from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.getByPlaceholder('Search');
        this.searchIcon = this.page.locator('#search-icon-legacy');
    }

    async open(url: string) {
        await this.page.goto(url, {waitUntil: 'networkidle'});
    }

    async title(): Promise<string> {
        return await this.page.title();
    }

    async search(val: string) {
        await this.searchInput.fill(val);
        await this.searchIcon.click();
        await this.searchIcon.click();
        await this.page.waitForTimeout(3000);

    }
}

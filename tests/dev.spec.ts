import {expect, test} from '@playwright/test';
import {BasePage} from '../framework/pages/base';

test.describe('Suite name', () => {

    test('use pageObject model', async ({page}) => {
        const home = new BasePage(page);
        await home.open('https://youtube.com');
        expect(await home.title()).toBe('YouTube');
        await home.search('will smith');
    });

});

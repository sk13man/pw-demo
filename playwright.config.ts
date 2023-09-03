import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests',
    reporter: [['html', {open: 'never'}], ['list']],
    outputDir: 'test-results/',
    timeout: 300 * 1000,

    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
        screenshot: 'on',
        actionTimeout: 0,
        // trace: "on-first-retry",
    },

    projects: [
        {
            name: 'chrome',
            use: {
                launchOptions: {
                    slowMo: 500,
                },
            },
        },
    ],
};

export default config;

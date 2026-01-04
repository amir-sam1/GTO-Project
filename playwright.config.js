// import dotenv from 'dotenv';

// dotenv.config();
// const isCI = process.env.CI === 'true';

// const config = {
  
  
//     testDir: './POM',
//   timeout: 60000,
  
//   use: {
//     headless: isCI,
//     screenshot: 'only-on-failure',
//     trace: 'on-first-retry',
//     actionTimeout: 60000,
//     viewport: { width: 1920, height: 1080 },
//     launchOptions: {
//         slowMo: 500,
//         // for Chromium-based browsers: start maximized
//         // args: ['--start-maximized'],
//     },


//   },

//   projects: [
//     {
//       name: 'chromium',
//       use: { browserName: 'chromium' },
//     },

// ],

// workers: 3,

// reporter: isCI ? [['dot'],['html']] : [['html', { open: 'always' }], ["allure-playwright", { outputFolder: 'allure-results'}]]

// };

// export default config;

import dotenv from 'dotenv';
import { defineConfig } from '@playwright/test';

dotenv.config();

const isCI = process.env.CI === 'true';

export default defineConfig({
  testDir: './POM',
  timeout: 60_000,

  use: {
    headless: isCI,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 60_000,
    viewport: { width: 1920, height: 1080 },
    launchOptions: {
      slowMo: isCI ? 0 : 500,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  workers: isCI ? 1 : 3,

  reporter: isCI
    ? [
        ['dot'],
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
      ]
    : [
        ['html', { open: 'always', outputFolder: 'playwright-report' }],
        ['allure-playwright', { outputFolder: 'allure-results' }],
      ],
});

import dotenv from 'dotenv';

dotenv.config();

const config = {
  
    testDir: './POM',
  timeout: 60000,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 60000,
    viewport: { width: 1920, height: 1080 },
    launchOptions: {
        slowMo: 500,
        // for Chromium-based browsers: start maximized
        args: ['--start-maximized'],
    },


  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },

],

workers: 3,

reporter: process.env.CI ? [['dot'],['html']] : [['html', { open: 'always' }], ["allure-playwright", { outputFolder: 'allure-results'}]],

};

export default config;
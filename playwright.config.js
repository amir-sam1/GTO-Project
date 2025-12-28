// import dotenv from 'dotenv';

// dotenv.config();

// const config = {
  
//     testDir: './POM',
//   timeout: 60000,
//   use: {
//     headless: false,
//     screenshot: 'only-on-failure',
//     trace: 'on-first-retry',
//     actionTimeout: 60000,
//     viewport: { width: 1920, height: 1080 },
//     launchOptions: {
//         slowMo: 500,
//         // for Chromium-based browsers: start maximized
//         args: ['--start-maximized'],
//     },


//   },

//   projects: [
//     {
//       name: 'chromium',
//       use: { browserName: 'chromium' },
//     },

// ],

// workers: 3,

// reporter: process.env.CI ? [['dot'],['html']] : [['html', { open: 'always' }], ["allure-playwright", { outputFolder: 'allure-results'}]],

// };

// export default config;




import dotenv from 'dotenv';

dotenv.config();

const isCI = process.env.CI === 'true';

const config = {
  testDir: './POM',
  timeout: 60000,

  use: {
    headless: isCI, // ✅ CI = headless, local = headed
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 60000,
    viewport: isCI ? { width: 1280, height: 720 } : { width: 1920, height: 1080 },

    launchOptions: {
      slowMo: isCI ? 0 : 500, // ✅ no slowMo in CI
      args: isCI
        ? [] // CI doesn't need UI flags
        : ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  workers: isCI ? 1 : 3, // ✅ CI stability

  reporter: isCI
    ? [['dot'], ['html']]
    : [['html', { open: 'always' }], ['allure-playwright', { outputFolder: 'allure-results' }]],
};

export default config;

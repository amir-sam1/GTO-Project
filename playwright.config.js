// Import dotenv to load environment variables from .env file
// For review
import dotenv from 'dotenv';

// Import Playwright configuration helper
import { defineConfig } from '@playwright/test';

// Load .env variables into process.env
dotenv.config();

// Check if running in CI environment
// process.env.CI must equal 'true' string
const isCI = process.env.CI === 'true';

// Export Playwright configuration
export default defineConfig({

  // Directory where test files are located
  testDir: './POM/Tests',

  // Global timeout for each test (60 seconds)
  timeout: 60_000,

  // Shared settings for all tests
  use: {

    // Run headless mode only in CI
    // Locally it runs headed (browser visible)
    headless: isCI,

    // Take screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Record trace on first retry of failed test
    trace: 'on-first-retry',

    // Timeout for each Playwright action (click, fill, etc.)
    actionTimeout: 60_000,

    // Set browser window size
    viewport: { width: 1920, height: 1080 },

    // Browser launch options
    launchOptions: {

      // Slow motion for local debugging
      // In CI: 0ms delay
      // Locally: 500ms delay between actions
      slowMo: isCI ? 0 : 500,
    },
  },

  // Define browser projects
  projects: [
    {
      // Project name
      name: 'chromium',

      // Use Chromium browser
      use: { browserName: 'chromium' },
    },
  ],

  // Number of parallel workers
  // CI runs single worker to avoid flakiness
  // Local runs 3 workers
  workers: isCI ? 1 : 3,

  // Reporters configuration
  reporter: isCI
    ? [
        // In CI: minimal dot reporter in console
        ['dot'],

        // Generate HTML report but do not auto-open
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
      ]
    : [
        // Locally: Generate HTML report and auto-open after run
        ['html', { open: 'always', outputFolder: 'playwright-report' }],

        // Generate Allure results for Allure reporting
        ['allure-playwright', { outputFolder: 'allure-results' }],
      ],
});

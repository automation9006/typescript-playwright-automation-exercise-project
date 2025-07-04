import { defineConfig } from '@playwright/test'
import dotenv from 'dotenv'

// Load the environment file dynamically
const ENV = process.env.ENV || 'qa'
dotenv.config({ path: `.env.${ENV}` })

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.ts/,
  timeout: 50 * 1000,
  expect: {
    timeout: 10000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: 'html',
  use: {
    // baseURL: 'https://automationexercise.com/',
     baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    headless:false,
    screenshot:"on",
    // video:"retain-on-failure",
    launchOptions: {
      // 1
      args: ["--start-maximized"],
    },
  },

  projects: [
   {
      name: 'chrome',
      use: {
        channel: 'chrome',
        viewport:null,
      },
    },
    {
      name: 'firefox',
      use: { 
        // ...devices['Desktop Firefox'] 
        viewport: null,
      },
    },
    {
      name: 'webkit',
      use: { 
        // ...devices['Desktop Safari']
      viewport: null,
     },
    },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

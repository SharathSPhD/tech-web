import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4321/tech-web/',
  },
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4321/tech-web/',
    reuseExistingServer: true,
    timeout: 60000,
  },
});

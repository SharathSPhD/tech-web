// Wakes the sleeping HF Space and captures a screenshot of the running app.
import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto('https://huggingface.co/spaces/qbz506/dreamprice-demo', {
  waitUntil: 'domcontentloaded',
  timeout: 45000,
});
await page.waitForTimeout(3000);

const restart = page.getByText('Restart this Space', { exact: false }).first();
if (await restart.isVisible().catch(() => false)) {
  await restart.click();
  console.log('clicked restart, waiting for build...');
}

// Poll up to 4 minutes for the embedded Gradio iframe to render real content.
for (let i = 0; i < 24; i++) {
  await page.waitForTimeout(10000);
  const frame = page.frames().find((f) => f.url().includes('.hf.space'));
  if (frame) {
    const hasApp = await frame
      .locator('.gradio-container, gradio-app')
      .first()
      .isVisible()
      .catch(() => false);
    if (hasApp) {
      await page.waitForTimeout(8000);
      await page.screenshot({ path: 'public/screenshots/dreamprice.png' });
      console.log('captured running app');
      await browser.close();
      process.exit(0);
    }
  }
  console.log(`waiting... ${(i + 1) * 10}s`);
}
console.error('space did not come up in time');
await page.screenshot({ path: 'public/screenshots/dreamprice-attempt.png' });
await browser.close();
process.exit(1);

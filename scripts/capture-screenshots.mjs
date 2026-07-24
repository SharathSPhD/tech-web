// Captures real screenshots of the live apps/pages used on the site's
// demo/preview cards. Re-run whenever the upstream apps change visually:
//   node scripts/capture-screenshots.mjs
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const targets = [
  { name: 'prabodha', url: 'https://prabodha-live.vercel.app', wait: 6000 },
  { name: 'dreamprice', url: 'https://huggingface.co/spaces/qbz506/dreamprice-demo', wait: 12000 },
  { name: 'blog', url: 'https://sharathsphd.github.io', wait: 4000 },
  { name: 'prayoga', url: 'https://sharathsphd.github.io/prayoga/', wait: 4000 },
];

mkdirSync('public/screenshots', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

for (const t of targets) {
  try {
    await page.goto(t.url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(t.wait);
    await page.screenshot({ path: `public/screenshots/${t.name}.png` });
    console.log(`captured ${t.name}`);
  } catch (err) {
    console.error(`FAILED ${t.name}: ${err.message}`);
    process.exitCode = 1;
  }
}
await browser.close();

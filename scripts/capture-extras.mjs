// Captures the BabyLM 2026 strict-track leaderboard (element only) and the
// Taittirīya Medium article cover image.
import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 });

// --- BabyLM leaderboard (gradio space; use direct embed URL) ---
try {
  await page.goto('https://babylm-community-babylm-leaderboard-2026.hf.space', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
  await page.waitForTimeout(15000);
  // Find the strict-track tab if present, click it
  const strictTab = page.getByRole('tab', { name: /strict/i }).first();
  if (await strictTab.isVisible().catch(() => false)) {
    await strictTab.click();
    await page.waitForTimeout(4000);
  }
  const table = page.locator('table').first();
  if (await table.isVisible().catch(() => false)) {
    await table.screenshot({ path: 'public/figures/babylm-leaderboard.png' });
    console.log('leaderboard table captured');
  } else {
    await page.screenshot({ path: 'public/figures/babylm-leaderboard.png' });
    console.log('leaderboard fallback full capture');
  }
} catch (e) {
  console.error('leaderboard failed:', e.message);
}

// --- Taittiriya Medium cover ---
try {
  await page.goto('https://medium.com/p/518498e70de0', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);
  const img = page.locator('article img').first();
  const src = await img.getAttribute('src').catch(() => null);
  console.log('medium img:', src);
  if (src) {
    const resp = await page.request.get(src.replace(/\/resize:[^/]+\//, '/resize:fit:1600/'));
    const fs = await import('node:fs');
    fs.writeFileSync('public/figures/essay-taittiriya.jpg', await resp.body());
    console.log('taittiriya cover saved');
  }
} catch (e) {
  console.error('taittiriya failed:', e.message);
}

await browser.close();

import { expect, test } from '@playwright/test';

test('page renders all major sections', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/TechNektar/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Where frontier research becomes product'
  );
  for (const id of ['practice', 'research', 'media', 'writing', 'services', 'about', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
});

test('research pillars and key projects render', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { name: /Artificial Intelligence/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Active Circuit Discovery' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Teaching an AI to run a power plant/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: /DreamPrice — a causal pricing world model/ })).toBeVisible();
});

test('media hub: video selector swaps the player', async ({ page }) => {
  await page.goto('./');
  const player = page.locator('#yt-player');
  await player.scrollIntoViewIfNeeded();
  const first = await player.getAttribute('src');
  const items = page.locator('.vitem');
  expect(await items.count()).toBeGreaterThanOrEqual(12);
  await items.nth(3).click();
  await expect(player).not.toHaveAttribute('src', first!);
  await expect(player).toHaveAttribute('src', /autoplay=1/);
});

test('media hub: run tab switches app iframes', async ({ page }) => {
  await page.goto('./');
  await page.locator('#media [data-tab=run]').click();
  const frame = page.locator('#app-iframe');
  await expect(frame).toBeVisible();
  const chips = page.locator('.chip');
  expect(await chips.count()).toBeGreaterThanOrEqual(6);
  await chips.filter({ hasText: 'TRIZ Arena' }).click();
  await expect(frame).toHaveAttribute('src', /triz-engine/);
  await expect(page.locator('#app-url')).toContainText('triz-engine');
});

test('media hub: talks tab plays the invited talk', async ({ page }) => {
  await page.goto('./');
  await page.locator('#media [data-tab=talks]').click();
  await expect(page.locator('#panel-talks')).toBeVisible();
  const player = page.locator('#talk-player');
  await expect(player).toHaveAttribute('src', /U9Z0TIeq1Fc/);
  const card = page.locator('.titem').first();
  await expect(card).toContainText('Active Circuit Discovery');
  await expect(card).toContainText('Active Inference Institute');
  await card.click();
  await expect(player).toHaveAttribute('src', /autoplay=1/);
});

test('hero shows the tiered capability taxonomy', async ({ page }) => {
  await page.goto('./');
  for (const label of ['Domains', 'Disciplines', 'Solutions']) {
    await expect(page.locator('.tier-label', { hasText: label })).toBeVisible();
  }
  await expect(page.locator('.chips span', { hasText: 'Turbomachinery' })).toBeVisible();
});

test('head carries SEO and structured data', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', /technektar|github/);
  await expect(page.locator('meta[name=robots]')).toHaveAttribute('content', /max-image-preview/);
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1);

  const raw = await page.locator('script[type="application/ld+json"]').innerText();
  const data = JSON.parse(raw);
  expect(data['@context']).toBe('https://schema.org');
  const types = data['@graph'].flatMap((n: any) =>
    Array.isArray(n['@type']) ? n['@type'] : [n['@type']]
  );
  for (const t of ['Organization', 'WebSite', 'ItemList', 'FAQPage', 'VideoObject', 'Book']) {
    expect(types).toContain(t);
  }
});

test('media hub: read tab lists real articles', async ({ page }) => {
  await page.goto('./');
  await page.locator('#media [data-tab=read]').click();
  await expect(page.locator('#panel-read')).toBeVisible();
  await expect(page.getByText('The Coffee Shop Mystery — Part A: Enter Café Chaos')).toBeVisible();
});

test('research cards show paper figures', async ({ page }) => {
  await page.goto('./');
  const fig = page.locator('img[src$="figures/prayoga.png"]');
  await fig.scrollIntoViewIfNeeded();
  await expect(fig).toBeVisible();
  const natural = await fig.evaluate((el: HTMLImageElement) => el.naturalWidth);
  expect(natural).toBeGreaterThan(100);
});

test('contact form shows success state on submit (network stubbed)', async ({ page }) => {
  await page.route('**/api/contact', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' })
  );
  await page.goto('./');
  await page.fill('#cf-name', 'Test Person');
  await page.fill('#cf-email', 'test@example.com');
  await page.fill('#cf-msg', 'Hello from the smoke test.');
  await page.click('button[type=submit]');
  await expect(page.locator('#form-sent')).toBeVisible();
  await expect(page.locator('#contact-form')).toBeHidden();
});

test('no horizontal overflow at mobile width', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('./');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

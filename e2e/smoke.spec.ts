import { expect, test } from '@playwright/test';

test('page renders all major sections', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/TechNektar/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'We turn deep research into systems that ship'
  );
  for (const id of ['practice', 'research', 'demos', 'writing', 'services', 'about', 'contact']) {
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

test('demo screenshots load as real images', async ({ page }) => {
  await page.goto('./');
  for (const name of ['prabodha', 'dreamprice']) {
    const img = page.locator(`img[src$="screenshots/${name}.png"]`);
    await img.scrollIntoViewIfNeeded();
    await expect(img).toBeVisible();
    const natural = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(natural, `${name}.png should decode`).toBeGreaterThan(100);
  }
});

test('contact form shows success state on submit (network stubbed)', async ({ page }) => {
  await page.route('**/formsubmit.co/**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":"true"}' })
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

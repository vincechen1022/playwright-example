import { test, expect } from '@playwright/test';

// Set viewport size for all tests in this file.
test.use({
  viewport: { width: 1200, height: 600 },
});

test('has title', async ({ page }) => {
  await page.goto('https://www.aesop.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(/aesop/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.aesop.com/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Search' }).filter({ visible: true }).first().click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Hand & Body' })).toBeVisible();
});

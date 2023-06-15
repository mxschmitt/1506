import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const element = page.locator('li.foo');

  await element.evaluate("(e) => setTimeout(() => element.click(), 3000)");

  await expect(element).toContainText([
    'Get Started',
  ]);

  await expect.poll(async() => element.count());
});

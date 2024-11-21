import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/')
  await page.locator('strong:has-text("Français")').click();
  await expect(page.getByPlaceholder('Rechercher sur Wikipédia')).toBeVisible();  
  await page.getByPlaceholder('Rechercher sur Wikipédia').click();
  await page.getByPlaceholder('Rechercher sur Wikipédia').fill('raton laveur');
  await page.keyboard.press('Enter');  
  await expect(page.locator('h1').first()).toHaveText(/Raton laveur/)
  await expect(page).toHaveTitle(/Raton laveur/); 
});


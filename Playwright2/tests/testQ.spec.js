const { test, expect } = require("@playwright/test");

test('Acces site', async ({page})=>{
    await page.goto ('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)

    let getStarted  = page.locator('text = Get Started').first()
    await expect(getStarted).toHaveAttribute('href', '/docs/intro')
    await getStarted.click()

    await expect(page.locator('text= Introduction').first()).toBeVisible()
});




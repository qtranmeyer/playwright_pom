const {test}  = require('@playwright/test')

//Group
test.describe('Connexion', ()=>{


    //Hook
    test.beforeEach(async({page})=>{
    
        await page.goto('https://www.saucedemo.com/')   
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click(); 
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
    })

    // test.afterAll(async({page})=>{
    //     await page.close()
    // })

    test('Inventory', async({page})=>{      
        await page.locator('data-test=add-to-cart-sauce-labs-backpack').click()   
        await page.locator('data-test=add-to-cart-test.allthethings()-t-shirt-(red)').click()

        // await page.locator('text=Sauce Labs Backpack').click()   
        // await expect(page.getByRole('class', {name: 'inventory_details_img'})).toBeVisible()
    })

    test('Check cart', async({page})=>{
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
    })

    test('Logout', async({page})=>{
        await page.getByRole('button', {name: 'Open Menu'}).click()
        await page.locator('id=logout_sidebar_link').click()
    })

})

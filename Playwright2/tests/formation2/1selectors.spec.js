const {test, expect} = require('@playwright/test')

let  username = 'standard_user'
let password ='secret_sauce'

test('Connect to SauceDemo', async({page})=>{
    await page.goto('https://www.saucedemo.com/'); 
    
    //using object propety
    await expect(page.locator('.login_logo')).toHaveText(/Swag Labs/)
    await page.locator('id=user-name').fill(username)
    await page.locator('id=password').fill(password)
    //using ccs selector
    await page.locator('#login-button').click()
    //using xpath
    await page.locator('xpath==//[@name="login-button"]')
    await expect(page.locator('.title')).toHaveText('Products');

   
})

/*
test('Chose products', async({page})=>{
    // await expect(page.locator('.title')).toHaveText('Products');
    // await expect(page.locator('text=Products').first()).toBeVisible()
    await page.locator('#add-to-cart-sauce-labs-backpack').click()
   
    await page.pause()
})
*/
const  { test, expect }  = require('@playwright/test')
let email = 'admin@yourstore.com'
let password = 'admin'


test('Slow Motion',  async({page}) =>{
    await page.goto('https://admin-demo.nopcommerce.com/login')
    // await page.locator('text=Email').click()
    await page.locator('input[name="Email"]').click()
    await page.locator('input[name="Email"]').press('Control+A')
    await page.locator('input[name="Email"]').fill(email)

    await page.locator('id=Password').click()
    await page.locator('id=Password').press('Control+A')
    await page.locator('id=Password').fill(password)

    await page.locator('text=Log in').click()
    // page.pause()
    // await page.waitForURL('https://admin-demo.nopcommerce.com/admin/')


   

})
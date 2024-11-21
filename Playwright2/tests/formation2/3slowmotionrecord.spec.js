const {test, expect, chromium} = require('@playwright/test')

let email = 'admin@yourstore.com'
let password = 'admin'

test('Slow motion recording define', async ()=>{
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo:{
            dir: 'tests/formation2/videos/',
            size:{width:800,  height:600}
        }
    })
    
    const page = await context.newPage()
    await page.goto('https://admin-demo.nopcommerce.com/login')
    
    await page.locator('input[name="Email"]').click()
    await page.locator('input[name="Email"]').press('Control+A')
    await page.locator('input[name="Email"]').fill(email)

    await page.locator('id=Password').click()
    await page.locator('id=Password').press('Control+A')
    await page.locator('id=Password').fill(password)

    await page.locator('text=Log in').click()
    

})
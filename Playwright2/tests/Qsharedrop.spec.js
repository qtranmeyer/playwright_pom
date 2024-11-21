const {test, chromium, expect }  = require('@playwright/test')
const { readFileSync } = require('fs')


test ('share a file', async({page})=>{
    // const {chromium} = require('playwright')
    const browser  = await chromium.launch()
    const page2   = await browser.newPage()
    const avatar = page.locator('.user.others .avatar');

    await page2.goto('https://sharedrop.io/rooms/playwright-test')
    await page.goto('https://sharedrop.io/rooms/playwright-test')
    page.bringToFront(); 

    const[fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'), 
        avatar.click()
    ])

    await fileChooser.setFiles('tests/demo.md')
    await page.locator('.user.others button', {hasText: 'Send'}).click()

    const[download]  = await Promise.all([
        page2.waitForEvent('download'),
        page2.locator('.user.others button', {hasText : 'Save'}).click()
    ])

   // expect(readFileSync(download.path), {encoding: 'utf8'}).toB
    expect(readFileSync(await download.path(), {encoding: 'utf8'})).toBe('Hello')
    

})
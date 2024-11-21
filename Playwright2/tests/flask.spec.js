const { test, expect } = require("@playwright/test");




test ('Connect sur Flask', async ({page})=>{
    await page.goto('https://allophysique.com/docs/nsi/html/page6/'); 
    
    //scroller
    // await page.evaluate(() =>window.scrollTo(0, document.scrollHeight)) 
    console.log('OK')
    await expect(page.locator('#flask')).toHaveText('Flask');
    console.log('OK2');
   
})
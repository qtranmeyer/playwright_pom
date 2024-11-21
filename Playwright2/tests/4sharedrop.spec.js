const {test, expect} = require ('@playwright/test'); 
const { promises } = require('dns');
const { readFileSync } = require('fs');


test.describe.only('Shardrop.io', ()=>{
    test ('share a file', async({page})=> {

        //creer 2e page
        //import & create browser
        const { chromium } = require('playwright');  
        const browser = await chromium.launch();    
        const page2 = await browser.newPage(); 
        await page2.goto('https://sharedrop.io/rooms/playwright-test')
        await page.goto('https://sharedrop.io/rooms/playwright-test')
        page.bringToFront(); 

        //Click  sur l'autre utilisateur et envoyer 1  fichier
        const avatar = page.locator('.user.others .avatar')

        // console.log(avatar); 
        //promise and send a file
        const [fileChooser]  = await Promise.all([
            page.waitForEvent('filechooser'),
            avatar.click()        
        ])
        await fileChooser.setFiles('tests/demo.md')
        await page.locator('.user.others button').locator('text=Send').click()
        // await page.pause()
        
        //promise and download file
       const[download] = await Promise.all([
            page2.waitForEvent('download'),
            page2.locator('.user.others button', {hasText: 'Save'}).click()
       ])       
       //read the content
       expect(readFileSync(await download.path(), {encoding: 'utf8'})).toBe('Hello')
    }); 
   
});



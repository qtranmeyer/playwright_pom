const{test, expect} =require('@playwright/test'); 


test('Snapshot', async({page})=>{
    await page.goto('https://playwright.dev/');
    expect(await page.screenshot()).toMatchSnapshot('button.png'); 
});

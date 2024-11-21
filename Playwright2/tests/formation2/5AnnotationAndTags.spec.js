const  {test, expect} = require('@playwright/test')

//Annotations
test.skip('Skip Test', async({page})=>{

})
test('test', async({page})=>{
    console.log('Hi !')
    await page.goto('https://www.saucedemo.com/')   
})

// test.only('test', async({page})=>{
//     test.slow()
// })

//Tags
test('Run this test @smoke', async({page})=>{
    await page.goto('https://www.saucedemo.com/')   

})

test('Run this test @fast', async({page})=>{
    await page.goto('https://www.saucedemo.com/')   

})

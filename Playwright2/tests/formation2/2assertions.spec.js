const {test, expect } =  require('@playwright/test') 


test ('Connect to Kitchentools', async({page})=>{
    await page.goto('https://kitchen.applitools.com/')
    

    //check element present or not
   
    let locator = page.locator('text="The Kitchen"')
    await expect(page.locator('text="The Kitchen"')).toBeVisible()
    await expect.soft(page.locator('text="The Kitchen"')).toBeHidden()  //soft permet de continuer les autres malgré element en erreur
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }

    //check element enable or disable
    await expect (locator).toBeEnabled()
    await expect.soft(locator).toBeDisabled()

    //check text
    await expect(locator).toHaveText('The Kitchen');  
    await expect(locator).not.toHaveText('QTM')
   
    //check attribute value
    await expect(locator).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(locator).toHaveAttribute('class', /.*css-dpm/)   //regex
    await expect(locator).toHaveClass(/.*css-dpmy2a/) 

    //check page URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')
    await exepect(page).toHaveTitle(/.*Kitchen/)   //regex

    
    await page.pause()
    //visual validation with sreenshot
    await expect(page).toHaveScreenshot()




    
})
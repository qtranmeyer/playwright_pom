const {test, expect} = require ('@playwright/test')
import {LoginPage} from '../pages/login'

test('Login', async({page})=>{
    // await page.goto('https://the-internet.herokuapp.com/login')
    const Login = new LoginPage(page)
    await Login.gotologinPage('https://the-internet.herokuapp.com/login')
    await Login.login('tomsmith', 'SuperSecretPassword!')
    
})
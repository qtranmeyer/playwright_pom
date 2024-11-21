
exports.LoginPage = class LoginPage{
    constructor(page){
        this.page =page
        this.usernamebox = page.locator('id=username')
        this.passwordbox = page.locator('id=password')
        this.loginbutton = page.getByRole('button', {name: 'Login'})
    }

    async login(username, password){
        await this.usernamebox.fill(username)     
        await this.passwordbox.fill(password)
        await this.loginbutton.click()
    }
    async gotologinPage(url){
        await this.page.goto(url)
    }
}





const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PenggunaPage = require('../support/pages/pengguna-page')

describe('User should be able to delete users', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Delete Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickMenuList()
        PenggunaPage.clickPenggunaDelete()

    })
})
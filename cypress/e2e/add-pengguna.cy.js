const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PenggunaPage = require('../support/pages/pengguna-page')

describe('User should be able to add users', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickPenggunaAdd()
        PenggunaPage.fillPenggunaName()
        PenggunaPage.fillPenggunaEmail()
        PenggunaPage.fillPenggunaPass()
        PenggunaPage.clickPenggunaBtn()

    })
})
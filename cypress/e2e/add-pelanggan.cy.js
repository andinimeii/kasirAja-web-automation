const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PelangganPage = require('../support/pages/pelanggan-page')

describe('User should be able to add customers', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Customers
        PelangganPage.clickPelangganMenu()
        PelangganPage.clickPelangganAdd()
        PelangganPage.fillPelangganName()
        PelangganPage.fillPelangganPhone()
        PelangganPage.fillPelangganAddress()
        PelangganPage.fillPelangganKet()
        PelangganPage.clickPelangganBtn()

    })
})
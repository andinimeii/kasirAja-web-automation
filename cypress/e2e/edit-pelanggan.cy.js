const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PelangganPage = require('../support/pages/pelanggan-page')

describe('User should be able to edit customers data', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Customers Data
        PelangganPage.clickPelangganMenu()
        PelangganPage.clickMenuList()
        PelangganPage.clickPelangganEdit()
        PelangganPage.fillEditPelangganName()
        PelangganPage.clickPelangganBtn()

        cy.visit('https://kasiraja.ajikamaludin.id/customers')
    })
})
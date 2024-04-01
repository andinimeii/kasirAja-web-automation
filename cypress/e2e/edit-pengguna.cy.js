const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PenggunaPage = require('../support/pages/pengguna-page')

describe('User should be able to edit users data', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickMenuList()
        PenggunaPage.clickPenggunaEdit()
        PenggunaPage.fillEditPenggunaName()
        PenggunaPage.fillPenggunaPass()
        PenggunaPage.clickPenggunaBtn()

        cy.visit('https://kasiraja.ajikamaludin.id/users')
    })
})
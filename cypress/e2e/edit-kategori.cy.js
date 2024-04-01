const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const KategoriPage = require('../support/pages/kategori-page')

describe('User should be able to edit categories', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Categories
        KategoriPage.clickKategoriMenu()
        KategoriPage.clickMenuList()
        KategoriPage.clickKategoriEdit()
        KategoriPage.fillEditKategoriDesc()
        KategoriPage.clickKategoriBtn()

        cy.visit('https://kasiraja.ajikamaludin.id/categories')
    })
})
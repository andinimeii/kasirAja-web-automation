const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const ProdukPage = require('../support/pages/produk-page')

describe('User should be able to edit products', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Products
        ProdukPage.clickProdukMenu()
        ProdukPage.clickMenuList()
        ProdukPage.clickProdukEdit()
        ProdukPage.fillEditProdukDesc()
        ProdukPage.clickProdukBtn()

        cy.visit('https://kasiraja.ajikamaludin.id/products')
    })
})
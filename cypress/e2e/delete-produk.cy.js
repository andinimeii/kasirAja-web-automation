const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const ProdukPage = require('../support/pages/produk-page')

describe('User should be able to delete products', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Delete Products
        ProdukPage.clickProdukMenu()
        ProdukPage.clickMenuList()
        ProdukPage.clickProdukDelete()

    })
})
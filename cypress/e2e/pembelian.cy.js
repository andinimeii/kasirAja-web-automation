const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PurchasesPage = require('../support/pages/pembelian-page')  

describe('User should be able to make and see purchases', () => {
    it('Add purchases - Valid', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Purchases
        PurchasesPage.clickPembelianMenu()
        PurchasesPage.clickPembelianAdd()
        PurchasesPage.clickPembelianProduk()
        PurchasesPage.clickPembelianProdukAdd()
        PurchasesPage.fillPembelianTotal()
        PurchasesPage.clickBuyBtn()
    })

    it('Add purchases - Invalid: Product item is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Purchases
        PurchasesPage.clickPembelianMenu()
        PurchasesPage.clickPembelianAdd()
        PurchasesPage.clickBuyBtn()
    })

    it('Detail purchases - Valid', () => {
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Detail Purchases
        PurchasesPage.clickPembelianMenu()
        PurchasesPage.clickPembelianDetail()
    })

})

const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PurchasesPage = require('../support/pages/pembelian-page')  

describe('User should be able to make a purchase', () => {
    it('with valid data', () => {

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

})

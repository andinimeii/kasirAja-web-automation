const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PurchasesPage = require('../support/pages/pembelian-page')  

describe('User should be able to see detail purchases', () => {
    it('with valid data', () => {

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

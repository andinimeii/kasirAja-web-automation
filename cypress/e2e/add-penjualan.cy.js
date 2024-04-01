const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const SalesPage = require('../support/pages/penjualan-page')  

describe('User should be able to input sales', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Input Sales
        SalesPage.clickSalesMenu()
        SalesPage.clickSalesAdd()
        SalesPage.clickSalesProduk()
        SalesPage.clickSalesProdukAdd()
        SalesPage.fillSalesTotal()
        SalesPage.clickPayBtn()
    
  })

})

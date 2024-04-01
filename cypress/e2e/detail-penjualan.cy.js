const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const SalesPage = require('../support/pages/penjualan-page')  

describe('User should be able to see detail sales', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Detail Sales
        SalesPage.clickSalesMenu()
        SalesPage.clickSalesDetail()
      
    })

})

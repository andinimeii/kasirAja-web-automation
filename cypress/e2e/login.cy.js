const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page')  
const DashboardPage = require('../support/pages/dashboard-page')  

describe('User should be able to login', () => { 
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Dashboard Page
        DashboardPage.goDashboard()
      
    })

})

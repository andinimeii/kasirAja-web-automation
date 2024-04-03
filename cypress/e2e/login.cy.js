const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page')  
const DashboardPage = require('../support/pages/dashboard-page')  

describe('User should be able to login', () => { 
    it('Login - Valid', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('Login - Invalid: Wrong Password', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillInvalidPassword()
        LoginPage.clickLoginButton()
    })

    it('Login - Invalid: Wrong Email', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillInvalidEmail()
        LoginPage.fillInvalidPassword()
        LoginPage.clickLoginButton()
    })

    it('Login - Invalid: Email is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillInvalidPassword()
        LoginPage.clickLoginButton()
    })

    it('Login - Invalid: Email type', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillInvalidEmailType()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('Login - Invalid: Password is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillInvalidEmail()
        LoginPage.clickLoginButton()
    })

})

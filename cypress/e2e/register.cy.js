const HomePage = require('../support/pages/home-page')
const RegisterPage = require('../support/pages/signup-page')   

describe('User should be able to register', () => {  
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Sign Up
        HomePage.clickSignUpMenu()

        // 3. Register - Create Users
        RegisterPage.fillnamaToko()
        RegisterPage.fillEmail()
        RegisterPage.fillPassword()
        RegisterPage.clickSignUpBtn()

    })

})

const HomePage = require('../support/pages/home-page')
const RegisterPage = require('../support/pages/signup-page')   

describe('User should be able to register', () => {  
    it('Register - Valid', () => {

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

    it('Register - Invalid: Store name is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Sign Up
        HomePage.clickSignUpMenu()

        // 3. Register - Create Users
        RegisterPage.fillEmail()
        RegisterPage.fillPassword()
        RegisterPage.clickSignUpBtn()

    })

    it('Register - Invalid: Email is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Sign Up
        HomePage.clickSignUpMenu()

        // 3. Register - Create Users
        RegisterPage.fillnamaToko()
        RegisterPage.fillPassword()
        RegisterPage.clickSignUpBtn()

    })

    it('Register - Invalid: Password is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Sign Up
        HomePage.clickSignUpMenu()

        // 3. Register - Create Users
        RegisterPage.fillnamaToko()
        RegisterPage.fillEmail()
        RegisterPage.clickSignUpBtn()

    })

    it('Register - Invalid: Email type', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Sign Up
        HomePage.clickSignUpMenu()

        // 3. Register - Create Users
        RegisterPage.fillnamaToko()
        RegisterPage.fillInvalidEmailType()
        RegisterPage.fillPassword()
        RegisterPage.clickSignUpBtn()

    })

})

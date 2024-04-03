const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PenggunaPage = require('../support/pages/pengguna-page')

describe('User should be able to manage users', () => {
    it('Add users - Valid', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickPenggunaAdd()
        PenggunaPage.fillPenggunaName()
        PenggunaPage.fillPenggunaEmail()
        PenggunaPage.fillPenggunaPass()
        PenggunaPage.clickPenggunaBtn()

    })

    it('Add users - Invalid: Name is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickPenggunaAdd()
        PenggunaPage.fillPenggunaEmail()
        PenggunaPage.fillPenggunaPass()
        PenggunaPage.clickPenggunaBtn()

    })

    it('Add users - Invalid: Email is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickPenggunaAdd()
        PenggunaPage.fillPenggunaName()
        PenggunaPage.fillPenggunaPass()
        PenggunaPage.clickPenggunaBtn()

    })

    it('Add users - Invalid: Password is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickPenggunaAdd()
        PenggunaPage.fillPenggunaName()
        PenggunaPage.fillPenggunaEmail()
        PenggunaPage.clickPenggunaBtn()

    })

    it('Edit users - Valid', () => {
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickMenuList()
        PenggunaPage.clickPenggunaEdit()
        PenggunaPage.fillEditPenggunaName()
        PenggunaPage.fillPenggunaPass()
        PenggunaPage.clickPenggunaBtn()
        PenggunaPage.goPenggunaPage()
    })

    it('Delete users - Valid', () => {
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Delete Users
        PenggunaPage.clickPenggunaMenu()
        PenggunaPage.clickMenuList()
        PenggunaPage.clickPenggunaDelete()
    })

})
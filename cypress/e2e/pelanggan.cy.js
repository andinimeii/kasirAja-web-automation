const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const PelangganPage = require('../support/pages/pelanggan-page')

describe('User should be able to manage customers', () => {
    it('Add customers - Valid', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Customers
        PelangganPage.clickPelangganMenu()
        PelangganPage.clickPelangganAdd()
        PelangganPage.fillPelangganName()
        PelangganPage.fillPelangganPhone()
        PelangganPage.fillPelangganAddress()
        PelangganPage.fillPelangganKet()
        PelangganPage.clickPelangganBtn()

    })

    it('Add customers - Invalid: Name is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Customers
        PelangganPage.clickPelangganMenu()
        PelangganPage.clickPelangganAdd()
        PelangganPage.fillPelangganPhone()
        PelangganPage.fillPelangganAddress()
        PelangganPage.fillPelangganKet()
        PelangganPage.clickPelangganBtn()

    })

    it('Edit customers - Valid', () => {
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Customers Data
        PelangganPage.clickPelangganMenu()
        PelangganPage.clickMenuList()
        PelangganPage.clickPelangganEdit()
        PelangganPage.fillEditPelangganName()
        PelangganPage.clickPelangganBtn()
        PelangganPage.goPelangganPage()
    })

    it('Delete customers - Valid', () => {
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Delete Customers
        PelangganPage.clickPelangganMenu()
        PelangganPage.clickMenuList()
        PelangganPage.clickPelangganDelete()
    })
})
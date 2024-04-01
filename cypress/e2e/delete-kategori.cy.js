const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const KategoriPage = require('../support/pages/kategori-page')

describe('User should be able to delete categories', () => {
    it('with valid data', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Delete Categories
        KategoriPage.clickKategoriMenu()
        KategoriPage.clickMenuList()
        KategoriPage.clickKategoriDelete()

    })
})
const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const KategoriPage = require('../support/pages/kategori-page')

describe('User should be able to manage categories', () => {
    it('Add categories - Valid', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Categories
        KategoriPage.clickKategoriMenu()
        KategoriPage.clickKategoriAdd()
        KategoriPage.fillKategoriName()
        KategoriPage.fillKategoriDesc()
        KategoriPage.clickKategoriBtn()

    })

    it('Add categories - Invalid: Category name is empty', () => {

        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Add Categories
        KategoriPage.clickKategoriMenu()
        KategoriPage.clickKategoriAdd()
        KategoriPage.fillKategoriDesc()
        KategoriPage.clickKategoriBtn()

    })
    
    it('Edit categories - Valid', () => {
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Categories
        KategoriPage.clickKategoriMenu()
        KategoriPage.clickMenuList()
        KategoriPage.clickKategoriEdit()
        KategoriPage.fillEditKategoriDesc()
        KategoriPage.clickKategoriBtn()
        KategoriPage.goKategoriPage()
    })

    it('Delete categories - Valid', () => {
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
        KategoriPage.clickConfirmKategoriDelete()
    })

})
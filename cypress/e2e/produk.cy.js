const HomePage = require('../support/pages/home-page')
const LoginPage = require('../support/pages/login-page') 
const ProdukPage = require('../support/pages/produk-page')

describe('User should be able to manage products', () => {
    it('Add product - Valid', () => {
        
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Input Products
        ProdukPage.clickProdukMenu()
        ProdukPage.clickProdukAdd()
        ProdukPage.fillProdukKode()
        ProdukPage.fillProdukName()
        ProdukPage.fillProdukDesc()
        ProdukPage.fillHargaBeli()
        ProdukPage.fillHargaJual()
        ProdukPage.fillProdukStok()
        ProdukPage.clickKategoriProduk()
        ProdukPage.fillKategoriProduk()
        ProdukPage.clickProdukBtn()
        
    })

    it('Edit product - Valid', () => {
        
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Edit Products
        ProdukPage.clickProdukMenu()
        ProdukPage.clickMenuList()
        ProdukPage.clickProdukEdit()
        ProdukPage.fillEditProdukDesc()
        ProdukPage.clickProdukBtn()
        ProdukPage.goProdukPage()
        
    })

    it('Delete product - Valid', () => {
        
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Delete Products
        ProdukPage.clickProdukMenu()
        ProdukPage.clickMenuList()
        ProdukPage.clickProdukDelete()
        
    })
})
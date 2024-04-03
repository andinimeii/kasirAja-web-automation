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

    it('Add product - Invalid: Product ID is empty', () => {
        // 1. Visit Url
        HomePage.goHomepage()

        // 2. Login
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()

        // 3. Input Products
        ProdukPage.clickProdukMenu()
        ProdukPage.clickProdukAdd()
        ProdukPage.clearProdukKode()
        ProdukPage.fillProdukName()
        ProdukPage.fillProdukDesc()
        ProdukPage.fillHargaBeli()
        ProdukPage.fillHargaJual()
        ProdukPage.fillProdukStok()
        ProdukPage.clickKategoriProduk()
        ProdukPage.fillKategoriProduk()
        ProdukPage.clickProdukBtn()
    })

    it('Add product - Invalid: Product name is empty', () => {
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
        ProdukPage.fillProdukDesc()
        ProdukPage.fillHargaBeli()
        ProdukPage.fillHargaJual()
        ProdukPage.fillProdukStok()
        ProdukPage.clickKategoriProduk()
        ProdukPage.fillKategoriProduk()
        ProdukPage.clickProdukBtn()
    })

    it('Add product - Invalid: Sell price is empty', () => {
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
        ProdukPage.fillHargaJual()
        ProdukPage.fillProdukStok()
        ProdukPage.clickKategoriProduk()
        ProdukPage.fillKategoriProduk()
        ProdukPage.clickProdukBtn()
    })

    it('Add product - Invalid: Purchase price is empty', () => {
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
        ProdukPage.fillProdukStok()
        ProdukPage.clickKategoriProduk()
        ProdukPage.fillKategoriProduk()
        ProdukPage.clickProdukBtn()
    })

    it('Add product - Invalid: Stock is empty', () => {
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
        ProdukPage.clearProdukStock()
        ProdukPage.clickKategoriProduk()
        ProdukPage.fillKategoriProduk()
        ProdukPage.clickProdukBtn()
    })

    it('Add product - Invalid: Category is empty', () => {
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
        ProdukPage.clickConfirmProdukDelete()
        
    })
})
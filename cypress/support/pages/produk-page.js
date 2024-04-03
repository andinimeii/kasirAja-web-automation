const locator = require('../locators/produk-page-locators')
const staticText = require('../static_texts/static-texts')
const timeout = require('../../config')
// require('../locators/kategori-page-locators')

class produkPage {

    // VISIT PRODUK URL
    async goProdukPage() {
        cy.visit('/products')
    }

    // SIDEBAR MENU PRODUK
    async clickProdukMenu() {
        cy.xpath(locator.datatestid.produk_menu, { timeout: 5000 }).contains('produk').click(), timeout.e2e
    }

    // ADD
    async clickProdukAdd() {
        cy.xpath(locator.datatestid.produk_add, { timeout: 5000 }).contains('tambah').click()
    }

    async clearProdukKode() {
        cy.xpath(locator.datatestid.kodeProduk_input)
            .clear()
    }

    async fillProdukKode() {
        cy.xpath(locator.datatestid.kodeProduk_input)
            .clear()
            .type(staticText.produkPage.kodeProduk, {force: true})
            .should('have.value', staticText.produkPage.kodeProduk, timeout.e2e)
    }

    async fillProdukName() {
        cy.xpath(locator.datatestid.namaProduk_input)
            .type(staticText.produkPage.namaProduk, {force: true})
            .should('have.value', staticText.produkPage.namaProduk, timeout.e2e)
    }

    async fillProdukDesc() {
        cy.xpath(locator.datatestid.descProduk_input)
            .type(staticText.produkPage.descProduk, {force: true})
            .should('have.value', staticText.produkPage.descProduk, timeout.e2e)
    }

    async fillHargaBeli() {
        cy.xpath(locator.datatestid.hargaBeli_input)
            .type(staticText.produkPage.hargaBeli, {force: true})
            .should('have.value', staticText.produkPage.hargaBeliVerify, timeout.e2e)
    }

    async fillHargaJual() {
        cy.xpath(locator.datatestid.hargaJual_input)
            .type(staticText.produkPage.hargaJual, {force: true})
            .should('have.value', staticText.produkPage.hargaJualVerify, timeout.e2e)
    }

    async fillProdukStok() {
        cy.xpath(locator.datatestid.stok_input)
            .clear()
            .type(staticText.produkPage.stok, {force: true})
            .should('have.value', staticText.produkPage.stok, timeout.e2e)
    }

    async clearProdukStock() {
        cy.xpath(locator.datatestid.stok_input)
            .clear()
    }

    async clickKategoriProduk() {
        cy.xpath(locator.datatestid.kategoriProduk_btn)
            .click(), timeout.e2e
            
    }

    async fillKategoriProduk() {
        cy.xpath(locator.datatestid.kategori_input, { timeout: 5000 },  {force: true})
            .should('contain.text', staticText.produkPage.kategori).click(), timeout.e2e

    }

    async clickProdukBtn() {
        cy.xpath(locator.datatestid.add_button).contains('simpan').click(), timeout.e2e
    }

    async clickMenuList() {
        cy.xpath(locator.datatestid.list_button, { multiple: true }, { timeout: 5000 }).click(), timeout.e2e

    }

    //EDIT
    async clickProdukEdit() {
        cy.xpath(locator.datatestid.edit_button).contains('ubah').click(), { timeout: 5000 }
        
    }

    async fillEditProdukDesc() {
        cy.xpath(locator.datatestid.descProduk_input)
            .clear()
            .type(staticText.produkPage.editDescProduk, {force: true})
            .should('have.value', staticText.produkPage.editDescProduk, timeout.e2e)
    }

    //DELETE
    // async clickProdukDelete() {
    //     cy.xpath(locator.datatestid.delete_button).contains('hapus').click(), { timeout: 5000 }
    //     cy.xpath(locator.datatestid.confirm_button).click()
    // }

    async clickProdukDelete() {
        cy.wait(2000)
        cy.xpath(locator.datatestid.delete_button, {force: true})
        .should('be.visible')
        .contains('hapus').click(), { timeout: 5000 }
        
    }

    async clickConfirmProdukDelete() {
        cy.wait(2000)
        cy.xpath(locator.datatestid.confirm_button, {force: true}).contains('Delete').click(), { timeout: 5000 }
        cy.wait(1000)
        
    }

}

module.exports = new produkPage()
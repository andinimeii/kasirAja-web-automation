const locator = require('../locators/kategori-page-locators')
const staticText = require('../static_texts/static-texts')
const timeout = require('../../config')

class kategoriPage {
    
    async clickKategoriMenu() {
        cy.xpath(locator.datatestid.kategori_menu, { timeout: 5000 }).contains('kategori').click()
    }

    //  ADD
    async clickKategoriAdd() {
        cy.xpath(locator.datatestid.kategori_add, { timeout: 5000 }).contains('tambah').click()
    }

    async fillKategoriName() {
        cy.xpath(locator.datatestid.namaKategori_input)
            .type(staticText.kategoriPage.namaKategori, {force: true})
            .should('have.value', staticText.kategoriPage.namaKategori, timeout.e2e)
    }

    async fillKategoriDesc() {
        cy.xpath(locator.datatestid.descKategori_input)
            .type(staticText.kategoriPage.descKategori, {force: true})
            .should('have.value', staticText.kategoriPage.descKategori, timeout.e2e)
    }

    async clickKategoriBtn() {
        cy.xpath(locator.datatestid.add_button).contains('simpan').click(), timeout.e2e
    }

    async clickMenuList() {
        cy.xpath(locator.datatestid.list_button,{ multiple: true }, { timeout: 5000 }).click(), timeout.e2e

    }

    // EDIT KATEGORI DESKRIPSI
    async clickKategoriEdit() {
        cy.xpath(locator.datatestid.edit_button).contains('ubah').click(), { timeout: 5000 }   
    }

    async fillEditKategoriDesc() {
        cy.xpath(locator.datatestid.descKategori_input)
            .clear()
            .type(staticText.kategoriPage.editDesc, {force: true})
            .should('have.value', staticText.kategoriPage.editDesc, timeout.e2e)
    }

    // DELETE KATEGORI
    async clickKategoriDelete() {
        cy.xpath(locator.datatestid.delete_button).contains('hapus').click(), { timeout: 5000 }
        cy.xpath(locator.datatestid.confirm_button).click()
    }

}

module.exports = new kategoriPage()
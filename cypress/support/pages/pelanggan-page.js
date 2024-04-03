const locator = require('../locators/pelanggan-page-locators')
const staticText = require('../static_texts/static-texts')
const timeout = require('../../config')

class pelangganPage {

    // VISIT PELANGGAN URL
    async goPelangganPage() {
        cy.visit('/customers')
    }

    // SIDEBAR MENU PELANGGAN
    async clickPelangganMenu() {
        cy.xpath(locator.datatestid.pelanggan_menu, { timeout: 5000 }).contains('pelanggan').click()
    }

    // ADD PELANGGAN BARU
    async clickPelangganAdd() {
        cy.xpath(locator.datatestid.pelanggan_add, { timeout: 5000 }).contains('tambah').click()
    }

    async fillPelangganName() {
        cy.xpath(locator.datatestid.namaPelanggan_input)
            .type(staticText.pelangganPage.nama, {force: true})
            .should('have.value', staticText.pelangganPage.nama, timeout.e2e)
    }

    async fillPelangganPhone() {
        cy.xpath(locator.datatestid.phonePelanggan_input)
            .type(staticText.pelangganPage.no_hp, {force: true})
            .should('have.value', staticText.pelangganPage.no_hp, timeout.e2e)
    }

    async fillPelangganAddress() {
        cy.xpath(locator.datatestid.addressPelanggan_input)
            .type(staticText.pelangganPage.alamat, {force: true})
            .should('have.value', staticText.pelangganPage.alamat, timeout.e2e)
    }

    async fillPelangganKet() {
        cy.xpath(locator.datatestid.ketPelanggan_input)
            .type(staticText.pelangganPage.keterangan, {force: true})
            .should('have.value', staticText.pelangganPage.keterangan, timeout.e2e)
    }

    // BUTTON SIMPAN
    async clickPelangganBtn() {
        cy.xpath(locator.datatestid.add_button).contains('simpan').click(), timeout.e2e
    }

    // MENU LIST
    async clickMenuList() {
        cy.xpath(locator.datatestid.list_button, { multiple: true }, { timeout: 5000 }).click(), timeout.e2e
    }

    // EDIT NAMA PELANGGAN
    async clickPelangganEdit() {
        cy.xpath(locator.datatestid.edit_button).contains('ubah').click(), { timeout: 5000 }
        
    }

    async fillEditPelangganName() {
        cy.xpath(locator.datatestid.namaPelanggan_input)
            .clear()
            .type(staticText.pelangganPage.editNama, {force: true})
            .should('have.value', staticText.pelangganPage.editNama, timeout.e2e)
    }

    // DELETE PELANGGAN
    async clickPelangganDelete() {
        cy.xpath(locator.datatestid.delete_button).contains('hapus').click(), { timeout: 5000 }
        cy.xpath(locator.datatestid.confirm_button).click()
        cy.wait(2000)
    }
}

module.exports = new pelangganPage()
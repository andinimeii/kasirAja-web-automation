const locator = require('../locators/pengguna-page-locators')
const staticText = require('../static_texts/static-texts')
const timeout = require('../../config')

class penggunaPage {

    // VISIT PENGGUNA URL
    async goPenggunaPage() {
        cy.visit('/users')
    }

    // SIDEBAR MENU PENGGUNA
    async clickPenggunaMenu() {
        cy.xpath(locator.datatestid.pengguna_menu, { timeout: 5000 }).contains('pengguna').click()
    }

    // ADD
    async clickPenggunaAdd() {
        cy.xpath(locator.datatestid.pengguna_add, { timeout: 5000 }).contains('tambah').click()
    }

    async fillPenggunaName() {
        cy.xpath(locator.datatestid.namaPengguna_input)
            .type(staticText.penggunaPage.nama, {force: true})
            .should('have.value', staticText.penggunaPage.nama, timeout.e2e)
    }

    async fillPenggunaEmail() {
        cy.xpath(locator.datatestid.emailPengguna_input)
            .type(staticText.penggunaPage.email, {force: true})
            .should('have.value', staticText.penggunaPage.email, timeout.e2e)
    }

    async fillPenggunaPass() {
        cy.xpath(locator.datatestid.passPengguna_input)
            .type(staticText.penggunaPage.password, {force: true})
            .should('have.value', staticText.penggunaPage.password, timeout.e2e)
    }

    async clickPenggunaBtn() {
        cy.xpath(locator.datatestid.add_button).contains('simpan').click(), timeout.e2e
    }

    async clickMenuList() {
        cy.xpath(locator.datatestid.list_button, { multiple: true }, { timeout: 5000 }).click(), timeout.e2e

    }

    // EDIT NAMA PENGGUNA
    async clickPenggunaEdit() {
        cy.xpath(locator.datatestid.edit_button).contains('ubah').click(), { timeout: 5000 }
        
    }

    async fillEditPenggunaName() {
        cy.xpath(locator.datatestid.namaPengguna_input)
            .clear()
            .type(staticText.penggunaPage.editNama, {force: true})
            .should('have.value', staticText.penggunaPage.editNama, timeout.e2e)
    }

    // DELETE PENGGUNA
    async clickPenggunaDelete() {
        cy.xpath(locator.datatestid.delete_button).contains('hapus').click(), { timeout: 5000 }
        cy.xpath(locator.datatestid.confirm_button).click()
        cy.wait(2000)
    }

}

module.exports = new penggunaPage()
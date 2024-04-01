const timeout = require('../../config')
const locator = require('../locators/pembelian-page-locators')
const staticText = require('../static_texts/static-texts')

class purchasePage {

    async clickPembelianMenu() {
        cy.xpath(locator.datatestid.purchase_menu).click()
    }

    // ADD
    async clickPembelianAdd() {
        cy.xpath(locator.datatestid.purchaseadd_menu).contains('tambah').click()
    }

    async clickPembelianProduk() {
        cy.xpath(locator.datatestid.product_menu).contains('produk').click()
        cy.wait(2000)
    }

    async clickPembelianProdukAdd() {
        cy.xpath(locator.datatestid.product_add).contains("Basreng Pedas").click()
    }

    async fillPembelianTotal() {
        cy.xpath(locator.datatestid.total).click()
        .clear()
        .type(staticText.pembelianPage.total, {force: true})
            .should('have.value', staticText.pembelianPage.total, timeout.e2e)
    }

    async clickBuyBtn() {
        cy.xpath(locator.datatestid.buy_button).click()
        cy.wait(2000)
        cy.visit('https://kasiraja.ajikamaludin.id/purchases')
    }

    // DETAIL
    async clickPembelianDetail() {
        cy.xpath(locator.datatestid.detail_button).click()
    }
}

module.exports = new purchasePage()
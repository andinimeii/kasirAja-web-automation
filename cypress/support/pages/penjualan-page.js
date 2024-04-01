const timeout = require('../../config')
const locator = require('../locators/penjualan-page-locators')
const staticText = require('../static_texts/static-texts')

class salesPage {

    async clickSalesMenu() {
        cy.xpath(locator.datatestid.sales_menu).click()
    }

    // ADD PENJUALAN
    async clickSalesAdd() {
        cy.xpath(locator.datatestid.salesadd_menu).contains('tambah').click()
    }

    async clickSalesProduk() {
        cy.xpath(locator.datatestid.product_menu).contains('produk').click()
        cy.wait(2000)
    }

    async clickSalesProdukAdd() {
        cy.xpath(locator.datatestid.product_add).contains("Basreng Pedas").click()
    }

    async fillSalesTotal() {
        cy.xpath(locator.datatestid.total).click()
        .clear()
        .type(staticText.penjualanPage.total, {force: true})
            .should('have.value', staticText.penjualanPage.total, timeout.e2e)
    }

    async clickPayBtn() {
        cy.xpath(locator.datatestid.pay_button).click()
        cy.wait(2000)
        cy.xpath(locator.datatestid.confirm_button).click()
        cy.xpath(locator.datatestid.close_button).click()
        cy.visit('https://kasiraja.ajikamaludin.id/sales')
    }

    // DETAIL
    async clickSalesDetail() {
        cy.xpath(locator.datatestid.detail_button).click()
    }

}

module.exports = new salesPage()
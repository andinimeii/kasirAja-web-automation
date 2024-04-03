const timeout = require('../../config')
const locator = require('../locators/penjualan-page-locators')
const staticText = require('../static_texts/static-texts')

class salesPage {

    // VISIT PENJUALAN URL
    async goPenjualanPage() {
        cy.visit('/sales')
    }

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

    async fillSalesTotalNone() {
        cy.xpath(locator.datatestid.total).click()
        .clear()
        .type(staticText.penjualanPage.totalNone, {force: true})
            .should('have.value', staticText.penjualanPage.totalNone, timeout.e2e)
    }

    async fillSalesCustomerNone() {
        cy.xpath(locator.datatestid.removeCustomer).click()
    }

    async verifySalesCustomerNone() {
        cy.xpath(locator.datatestid.removeCustomer).click()
        cy.xpath('//[text()="pelanggan kosong"]').should('be.visible');
    }

    async clickPayBtn() {
        cy.xpath(locator.datatestid.pay_button).click()
        cy.wait(2000)
    }

    async confirmPayBtn() {
        cy.xpath(locator.datatestid.confirm_button).click()
        cy.xpath(locator.datatestid.close_button).click()
        cy.visit('/sales')
    }

    // DETAIL
    async clickSalesDetail() {
        cy.xpath(locator.datatestid.detail_button).click()
    }

}

module.exports = new salesPage()
const timeout = require('../../config')
const locator = require('../locators/dashboard-page-locators')

class dashboardPage {

    async goDashboard() {
        cy.visit('https://kasiraja.ajikamaludin.id/dashboard')
    }

    async goDashboard() {
        cy.xpath('//h3[text()="kasirAja"]').should('be.visible');
    }
}

module.exports = new dashboardPage()
const locator = require('../locators/home-page-locators')

class homePage {

    // HOME
    async goHomepage() {
        // cy.visit('https://kasiraja.ajikamaludin.id/')
        // dari base url
        cy.visit('/') 
    }

    // SIGN UP
    async clickSignUpMenu() {
        cy.xpath(locator.datatestid.signup_menu).click()
        cy.wait(2000)
    }
}

module.exports = new homePage()

const timeout = require('../../config')
const locator = require('../locators/login-page-locators')
const staticText = require('../static_texts/static-texts')

class loginPage {

    async fillEmail () {
        cy.xpath(locator.datatestid.email_input).type(staticText.loginPage.email, {force: true}).should('have.value', staticText.loginPage.email, timeout.e2e)
    }

    async fillPassword () {
        cy.xpath(locator.datatestid.password_input).type(staticText.loginPage.password, {force: true}).should('have.value', staticText.loginPage.password, timeout.e2e)
    }

    async clickLoginButton () {
        cy.xpath(locator.datatestid.login_button).click()

        cy.wait(2000)
    }
    
    
}

module.exports = new loginPage()

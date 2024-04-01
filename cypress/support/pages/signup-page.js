const timeout = require('../../config')
const locator = require('../locators/signup-page-locators')
const staticText = require('../static_texts/static-texts')

class registerPage {

    async fillnamaToko() {
        cy.xpath(locator.datatestid.namaToko_input)
            .type(staticText.signupPage.namaToko, {force: true})
            .should('have.value', staticText.signupPage.namaToko, timeout.e2e)
    }

    async fillEmail() {
        cy.xpath(locator.datatestid.email_input)
            .type(staticText.signupPage.email, {force: true})
            .should('have.value', staticText.signupPage.email, timeout.e2e)
    }

    async fillPassword() {
        cy.xpath(locator.datatestid.password_input)
            .type(staticText.signupPage.password, {force: true})
            .should('have.value', staticText.signupPage.password, timeout.e2e)
    }

    async clickSignUpBtn() {
        cy.xpath(locator.datatestid.signup_button)
            .click()
        
        cy.wait(2000)
    }

}

module.exports = new registerPage();

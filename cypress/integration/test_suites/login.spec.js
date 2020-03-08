/// <reference types="Cypress" />

import HomePage from '../../support/pages/home.po'
import LoginPage from '../../support/pages/login.po'

const dbLogin = require('../../fixtures/loginDB')
const dbTitle = require('../../fixtures/titlesDB')

describe('Login flow', function() {

    this.beforeEach(() => {
        HomePage
            .visit()
            .goToLoginPage()

        cy.title().should('eq', dbTitle.LOGIN_PAGE)
    })


    it('Should login as a Shipper', () => {
        LoginPage.submitLoginForm(dbLogin.shipper.email, dbLogin.shipper.password)

        cy.title().should('eq', dbTitle.SHIPPER_DASHBOARD)
    })

    it('Should login as a Carrier', () => {
        LoginPage.submitLoginForm(dbLogin.carrier.email, dbLogin.carrier.password)
        
        cy.title().should('eq', dbTitle.CARRIER_DASHBOARD)
    })
})
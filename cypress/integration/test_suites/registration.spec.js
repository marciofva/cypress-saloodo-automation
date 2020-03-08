/// <reference types="Cypress" />

import HomePage from '../../support/pages/home.po'
import RegistrationPage from '../../support/pages/registration.po'

const dbAddShipper = require('../../fixtures/add_shipperDB')
const dbAddCarrier = require('../../fixtures/add_carrierDB')
const dbTitle = require('../../fixtures/titlesDB')

describe('Registration flow', function() {

    this.beforeEach(() => {
        HomePage.visit()

        cy.title().should('eq', dbTitle.SALOODO_HOME_PAGE)    
    })


    it('Should register a new Shipper', () => {
        HomePage.goToShipperRegistrationPage()

        cy.title().should('eq', dbTitle.SHIPPER_REGISTRATION_PAGE)

        RegistrationPage.signUpShipper(dbAddShipper.shipper.companyName, 
                                       dbAddShipper.shipper.email,
                                       dbAddShipper.shipper.firstName,
                                       dbAddShipper.shipper.lastName,
                                       dbAddShipper.shipper.phone,
                                       dbAddShipper.shipper.vatId)
                        .getShipperRegistrationMessage()
                        .should('contain.text', 'Thank you for creating your account with Saloodo!') 

        cy.title().should('eq', dbTitle.SHIPPER_ACCOUNT_CREATION_PAGE) 
    })

    it('Should register a new Carrier', () => {
        HomePage.goToCarrierRegistrationPage()

        cy.title().should('eq', dbTitle.CARRIER_REGISTRATION_PAGE)  

        RegistrationPage.signUpCarrier(dbAddCarrier.carrier.companyName, 
                                       dbAddCarrier.carrier.firstName,
                                       dbAddCarrier.carrier.lastName,
                                       dbAddCarrier.carrier.email,
                                       dbAddCarrier.carrier.phone,
                                       dbAddCarrier.carrier.password)
                        .getCarrierPopupMessage()
                        .should('contain.text', 'Welcome to Saloodo!') 

        cy.title().should('eq', dbTitle.CARRIER_DASHBOARD) 
    })
})
/// <reference types="Cypress" />

import HomePage from '../../support/pages/home.po'
import DashboardShipper from '../../support/pages/dashboard_shipper.po'

const dbLogin = require('../../fixtures/loginDB')
const dbTitle = require('../../fixtures/titlesDB')
const dbShipperDetails = require('../../fixtures/update_ShipperDetailsDB')

describe('Shipper dashboard flow', function() {

    this.beforeEach(() => {
        HomePage.visit()
                .goToLoginPage()
                .submitLoginForm(dbLogin.shipper.email, dbLogin.shipper.password)
        
        cy.title().should('eq', dbTitle.SHIPPER_DASHBOARD)
    })


    it('Should enter additional company details', () => {
        DashboardShipper.fillUpAdditionalData(dbShipperDetails.street, 
                                              dbShipperDetails.streetNo,
                                              dbShipperDetails.addressExtension,
                                              dbShipperDetails.postcode,
                                              dbShipperDetails.city)
        
        DashboardShipper.getCompanyName().should('have.value', dbShipperDetails.companyName)
        DashboardShipper.getStreetName().should('have.value', dbShipperDetails.street)
        DashboardShipper.getStreetNumber().should('have.value', dbShipperDetails.streetNo)
        DashboardShipper.getPostalCode().should('have.value', dbShipperDetails.postcode)
        DashboardShipper.getCity().should('have.value', dbShipperDetails.city)
        DashboardShipper.getCountry().should('have.text', dbShipperDetails.country)
        DashboardShipper.getVatId().should('have.value', dbShipperDetails.vatId)
    })
})
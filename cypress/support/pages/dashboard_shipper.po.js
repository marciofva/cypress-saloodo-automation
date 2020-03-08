const skipBtn = 'Skip it'
const detailsCompanyBtn = 'Enter company details'
const companyNameInput = 'input[name="displayName"]'
const streetInput = 'input[name="street"]'
const streetNoInput = 'input[name="streetNo"]'
const addressExtensionInput = 'input[name="streetNoAddition"]'
const postalCodeInput = 'input[name="postalCode"]'
const cityInput = 'input[name="city"]'
const countryInput = '.Select-value-label'
const vatIdInput = 'input[name="vatId"]'

class DashboardShipper {

    goToCompanyDetails(){
        cy.contains(detailsCompanyBtn).click()
    }

    skipActivationPopup(){
        cy.contains(skipBtn).click()
    }

    fillUpAdditionalData(streetName, streetNo, adressExtension, postalCode, city){
        this.skipActivationPopup()
        this.goToCompanyDetails()
        cy.get(streetInput).type('{selectall}{backspace}')
        cy.get(streetInput).click().focused().clear().type(streetName);
        cy.get(streetNoInput).clear({force: true}).type(streetNo)
        cy.get(addressExtensionInput).clear({force: true}).type(adressExtension)
        cy.get(postalCodeInput).clear({force: true}).type(postalCode)
        cy.get(cityInput).clear({force: true}).type(city)
    }

    getCompanyName(){
        return cy.get(companyNameInput)
    }

    getStreetName(){
        return cy.get(streetInput)
    }

    getStreetNumber(){
        return cy.get(streetNoInput)
    }

    getAddressExtension(){
        return cy.get(addressExtensionInput)
    }

    getPostalCode(){
        return cy.get(postalCodeInput)
    }

    getCity(){
        return cy.get(cityInput)
    }

    getCountry(){
        return cy.get(countryInput)
    }

    getVatId(){
        return cy.get(vatIdInput)
    }
}
module.exports = new DashboardShipper()
const companyNameShipperInput = 'input[name="name"]'
const companyNameCarrierInput = 'input[name="companyName"]'
const emailInput = 'input[name="email"]'
const firstNameInput = 'input[name="firstName"]'
const lastNameInput = 'input[name="lastName"]'
const phoneNumberShipperInput = 'input[name="phoneNumber"]'
const phoneNumberCarrierInput = 'input[name="phone"]'
const vatIdInput = 'input[name="vatId"]'
const registerBtn = 'Create your Saloodo! account'
const agreements = '.filter-checkbox-container .filter-checkbox'
const passwordInput = 'input[name="password"]'
const shipperRegistrationMessage = '.col-sm-12 > h2'
const carrierDashboardMessage = '.sc-gFXMyG > .sc-bxivhb'

class RegistrationPage {

    signUpShipper(companyName, email, firstName, lastName, phone, vatid){
        cy.get(companyNameShipperInput).clear({force: true}).type(companyName)
        cy.get(emailInput).clear({force: true}).type(email) 
        cy.get(firstNameInput).clear({force: true}).type(firstName) 
        cy.get(lastNameInput).clear({force: true}).type(lastName)
        cy.get(phoneNumberShipperInput).clear({force: true}).type(phone)
        cy.get(vatIdInput).clear({force: true}).type(vatid)
        this.checkAgreements()
        this.submitForm()
        return this
    }

    signUpCarrier(companyName, firstName, lastName, email, phone, password){
        cy.get(companyNameCarrierInput).clear({force: true}).type(companyName) 
        cy.get(firstNameInput).clear({force: true}).type(firstName)
        cy.get(lastNameInput).clear({force: true}).type(lastName)
        cy.get(emailInput).clear().type(email)
        cy.get(phoneNumberCarrierInput).clear({force: true}).type(phone)
        cy.get(passwordInput).clear({force: true}).type(password)
        this.checkAgreements()
        this.submitForm()
        return this
    }

    checkAgreements(){
        cy.get(agreements).each((element)=>{element.click()})
    }

    submitForm(){
        cy.wait(2000)
        cy.contains(registerBtn).click({force: true}) 
    }

    getShipperRegistrationMessage(){
        return cy.get(shipperRegistrationMessage)
    }

    getCarrierPopupMessage(){
        return cy.get(carrierDashboardMessage)
    }
}
module.exports = new RegistrationPage()
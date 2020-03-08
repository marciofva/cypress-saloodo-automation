const register_menu = 'button[type="button"]'
const shipper_link_menu = 'Register Your Company'
const carrier_link_menu = 'Register as a Carrier'
const login_link_menu = 'Login'

class HomePage {

    visit(){
       cy.visit('/')
       return this
    }

    goToShipperRegistrationPage(){
        cy.get(register_menu).click()
        cy.contains(shipper_link_menu).click()
        return require('./registration.po')
    }

    goToCarrierRegistrationPage(){
        cy.get(register_menu).click()
        cy.contains(carrier_link_menu).click()
        return require('./registration.po')
    }

    goToLoginPage(){
        cy.contains(login_link_menu).click()
        return require('./login.po')
    }
}
module.exports = new HomePage()
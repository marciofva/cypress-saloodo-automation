const emailInput = 'input[name="_email"]'
const passwordInput = 'input[name="_password"]'
const loginBtn = 'button[type="submit"]'

class LoginPage {

    inputEmail(email){
        return cy.get(emailInput).type(email)
    }

    inputPassword(password){
        return cy.get(passwordInput).type(password)
    }

    clickOnLogin(){
        return cy.get(loginBtn).click({force: true})
    }

    submitLoginForm(email, password){
        this.inputEmail(email)
        this.inputPassword(password)
        this.clickOnLogin()
        return this
    }
}
module.exports = new LoginPage()
export class ElementPageTextBox {

    fullNameField = "#userName";
    emailField = "#userEmail";
    currentAddressField = "#currentAddress";
    parmanentAddressField = "#permanentAddress";
    submitButton = "#submit";


    gotoTextBoxPage(textBoxPageUrl) {
        cy.url().then(url => cy.visit(url + textBoxPageUrl))
    }

    fillUpTheForm(fullName, emailAddress, currentAddress, parmanentAddress) {
        cy.get(this.fullNameField).type(fullName)
        cy.get(this.emailField).type(emailAddress)
        cy.get(this.currentAddressField).type(currentAddress)
        cy.get(this.parmanentAddressField).type(parmanentAddress)
        cy.get(this.submitButton).click()
    }
    validateFormValue(fullName, emailAddress, currentAddress, parmanentAddress) {
        cy.get('#name').should('contain', "Name:" + fullName)
        cy.get('#email').should('contain', emailAddress)
        cy.get('.border > #currentAddress').should('contain', currentAddress)
        cy.get('.border > #permanentAddress').should('contain', parmanentAddress)
    }

}
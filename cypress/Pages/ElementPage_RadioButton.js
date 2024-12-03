export class ElementPageRadioButton {

    sectionHeaderSelector = '.text-center';
    radioButtonsHeader = '.mb-3'
    radioButtonTypeSelector = '[type="radio"]'
    selectedRadioButtonTextSelector = '.mt-3'

    // Below are the expected texts or string. 
    expecteHeader = 'Radio Button'
    expectedRadioButtonHeader = 'Do you like the site?'
    expectedTextAfterSelection = 'You have selected Yes'


    gotoRadioButtonPage(radioButtonPageUrl) {
        cy.url().then(url => cy.visit(url + radioButtonPageUrl))
    }

    radioButtonPageValidation() {
        cy.get(this.sectionHeaderSelector).should('contain.text', this.expecteHeader)
        cy.get(this.radioButtonsHeader).should('contain.text', this.expectedRadioButtonHeader)
    }

    checkRadioButton() {
        cy.get(this.radioButtonTypeSelector).first().check({ force: true })
    }

    validateRadioButtonSelection() {
        cy.get(this.selectedRadioButtonTextSelector).should('contain.text', this.expectedTextAfterSelection)
    }
}
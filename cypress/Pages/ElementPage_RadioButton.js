import { Utility } from "./Utility";

export class ElementPageRadioButton {

    sectionHeaderSelector = '.text-center';
    radioButtonsHeader = '.mb-3'
    radioButtonTypeSelector = '[type="radio"]'
    selectedRadioButtonTextSelector = '.mt-3'

    radioButtonPageValidation(expectedHeader, expectedRadioButtonHeader) {
        cy.get(this.sectionHeaderSelector).should('contain.text', expectedHeader)
        cy.get(this.radioButtonsHeader).should('contain.text', expectedRadioButtonHeader)
    }

    checkRadioButton() {
        cy.get(this.radioButtonTypeSelector).first().check({ force: true })
    }

    validateRadioButtonSelection(expectedTextAfterSelection) {
        cy.get(this.selectedRadioButtonTextSelector).should('contain.text', expectedTextAfterSelection)
    }
}
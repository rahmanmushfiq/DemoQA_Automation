export class ElementPageButtons {
    doubleClickButtonSelector = "#doubleClickBtn";
    rightClickButtonSelector = "#rightClickBtn";
    dynamicClickButtonSelector = "";

    sectionHeaderSelector = ".text-center";
    doubleClickButtonMessageSelector = "#doubleClickMessage";
    rightClickButtonMessageSelector = "#rightClickMessage";

    validatePage(expectedHeader) {
        cy.get(this.sectionHeaderSelector).should('contain.text', expectedHeader)
    }

    doubleClickButtonValidation(expectedDoubleClickMessage) {
        cy.get(this.doubleClickButtonSelector).dblclick();
        cy.get(this.doubleClickButtonMessageSelector).should('contain.text', expectedDoubleClickMessage);
    }

    rightClickButtonValidation(expectedRightClickMessage) {
        cy.get(this.rightClickButtonSelector).rightclick();
        cy.get(this.rightClickButtonMessageSelector).should('contain.text', expectedRightClickMessage)
    }

    /*dynamicButtonClickValidation() {
        //cy.get(this.dynamicClickButtonSelector).click();
        cy.contains('Click Me').click();
    }*/
}
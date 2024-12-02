export class ElementPageRadioButton {

    elementsMenuPath = ":nth-child(1) > .group-header > .header-wrapper";
    radioButtonMenuPath = ':nth-child(1) > .element-list > .menu-list > #item-2'

    gotoRadioButtonPage(radioButtonPageUrl) {
        cy.url().then(url => cy.visit(url + radioButtonPageUrl))
    }

    openRadioButtonMenu() {
        cy.get(this.elementsMenuPath).click()
        cy.get(this.radioButtonMenuPath).click()
    }
}
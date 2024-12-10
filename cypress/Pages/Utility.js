export class Utility {

    navigateTo(navigationUrl) {
        cy.url().then(url => cy.visit(url + navigationUrl));
    }

}
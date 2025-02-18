export class Utility {

    navigateTo(navigationUrl) {
        cy.url().then(url => cy.visit(url + navigationUrl));
    }

    uplodFile(locator, filePath) {
        cy.get(locator).selectFile(filePath, { force: true });
    }
}
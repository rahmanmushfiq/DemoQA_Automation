export class Utility {

    navigateTo(navigationUrl) {
        cy.url().then(url => cy.visit(navigationUrl));
    }

    uplodFile(locator, filePath) {
        cy.get(locator).selectFile(filePath, { force: true });
    }
}
import { ElementPageWebTables } from "../Pages/ElementPage_WebTables";
import { Utility } from "../Pages/Utility";
import 'cypress-map';

const elementPageWebTables = new ElementPageWebTables();
const utilities = new Utility();

let userData;
before(() => {
    cy.fixture('webTablesPageData.json').then((data) => {
        userData = data;
    })
})

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the web tables funtionality', function () {
        utilities.navigateTo(userData.webTablesPageUrl)
        elementPageWebTables.openRegistrationForm()
        elementPageWebTables.fillUpRegistrationForm(userData.firstName, userData.lastName, userData.emailAddress, userData.age, userData.salary, userData.department)
        elementPageWebTables.submitRegistrationForm()

    })
})
it("Verifies table data", function () {
    //utilities.navigateTo(userData.webTablesPageUrl)
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').contains(":nth-child(4) > .rt-tr > :nth-child(1)", userData.firstName);
    /*cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').contains(":nth-child(4) > .rt-tr > :nth-child(2)", userData.lastName);
    cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').contains(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max - width: 40px;', userData.age);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').contains(":nth-child(4) > .rt-tr > :nth-child(4)", userData.emailAddress);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').contains(":nth-child(4) > .rt-tr > :nth-child(5)", userData.salary);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').contains(":nth-child(4) > .rt-tr > :nth-child(6)", userData.department);*/
})

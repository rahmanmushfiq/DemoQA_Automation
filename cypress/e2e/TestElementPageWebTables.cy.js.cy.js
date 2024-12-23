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

describe.skip("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the web tables funtionality', function () {
        utilities.navigateTo(userData.webTablesPageUrl)
        elementPageWebTables.openRegistrationForm()
        elementPageWebTables.fillUpRegistrationForm(userData.firstName, userData.lastName, userData.emailAddress, userData.age, userData.salary, userData.department)
        elementPageWebTables.submitRegistrationForm()

    })
})
it("verifies table data", function () {
    utilities.navigateTo(userData.webTablesPageUrl)
    //cy.get('[role=grid]').map('innerText').then(cy.log)
    cy.get('table').table().should('deep.equal', [
        ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']
    ])
})
/// <reference types = "cypress"/>

import { ElementPageTextBox } from "../Pages/ElementPage_TextBox";

const elementPageTextBox = new ElementPageTextBox();

//Hook to load the user data from fixture and use it in the test cases
let userData;
before(() => {
    cy.fixture('textBoxPageData.json').then((data) => {
        userData = data;
    })
})

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the textbox funtionality', function () {
        elementPageTextBox.gotoTextBoxPage(userData.textBoxPageUrl)
        elementPageTextBox.fillUpTheForm(userData.fullName, userData.emailAddress, userData.currentAddress, userData.parmanentAddress)
        elementPageTextBox.validateFormValue(userData.fullName, userData.emailAddress, userData.currentAddress, userData.parmanentAddress)
    })
})




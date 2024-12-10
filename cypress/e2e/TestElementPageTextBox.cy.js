/// <reference types = "cypress"/>

import { ElementPageTextBox } from "../Pages/ElementPage_TextBox";
import { Utility } from "../Pages/Utility";

const elementPageTextBox = new ElementPageTextBox();
const utilities = new Utility();

//Hook to load the user data from fixture and use it in the test cases
let userData;
before(() => {
    cy.fixture('textBoxPageData.json').then((data) => {
        userData = data;
    })
})

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the textbox funtionality', function () {
        utilities.navigateTo(userData.textBoxPageUrl)
        elementPageTextBox.fillUpTheForm(userData.fullName, userData.emailAddress, userData.currentAddress, userData.parmanentAddress)
        elementPageTextBox.validateFormValue(userData.fullName, userData.emailAddress, userData.currentAddress, userData.parmanentAddress)
    })
})
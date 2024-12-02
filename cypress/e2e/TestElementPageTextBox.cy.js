/// <reference types = "cypress"/>

import { ElementPageTextBox } from "../Pages/ElementPage_TextBox";

const elementPageTextBox = new ElementPageTextBox();

var textBoxPageUrl = 'text-box';

var fullName = "Mushfiqur Rahman";
var emailAddress = "mushfiqur.rahman@test.com";
var currentAddress = "505, Senpara Parbota, Mirpur, Dhaka - 1216";
var parmanentAddress = "505, Senpara Parbota, Mirpur, Dhaka - 1216";

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the textbox funtionality', function () {
        elementPageTextBox.gotoTextBoxPage(textBoxPageUrl)
        elementPageTextBox.fillUpTheForm(fullName, emailAddress, currentAddress, parmanentAddress)
        elementPageTextBox.validateFormValue(fullName, emailAddress, currentAddress, parmanentAddress)
    })
})




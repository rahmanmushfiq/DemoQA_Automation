/// <reference types = "cypress"/>

import { ElementPage } from "../Pages/ElementPage";

const elementPage = new ElementPage()

var elementPageUrl = 'https://demoqa.com/elements';

var fullName = "Mushfiqur Rahman";
var emailAddress = "mushfiqur.rahman@test.com";
var currentAddress = "505, Senpara Parbota, Mirpur, Dhaka - 1216";
var parmanentAddress = "505, Senpara Parbota, Mirpur, Dhaka - 1216";

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the textbox funtionality', function () {
        elementPage.gotoElementsPage(elementPageUrl)
        elementPage.openTextboxMenu()
        elementPage.fillUpTheForm(fullName, emailAddress, currentAddress, parmanentAddress)
        elementPage.validateFormValue(fullName, emailAddress, currentAddress, parmanentAddress)
    })
})




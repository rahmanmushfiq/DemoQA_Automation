import { ElementPageRadioButton } from "../Pages/ElementPage_RadioButton";

const elementPageRadioButton = new ElementPageRadioButton();

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the radio button funtionality', function () {

        cy.fixture('radioButtonPageData.json').then((data) => {
            elementPageRadioButton.gotoRadioButtonPage(data.radioButtonPageUrl)
            elementPageRadioButton.radioButtonPageValidation(data.expectedHeader, data.expectedRadioButtonHeader)
            elementPageRadioButton.checkRadioButton()
            elementPageRadioButton.validateRadioButtonSelection(data.expectedTextAfterSelection)
        })
    })
})

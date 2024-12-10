import { ElementPageRadioButton } from "../Pages/ElementPage_RadioButton";
import { Utility } from "../Pages/Utility";

const elementPageRadioButton = new ElementPageRadioButton();
const utilities = new Utility();

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the radio button funtionality', function () {

        cy.fixture('radioButtonPageData.json').then((data) => {
            utilities.navigateTo(data.radioButtonPageUrl)
            elementPageRadioButton.radioButtonPageValidation(data.expectedHeader, data.expectedRadioButtonHeader)
            elementPageRadioButton.checkRadioButton()
            elementPageRadioButton.validateRadioButtonSelection(data.expectedTextAfterSelection)
        })
    })
})

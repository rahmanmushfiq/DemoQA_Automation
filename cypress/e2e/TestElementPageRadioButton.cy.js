import { ElementPageRadioButton } from "../Pages/ElementPage_RadioButton";

const elementPageRadioButton = new ElementPageRadioButton();

var radioButtonPageUrl = 'radio-button';

describe("It checks the element page functionality", function () {
    it('Go to DemoQA Element URL and Validates the radio button funtionality', function () {
        elementPageRadioButton.gotoRadioButtonPage(radioButtonPageUrl)
        elementPageRadioButton.radioButtonPageValidation()
        elementPageRadioButton.checkRadioButton()
        elementPageRadioButton.validateRadioButtonSelection()
    })
})

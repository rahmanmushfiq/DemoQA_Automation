import { ElementPageButtons } from "../Pages/ElementPage_Buttons";
import { Utility } from "../Pages/Utility";

const elementPageButtons = new ElementPageButtons();
const utilities = new Utility();

describe("It checks the element page functionality", function () {
    it("Go to DemoQA Element URL and Validates the buttons funtionality ", function () {
        cy.fixture('buttonsPageData.json').then((data) => {
            utilities.navigateTo(data.buttonPageUrl)
            elementPageButtons.validatePage(data.expectedHeader);
            elementPageButtons.doubleClickButtonValidation(data.expectedDoubleClickMessage)
            elementPageButtons.rightClickButtonValidation(data.expectedRightClickMessage)
            //elementPageButtons.dynamicButtonClickValidation()
        })
    })
})
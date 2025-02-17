import { FormsPagePracticeForm } from "../Pages/FormsPage_PracticeForm";
import { Utility } from "../Pages/Utility";

const formsPagePracticeForm = new FormsPagePracticeForm();
const utilities = new Utility();

describe("It checks the forms page functionality", function () {
    it("Go to DemoQA Practice Form URL and Validates the form's funtionality", function () {
        cy.fixture('PracticeFormPageData.json').then((data) => {
            utilities.navigateTo(data.praciceFormURL);
            formsPagePracticeForm.validateFormPage(data.expectedHeader, data.expectedFormHeader);
            formsPagePracticeForm.fillUpForm(data.firstName, data.lastName, data.email, data.mobile, data.subject, data.currentAddress);
            formsPagePracticeForm.validateFormData(data.firstName, data.lastName, data.email, data.gender, data.mobile, data.currentAddress);
        })
    })
})
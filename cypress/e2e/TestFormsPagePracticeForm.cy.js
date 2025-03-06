import { FormsPagePracticeForm } from "../Pages/FormsPage_PracticeForm";
import { Utility } from "../Pages/Utility";

const formsPagePracticeForm = new FormsPagePracticeForm();
const utilities = new Utility();

let userData;
before(() => {
    cy.fixture('PracticeFormPageData.json').then((data) => {
        userData = data;
    });
})

describe("It checks the forms page functionality", function () {

    it("Go to DemoQA Practice Form URL and Fillup the form", function () {
        utilities.navigateTo(userData.practiceFormURL);

        formsPagePracticeForm.validateFormPage(userData.expectedHeader, userData.expectedFormHeader);

        formsPagePracticeForm.fillUpForm(userData.firstName, userData.lastName, userData.email, userData.mobile, userData.englishSubject, userData.chemistrySubject, userData.dateOfBirth, userData.currentAddress, userData.state, userData.city);
    });

    it("Validate the form data", function () {

        formsPagePracticeForm.validateFormData(userData.formSubmissionMessage, userData.firstName, userData.lastName, userData.email, userData.gender, userData.mobile, userData.englishSubject, userData.chemistrySubject, userData.hobbies, userData.dateOfBirth, userData.currentAddress, userData.state, userData.city, userData.filePathAndName);
    });
});


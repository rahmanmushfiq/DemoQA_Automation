import { FormsPagePracticeForm } from "../Pages/FormsPage_PracticeForm";
import { Utility } from "../Pages/Utility";

const formsPagePracticeForm = new FormsPagePracticeForm();
const utilities = new Utility();

let userData;
before(() => {
    cy.fixture('PracticeFormPageData.json').then((data) => {
        userData = data;
    })
})

describe("It checks the forms page functionality", function () {

    it("Go to DemoQA Practice Form URL and Fillup the form and validates it", function () {
        utilities.navigateTo(userData.practiceFormURL);

        formsPagePracticeForm.validateFormPage(userData.expectedHeader, userData.expectedFormHeader);

        formsPagePracticeForm.fillUpForm(userData.firstName, userData.lastName, userData.email, userData.mobile, userData.EnglishSubject, userData.ChemistrySubject, userData.dateOfBirth, userData.currentAddress, userData.state, userData.city);

        formsPagePracticeForm.validateFormData(userData.formSubmissionMessage, userData.firstName, userData.lastName, userData.email, userData.gender, userData.mobile, userData.EnglishSubject, userData.ChemistrySubject, userData.hobbies, userData.dateOfBirth, userData.currentAddress, userData.state, userData.city, userData.filePathAndName);
    });
})
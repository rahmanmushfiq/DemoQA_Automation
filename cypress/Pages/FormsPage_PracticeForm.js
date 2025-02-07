export class FormsPagePracticeForm {

    //selectors
    sectionHeaderSelector = ".text-center";
    formHeaderSection = "h5";

    firstNameSelector = "#firstName";
    lastNameSelector = "#lastName";
    emailSelector = "#userEmail";
    genderSelector = '[type = "radio"]';
    mobileSelector = "#userNumber";
    dobSelector = "#dateOfBirthInput";
    subjectSelector = "#subjectsContainer";
    hobbiesSelector = /*'[type = "checkbox"]';*/ ":checkbox"; //for all hobbies
    fileSelector = "#uploadPicture";
    currentAddressSelector = "#currentAddress";
    stateSelector = "#state";
    citySelector = "#city";
    submitButtonSelector = "#submit";

    validateFormPage(expectedHeader, expectedFormHeader) {
        cy.get(this.sectionHeaderSelector).should('contain.text', expectedHeader);
        cy.get(this.formHeaderSection).should('contain.text', expectedFormHeader).should('have.css', 'font-weight', '500');
    }

    fillUpForm(firstName, lastName, email, mobile, subject, currentAddress) {
        cy.get(this.firstNameSelector).type(firstName);
        cy.get(this.lastNameSelector).type(lastName);
        cy.get(this.emailSelector).type(email);
        cy.get(this.genderSelector).first().check({ force: true });
        cy.get(this.mobileSelector).type(mobile)
        cy.get(this.dobSelector).type("{selectAll}").type("29 May 1995{enter}");
        cy.get(this.subjectSelector).type("English{enter}").type("Chemistry{enter}");
        //cy.get(this.hobbiesSelector).first().check({ force: true }) //Check the first checkbox
        cy.get(this.hobbiesSelector).check({ force: true }); //Check all the checkboxes
        cy.get(this.currentAddressSelector).type(currentAddress)
        cy.get(this.stateSelector).click().type("NCR{enter}");
        cy.get(this.citySelector).click().type("Delhi{enter}");
        cy.get(this.submitButtonSelector).click();

        //File upload
        //cy.get(this.fileSelector).attachFile("C:\Users\mushfiqur.rahman\Documents\DemoQA_Automation\cypress\downloads\CypressLogo.png", { subjectType: 'input' })
    }
} 
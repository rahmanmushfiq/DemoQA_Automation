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
    filePath = "cypress\\fixtures\\Asset\\TestImage.jpg";
    formSubmissionMessageLocator = "#example-modal-sizes-title-lg";

    validateFormPage(expectedHeader, expectedFormHeader) {
        cy.get(this.sectionHeaderSelector).should('contain.text', expectedHeader);
        //cy.get(this.formHeaderSection).should('contain.text', expectedFormHeader).should('have.css', 'font-weight', '500');

        // Below validation is written to validate the font weight between 500 or 700. The callback function checks if the retrieved value is either 500 or 700 using .include().  
        cy.get(this.formHeaderSection).should('contain.text', expectedFormHeader).should(($el) => {
            const fontWeight = $el.css('font-weight');
            expect(['500', '700']).to.include(fontWeight);
        });
    }

    fillUpForm(firstName, lastName, email, mobile, EnglishSubject, ChemistrySubject, dateOfBirth, currentAddress, state, city) {
        cy.get(this.firstNameSelector).type(firstName);
        cy.get(this.lastNameSelector).type(lastName);
        cy.get(this.emailSelector).type(email);
        cy.get(this.genderSelector).first().check({ force: true });
        cy.get(this.mobileSelector).type(mobile)
        cy.get(this.dobSelector).type("{selectAll}").type(dateOfBirth + "{enter}");
        cy.get(this.subjectSelector).type(EnglishSubject + "{enter}").type(ChemistrySubject + "{enter}");
        //cy.get(this.hobbiesSelector).first().check({ force: true }) //Check the first checkbox
        cy.get(this.hobbiesSelector).check({ force: true }); //Check all the checkboxes

        //File upload
        cy.get(this.fileSelector).selectFile(this.filePath, { force: true });

        cy.get(this.currentAddressSelector).type(currentAddress)
        cy.get(this.stateSelector).click().type(state + "{enter}");
        cy.get(this.citySelector).click().type(city + "{enter}");
        cy.get(this.submitButtonSelector).click();
    }

    validateFormData(formSubmissionMessage, firstName, lastName, email, gender, mobile, EnglishSubject, ChemistrySubject, hobbies, dateOfBirth, currentAddress, state, city, filePathAndName) {

        cy.get(this.formSubmissionMessageLocator).should('have.text', formSubmissionMessage);

        let name = firstName + " " + lastName;

        // This below validation is done using for loop
        const validationData = [
            "Student Name",
            name,
            "Student Email",
            email,
            "Gender",
            gender,
            "Mobile",
            mobile,
            "Date of Birth",
            dateOfBirth,
            "Subjects",
            EnglishSubject + ", " + ChemistrySubject,
            "Hobbies",
            hobbies,
            "Picture",
            filePathAndName,
            "Address",
            currentAddress,
            "State and City",
            state + " " + city
        ];

        for (let i = 0; i < validationData.length; i += 2) {
            cy.contains('tbody tr', validationData[i]).within(() => {
                cy.get('td').eq(1).should('have.text', validationData[i + 1]);
            });
        };

        // This below validation is done without using for loop
        /*cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', 'Student Name');
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', name);

        cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', 'Student Email');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', email);

        cy.get('tbody > :nth-child(3) > :nth-child(1)').should('have.text', 'Gender');
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', gender);

        cy.get('tbody > :nth-child(4) > :nth-child(1)').should('have.text', 'Mobile');
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', mobile);

        cy.get('tbody > :nth-child(5) > :nth-child(1)').should('have.text', 'Date of Birth');
        cy.get('tbody > :nth-child(5) > :nth-child(2)').should('have.text', dateOfBirth);

        cy.get('tbody > :nth-child(6) > :nth-child(1)').should('have.text', 'Subjects');
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('have.text', `${EnglishSubject}, ${ChemistrySubject}`);

        cy.get('tbody > :nth-child(7) > :nth-child(1)').should('have.text', 'Hobbies');
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('have.text', hobbies);

        cy.get('tbody > :nth-child(8) > :nth-child(1)').should('have.text', 'Picture');
        cy.get('tbody > :nth-child(8) > :nth-child(2)').should('have.text', filePathAndName);

        cy.get('tbody > :nth-child(9) > :nth-child(1)').should('have.text', 'Address');
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text', currentAddress);

        cy.get('tbody > :nth-child(10) > :nth-child(1)').should('have.text', 'State and City');
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text', state + " " + city);*/
    }
} 
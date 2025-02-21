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

    validateFormPage(expectedHeader, expectedFormHeader) {
        cy.get(this.sectionHeaderSelector).should('contain.text', expectedHeader);
        cy.get(this.formHeaderSection).should('contain.text', expectedFormHeader).should('have.css', 'font-weight', '700');
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
        cy.get(this.currentAddressSelector).type(currentAddress)
        cy.get(this.stateSelector).click().type(state + "{enter}");
        cy.get(this.citySelector).click().type(city + "{enter}");
        cy.get(this.submitButtonSelector).click();

        //File upload
        cy.get(this.fileSelector).selectFile(this.filePath, { force: true });
    }

    validateFormData(firstName, lastName, email, gender, mobile, EnglishSubject, ChemistrySubject, dateOfBirth, currentAddress, state, city, fileName) {

        let name = firstName + " " + lastName;
        cy.get('table').find('tr td').eq(0).should('contain.text', 'Student Name');
        cy.get('table').find('tr td').eq(1).should('contain.text', name);

        cy.get('table').find('tr td').eq(2).should('contain.text', 'Student Email');
        cy.get('table').find('tr td').eq(3).should('contain.text', email);

        cy.get('table').find('tr td').eq(4).should('contain.text', 'Gender');
        cy.get('table').find('tr td').eq(5).should('contain.text', gender);

        cy.get('table').find('tr td').eq(6).should('contain.text', 'Mobile');
        cy.get('table').find('tr td').eq(7).should('contain.text', mobile);

        cy.get('table').find('tr td').eq(8).should('contain.text', 'Date of Birth');
        cy.get('table').find('tr td').eq(9).should('contain.text', dateOfBirth);

        cy.get('table').find('tr td').eq(10).should('contain.text', 'Subjects');
        cy.get('table').find('tr td').eq(11).should('contain.text', EnglishSubject + ", " + ChemistrySubject);

        cy.get('table').find('tr td').eq(12).should('contain.text', 'Hobbies');
        cy.get('table').find('tr td').eq(13).should('contain.text', 'Sports, Reading, Music');

        cy.get('table').find('tr td').eq(14).should('contain.text', 'Picture');
        cy.get('table').find('tr td').eq(15).should('contain.text', fileName);

        cy.get('table').find('tr td').eq(16).should('contain.text', 'Address');
        cy.get('table').find('tr td').eq(17).should('contain.text', currentAddress);

        cy.get('table').find('tr td').eq(18).should('contain.text', 'State and City');
        cy.get('table').find('tr td').eq(19).should('contain.text', state + " " + city);


        // This below validation is done using for loop but commented out due to memory consumption and browser crashing
        /*const validationData = [
            "Student Name",
            name,
            "Student Email",
            email,
            "Gender",
            gender,
            "Mobile",
            mobile,
            "Date of Birth",
            "29 May,1995",
            "Subjects",
            "English, Chemistry",
            "Hobbies",
            "Sports, Reading, Music",
            "Picture",
            "",
            "Address",
            currentAddress,
            "State and City",
            "NCR Delhi"
        ];

        for (let i = 0; i = validationData.length; i++) {
            cy.get('table').find('tr td').eq(i).should('contain.text', validationData[i]);
            i++;
        }*/
    }
} 
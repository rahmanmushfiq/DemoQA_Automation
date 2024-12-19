export class ElementPageWebTables {
    addButton = "#addNewRecordButton";
    firstNameField = "#firstName";
    lastNameField = "#lastName";
    emailField = "#userEmail";
    ageField = "#age";
    salaryField = "#salary";
    departmentField = "#department";
    submitButton = "#submit";

    openRegistrationForm() {
        cy.get(this.addButton).click();
    }

    fillUpRegistrationForm(firstName, lastName, emailAddress, age, salary, department) {
        cy.get(this.firstNameField).type(firstName);
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.emailField).type(emailAddress);
        cy.get(this.ageField).type(age);
        cy.get(this.salaryField).type(salary);
        cy.get(this.departmentField).type(department);
    }

    submitRegistrationForm() {
        cy.get(this.submitButton).click();
    }

    verifyTableData() {

    }
}
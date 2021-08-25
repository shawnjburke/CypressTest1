/// <reference types="cypress" />

describe('loan application user acceptance test', () => {
    before(() => {
        cy.visit('https://forms.monday.com/forms/2a240f5d64eaafb27c6f76a1d725cd97?r=use1');
    })
    
    it('accepts a name for the application', () => {
        cy.get('#surveyModeScrollElement > div:nth-child(1) > div.form-question-answer > div.form-input-component > input').click();
        cy.get('#surveyModeScrollElement > div:nth-child(1) > div.form-question-answer > div.form-input-component > input').type('Tyron Smith');
    })

    it('accepts an Address for the application', () => {
        cy.get('#surveyModeScrollElement > div:nth-child(2) > div.form-question-answer > div.form-input-component > input').click();
        cy.get('#surveyModeScrollElement > div:nth-child(2) > div.form-question-answer > div.form-input-component > input').type('5831 Huntley Ave Garden Grove, Ca 92845');
    })

    
    it('accepts an Email for the application', () => {
        cy.get('#surveyModeScrollElement > div:nth-child(3) > div.form-question-answer > div > input').click();
        cy.get('#surveyModeScrollElement > div:nth-child(3) > div.form-question-answer > div > input').type('tyron-smith@example.com');
    })

    it('accepts a Phone Number for the application', () => {
        cy.get('.countries-dropdown .Select-arrow').type('+1{enter}');
        cy.get('#surveyModeScrollElement > div:nth-child(4) > div.form-question-answer > div > div > input').type('7143933122{enter}');
        //cy.get('').type();
    })

    it('accepts a Permission to Text for the application', () => {
        cy.get('#surveyModeScrollElement > div:nth-child(5) > div.form-question-answer > span > div > label > div').click();
    })

    it('accepts a Date for the application', () => {
        cy.get('#react-select-3--value-item').click();
        cy.get('#react-select-3--value-item').type('3{enter}');
        cy.get('#react-select-4--value-item').click();
        cy.get('#react-select-4--value-item').type('28{enter}');
        cy.get('#react-select-5--value-item').click();
        cy.get('#react-select-5--value-item').type('1988{enter}');
    })

    it('accepts a Loan Purpose for the application', () => {
        cy.get('#react-select-6--value > div.Select-placeholder').click();
        cy.get('#react-select-6--value > div.Select-placeholder').type('Refinance{enter}');
    })

    it('accepts a Loan Amount for the application', () => {
        cy.get('#surveyModeScrollElement > div:nth-child(8) > div.form-question-answer > div.form-input-component > input').click();
        cy.get('#surveyModeScrollElement > div:nth-child(8) > div.form-question-answer > div.form-input-component > input').type('500,000.00{enter}');
    })

    it('Submits the application', () => {
        cy.get('#surveyModeScrollElement > div.form-submit-wrapper > button').click();
    })

    it('Waits for the form to submit', () => {
        cy.get('#forms-component > div > div.form-content-component > div > img').should('be.visible');
    })
    
    it('Validates the form submission was successful', () => {
        cy.contains('Your answers were submitted successfully');
    })
})
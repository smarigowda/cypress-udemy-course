describe('Checkbox example', () => {
    it('Checkbox should be checked', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        cy.get('#checkbox-example').get('input[type="checkbox"]').check(['option1', 'option2', 'option3']);

    })
})
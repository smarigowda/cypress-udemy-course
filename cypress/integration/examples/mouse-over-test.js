/// <reference types="Cypress" />
describe("Mouse over example", () => {
  it("Mouse over should show the popup", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('.mouse-hover-content').should('not.be.visible');
    cy.get('.mouse-hover-content').invoke('show');
    cy.get('.mouse-hover-content').should('be.visible');

    cy.get('.mouse-hover-content').get('a').contains('Top').click();
    cy.url().should('contain', 'top');

  });
});

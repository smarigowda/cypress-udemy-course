/// <reference types="Cypress" />
describe("Checkbox example", () => {
  it("Checkbox should be checked", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('[value="radio1"]').check();
    cy.get('[value="radio1"]').should('be.checked');
    
    cy.get('[value="radio3"]').check().should('be.checked');
  });
});

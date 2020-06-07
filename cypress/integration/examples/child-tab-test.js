/// <reference types="Cypress" />
describe("Child Tab Example", () => {
  it.skip("Child Tab Test - Check Attribute Value and Remove Attribure if Exists", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab")
      .invoke("attr", "target")
      .then((value) => {
        cy.log(value);
        if (value === "_blank") {
          Cypress.$("#opentab").removeAttr("target");
        }
      });
    cy.get("#opentab").click();
    cy.get("a").contains("About").click();
    cy.get("h1").contains("About Us").should("exist");
  });

  it("Child Tab Test - Just remove the attribute", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should('eq', 'https://www.rahulshettyacademy.com/#/index');
    cy.get("a").contains("About").click();
    cy.get("h1").contains("About Us").should("exist");
    cy.go('back').get('.counter-section').should('exist');
    cy.go('back').wrap('#radio-btn-example').should('exist');
    cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/').and('include', 'AutomationPractice');
  });
});

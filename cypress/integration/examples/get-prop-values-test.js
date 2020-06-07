/// <reference types="Cypress" />
describe("Getting element's property value", () => {
  it("Element property value", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').then(element => {
      let hrefValue = element.prop('href');
      cy.log(hrefValue);
      cy.visit(hrefValue);
    })
  });
});

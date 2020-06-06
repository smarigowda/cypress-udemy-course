/// <reference types="Cypress" />
describe("Checkbox example", () => {
  it("Checkbox should be checked", () => {
    cy.on("window:alert", (text) => {
      expect(text).to.contain(
        "share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (text) => {
      expect(text).to.contain(
        "Are you sure you want to confirm"
      );
    });
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();
  });
});

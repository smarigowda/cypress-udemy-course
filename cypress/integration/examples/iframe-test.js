import "cypress-iframe";
// import cypressIframe from "cypress-iframe";

describe("Iframe Example", () => {
  it("Test Case 1", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a").contains("Mentorship").click();
    cy.iframe().find("h1.pricing-title").should('have.length', 2);
  });
});

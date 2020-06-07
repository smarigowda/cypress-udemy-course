/// <reference types="Cypress" />
describe("Web Table Example", () => {
  it("Select specific row and get the price", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("table#product")
      .get("tr+tr") // get all the rows except the first row, OWL selector
      .each((row) => {
        cy.get(row)
          .find("td:nth-child(2)")
          .invoke("text")
          .then((text) => {
            if (text.includes("REST API Testing with SoapUI")) {
              cy.get(row)
                .find("td:nth-child(3)")
                .invoke("text")
                .then((price) => {
                  cy.log(`Price of the Course is: ${price}`);
                });
            }
          });
      });
  });
});

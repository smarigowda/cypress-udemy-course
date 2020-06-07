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
                  expect(price).to.equal('35');
                });
            }
          });
      });
  });
  it("Select specific row and get the price", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("table#product")
      .find("tr td:nth-child(2)")
      .each((element, index) => {
        let text = element.text();
        cy.log(text);
        if (text.includes("Python")) {
          // Solution 1
          cy.get(element)
            .next("td")
            .invoke("text")
            .then((price) => {
              cy.log(`Price is: ${price}`);
              expect(price).to.equal('25');
            });
          // Solution 2
          cy.get("tr td:nth-child(2)")
            .eq(index)
            .next()
            .invoke("text")
            .then((price) => {
              cy.log(`Price is.... ${price}`);
              expect(price).to.equal('25');
            });
            // Solution 3
            cy.get("tr td:nth-child(2)")
            .eq(index)
            .next()
            .then((element) => {
              let price = element.text();
              cy.log(`Price is -----> ${price}`);
              expect(price).to.equal('25');
            });
        }
      });
  });
});

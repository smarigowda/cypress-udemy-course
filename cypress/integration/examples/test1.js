/// <reference types="Cypress" />

describe("my first cypress test", function () {
  it("step 1", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get(".products .product").should("have.length", 4);
    cy.get(".product:visible").should("have.length", 4);

  });
});

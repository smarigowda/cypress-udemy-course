/// <reference types="Cypress" />

describe("my first cypress test", function () {
  it("step 1", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
  });
});

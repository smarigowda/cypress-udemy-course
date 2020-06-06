/// <reference types="Cypress" />

describe("my first cypress test", function () {
  it("step 1", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products .product").as("products");
    cy.get("@products").should("have.length", 4);
    cy.get(".product:visible").should("have.length", 4);
    cy.get("@products").should("have.length", 4);

    // cy.get('.products').find('.product').eq(1).find('.product-action button').click();
    // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

    // Add product by name to the Cart
    cy.get("@products").each((element) => {
      cy.wrap(element)
        .find(".product-name")
        .invoke("text")
        .then((text) => {
          cy.log(text);
          if (text.toLowerCase().includes("cashew")) {
            cy.wrap(element).contains("ADD TO CART").click();
          }
        });
    });
  });
});

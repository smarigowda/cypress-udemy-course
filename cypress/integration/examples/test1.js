/// <reference types="Cypress" />

describe("my first cypress test", function () {
  it("step 1", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products .product").should("have.length", 4);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);

    // cy.get('.products').find('.product').eq(1).find('.product-action button').click();
    // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

    // Add Carrot to the Cart
    cy.get(".products")
      .find(".product")
      .each((element) => {
        cy.get(element)
          .find(".product-name")
          .invoke("text")
          .then((text) => {
            if (text.toLowerCase().indexOf("carrot") >= 0) {
              cy.get(element).contains("ADD TO CART").click();
            }
          });
      });
  });
});

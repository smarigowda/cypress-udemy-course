/// <reference types="Cypress" />
///<reference types="cypress-iframe" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Add a product to Cart by product name
     * @example
     * cy.selectProduct('product name')
     */
    selectProduct(productName: string): Chainable<any>;
  }
}

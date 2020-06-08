export default class ProductsPage {
  totalSelector = "tr td:nth-child(4) strong";
  grandTotalSelector = "h3 strong";
  checkoutSelector = ".btn.btn-success";
  sum = 0;
  open() {
    cy.get("a").contains("Shop").click();
    return this;
  }
  addProductsToCart(products) {
    products.forEach((name) => {
      cy.selectProduct(name);
    });
    return this;
  }
  checkout() {
    cy.get("a").contains("Checkout").click();
    return this;
  }
  verifyTotal() {
    // get individual total and sum it up
    cy.get(this.totalSelector)
      .each((element) => {
        const textTotal = element.text();
        const total = Number(textTotal.split(" ")[1]);
        cy.log(total);
        this.sum = this.sum + total;
      })
      .then(() => {
        cy.get(this.grandTotalSelector).then((element) => {
          const grandTotalText = element.text();
          cy.log(grandTotalText);
          const grandTotal = Number(grandTotalText.split(" ")[1]);
          cy.log(grandTotal);
          expect(this.sum).to.equal(grandTotal);
        });
      });
    return this;
  }
  checkoutToDelivery() {
    cy.get(this.checkoutSelector).click();
    return this;
  }
}

export default class ProductsPage {
  open() {
    cy.get("a").contains("Shop").click();
    return this;
  }
  addProductsToCart(products) {
    products.forEach((name) => {
      cy.selectProduct(name);
    });
  }
}

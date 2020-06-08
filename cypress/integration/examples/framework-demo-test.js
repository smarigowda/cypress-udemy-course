import HomePage from "../../page-objects/HomePage";
import ProductsPage from "../../page-objects/ProductsPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();

describe("Hooks Demo", function () {
  before("before block", function () {
    cy.log("before block");
    cy.fixture("example").then(function (data) {
      this.data = data; // do not use arrow function
    });
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
  });
  after("after block", function () {
    cy.log("after  block");
  });
  it("Step 1", function () {
    const { name, gender, productNames } = this.data;
    homePage
      .setFirstName(name)
      .setGender(gender)
      .verifyDataBoundInput()
      .verifyFirstNameMinLength(2)
      .verifyEnterprenuerRadioInputIsDisabled();

    // cy.pause();
    productsPage
      .open()
      .addProductsToCart(productNames)
      .checkout()
      .verifyTotal();
  });
});

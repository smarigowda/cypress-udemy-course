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
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);

    //* Another Approach
    // cy.get('input[name="name"]:nth-child(1)').then(element => {
    //   expect(element.val()).to.equal(this.data.name);
    // });
    cy.get('input[name="name"]:nth-child(1)').should(
      "have.value",
      this.data.name
    );
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      2
    );
    cy.get("#inlineRadio3").should("be.disabled");
    cy.get("a").contains("Shop").click();
    this.data.productNames.forEach((name) => {
      cy.selectProduct(name);
    });
  });
});

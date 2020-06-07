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
  it("test step 1", function () {
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);
  });
});

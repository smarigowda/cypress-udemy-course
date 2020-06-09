describe("Mocking Demo", function () {
  it("mock test", function () {
    cy.log("test case 1");
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.server(); // start listening to network requests
    cy.route({
      method: "PUT",
      url: "comments/*",
    }).as("putComment");
    cy.get(".network-put").click();
    cy.wait("@putComment");
    cy.get("@putComment").should((xhr) => {
      cy.log(xhr);
      console.log(xhr.responseBody);
      expect(xhr.responseBody.email).to.equal("hello@cypress.io");
    });
  });
});

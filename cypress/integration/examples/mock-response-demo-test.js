describe("Mocking Demo", function () {
  it("mock test", function () {
    const errorMessage =
      "Sorry the server is not responding at the moment. Please try again";
    cy.log("test case 1");
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.server(); // start listening to network requests
    cy.route({
      method: "PUT",
      url: "comments/*",
      status: 404,
      response: {
        error: errorMessage,
      },
    }).as("putComment");
    cy.get(".network-put").click();
    cy.wait("@putComment");
    cy.get("@putComment").should((xhr) => {
      cy.log(xhr);
      console.log(xhr);
      expect(xhr.responseBody.error).to.include(
        "Sorry the server is not responding"
      );
      expect(xhr.status).to.equal(404);
    });
  });
});

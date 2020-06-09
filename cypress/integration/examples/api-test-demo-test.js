describe("API Testing", function () {
  it("test case", function () {
    cy.request({
      url: "http://216.10.245.166/Library/Addbook.php",
      method: "POST",
      body: {
        name: "A Sample Book",
        isbn: "ajfa-87277",
        aisle: "227",
        author: "John Foe",
      },
    }).then((response) => {
      console.log(response);
      expect(response.status).to.equal(200);
    });
  });
});

describe("Hooks Demo", () => {
  before('before block', () => {
    cy.log('before block')
  });
  after('after block', () => {
    cy.log('after  block');
  });
  it("Test Step 1", () => {
    cy.log('test step 1');
  });
  it("Test Step 2", () => {
    cy.log('test step 1');
  });
  it("Test Step 3", () => {
    cy.log('test step 1');
  });
});

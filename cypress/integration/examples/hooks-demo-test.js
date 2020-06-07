describe("Hooks Demo", () => {
  before('before block', () => {
    cy.log('before block')
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
  });
  after('after block', () => {
    cy.log('after  block');
    cy.get('input[name="name"]:nth-child(2)').type('Santosh');
    cy.get('#exampleFormControlSelect1').select('Female');
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

describe("Dropdown Test Suite", () => {
  it("Static Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("select").select("option2").should("have.value", "option2");
  });
});

describe("Dropdown Test Suite", () => {
  it("Static Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("select").select("option2").should("have.value", "option2");

    cy.get("#autocomplete").type("United Kingdom");
    cy.get(".ui-autocomplete")
      .get(".ui-menu-item-wrapper")
      .each((element) => {
        cy.log(element);
        cy.wrap(element)
          .invoke("text")
          .then((text) => {
            cy.log(text);
            if (text === "United Kingdom (UK)") {
              cy.get(element).click();
            }
          });
      });
    cy.get("#autocomplete").should("have.value", "United Kingdom (UK)");
  });
});

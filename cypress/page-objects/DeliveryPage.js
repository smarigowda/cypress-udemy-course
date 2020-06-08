export default class DeliveryPage {
  countrySelector = "#country";
  firstSuggestionSelector = ".suggestions > ul > li > a";
  termsAndConditionsCheckboxSelector = "#checkbox2";
  alertSelector = ".alert";

  selectDeliveryLocation(country) {
    cy.get(this.countrySelector).type(country);
    cy.get(this.firstSuggestionSelector).click();
    return this;
  }
  agreeTermsAndConditions() {
    cy.get(this.termsAndConditionsCheckboxSelector).click({ force: true });
    return this;
  }
  purchase() {
    cy.get("input").contains("Purchase").click();
    return this;
  }
  verifySuccess() {
    cy.get(this.alertSelector).then((element) => {
      const text = element.text();
      expect(text).to.include("Success");
    });
    return this;
  }
}

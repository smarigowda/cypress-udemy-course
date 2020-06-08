export default class HomePage {
  firstNameSelector = 'input[name="name"]:nth-child(2)';
  genderSelector = "#exampleFormControlSelect1";
  dataBoundSelector = 'input[name="name"]:nth-child(1)';
  enterprenuerRadioInputSelector = "#inlineRadio3";
  firstName;

  setFirstName(name) {
    cy.get(this.firstNameSelector).type(name);
    this.firstName = name;
    return this;
  }
  setGender(gender) {
    cy.get(this.genderSelector).select(gender);
    return this;
  }
  verifyDataBoundInput() {
    cy.get(this.dataBoundSelector).should("have.value", this.firstName);
    //* Another Approach
    // cy.get('input[name="name"]:nth-child(1)').then(element => {
    //   expect(element.val()).to.equal(this.data.name);
    // });
    return this;
  }
  verifyFirstNameMinLength(minLength) {
    cy.get(this.firstNameSelector).should("have.attr", "minlength", minLength);
    return this;
  }
  verifyEnterprenuerRadioInputIsDisabled() {
    cy.get(this.enterprenuerRadioInputSelector).should("be.disabled");
    return this;
  }
}

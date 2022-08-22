const { I } = inject();

module.exports = {
  emailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },

  fillEmail(email) {
    I.waitForVisible(this.emailInput);
    I.fillField(this.emailInput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  }
  // insert your locators and methods here
}

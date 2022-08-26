const { I } = inject();

module.exports = {
  registerEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  emailImput: { css: '#email' },
  passwordInput: { css: '#passwd' },
  signInButton: { css: '#SubmitLogin' },

  fillRegistrationEmail(email) {
    this._waitforPageLoad();
    I.fillField(this.emailInput, email);
  },

  _waitforPageLoad() {
    I.waitForVisible(this.registerEmailInput);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  login(email, password) {
    this._waitforPageLoad();
    this._fillEmail(email);
    this._fillPassword(password);
    this._clickSingIn();
  },

  _fillEmail(email) {
    I.fillField(this.emailImput, email);
  },

  _fillPassword(password) {
    I.fillField(this.passwordInput, password);
  },

  _clickSingIn() {
    I.click(this.signInButton);
  }
}

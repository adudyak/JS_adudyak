const { I } = inject();

module.exports = {
  signInButton: { css: 'div.header_user_info' },

  clickSignIn() {
    I.click(this.signInButton);
  }
}

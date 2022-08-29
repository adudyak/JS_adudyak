const Helper = require('@codeceptjs/helper');

class EmailGenerator extends Helper {
  async getRandomEmail() {
    return Date.now() + '@test.com';
  }

  async openStoreFromHelper() {
    await this.helpers['Playwright'].amOnPage('http://automationpractice.com/index.php');
  }
}

module.exports = EmailGenerator;

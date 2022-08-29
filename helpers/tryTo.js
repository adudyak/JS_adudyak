const { I } = inject();

module.exports = {
  async checkElementIsVisible(locator) {
    return await tryTo(() => I.seeElement(locator));
  }
}

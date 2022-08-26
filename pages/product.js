const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  }
  // insert your locators and methods here
}

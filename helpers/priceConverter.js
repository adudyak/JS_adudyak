const Helper = require('@codeceptjs/helper');

class PriceConverter extends Helper {

  async getNumericPrice(string) {
    return +string.slice(1);
  }
}

module.exports = PriceConverter;

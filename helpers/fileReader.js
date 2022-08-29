const fs = require('fs');
const FILE_PATH = 'E:/Automation/GFL_stream2/JS_adudyak/input/productLinks.txt';

module.exports = {
  readContectFromFile(path) {
    try {
      return fs.readFileSync(path, 'utf8');
    } catch (err) {
      console.error(err);
    }
  },

  getArrayOfProductLinkObjects(array) {
    let arrayOfObjects = [];
    for (const element of array) {
      arrayOfObjects.push({ productLink: element });
    }
    return arrayOfObjects;
  }
}

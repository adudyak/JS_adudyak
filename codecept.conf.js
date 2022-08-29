const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'store/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      timeout: 20000,
      waitForTimeout: 10000,
      waitForNavigation: 'networkidle0',
      windowSize: '1920x1000',
    },
    "ChaiWrapper": {
      require: "codeceptjs-chai"
    },
    PriceConverter: {
      require: './helpers/priceConverter.js',
    },
    EmailGenerator: {
      require: './helpers/emailGenerator.js',
    },
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    productPage: './pages/product.js',
    tryToHelper: './helpers/tryTo.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'JS_adudyak'
}
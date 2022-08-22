const auth = require("../pages/auth");

let user = {
    firstName: 'Oleg',
    state: 'Alabama',
};

Feature('store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.fillEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    //myAccountPage.verifyPage();
}).tag('auth');

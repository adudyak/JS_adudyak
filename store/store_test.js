let user = {
    firstName: 'Oleg',
    state: 'Alabama',
};

Feature('store');

Before(({ I }) => { // or Background
    //I.openStore();
});

xScenario('create account', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    //myAccountPage.verifyPage();
}).tag('reg');

Scenario('buy product', async ({ I, homePage, authPage, productPage }) => {
    homePage.clickSignIn();
    authPage.login('210327042022@test.com', '.VhGDZ!wqiKy@59');
    I.waitForText('My account');
    I.see('My account');
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);
    I.assertEqual(29.00, 28.00, 'Prices are not in match');
}).tag('buy');


After(({ I }) => { // or Background
    //I.openStore();
});
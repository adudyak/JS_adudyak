let user = {
    firstName: 'Oleg',
    state: 'Alabama',
};

Feature('store');

xScenario('create account', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(I.getRandomEmail());
    pause();
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    //myAccountPage.verifyPage();
}).tag('reg');

xScenario('buy product', async ({ I, homePage, authPage, productPage, tryToHelper }) => {
    homePage.clickSignIn();
    authPage.login('210327042022@test.com', '.VhGDZ!wqiKy@59');
    I.waitForText('My account');
    I.see('My account');
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);
    I.assertEqual(29.00, 28.00, 'Prices are not in match');
}).tag('buy');

xScenario('custom helpers', async ({ I, homePage, authPage, productPage, tryToHelper }) => {
    // custom helpers
    //I.openStoreFromHelper();
    console.log(await I.getRandomEmail());
    console.log(await I.getNumericPrice('$29.00'));
    //tryTo
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    //const result = await tryTo(() => I.seeElement({ id: 'add_to_car' }));
    const result = await tryToHelper.checkElementIsVisible({ id: 'add_to_car' });
    console.log(result);
    if (result) {
        I.click({ id: 'add_to_cart' });
    } else {
        console.error('Add to cart is not available');
    }
}).tag('helper');
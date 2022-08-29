let user = {
    firstName: 'Oleg',
    state: 'Alabama',
};

Feature('store');

Scenario('create account', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(I.getRandomEmail());
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    myAccountPage.verifyPage();
}).tag('reg');

Scenario('custom helpers', async ({ I, homePage, authPage, productPage, tryToHelper }) => {
    // Custom Helpers
    I.openStoreFromHelper();
    console.log(await I.getRandomEmail());
    console.log(await I.getNumericPrice('$29.00'));
    // tryTo()
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
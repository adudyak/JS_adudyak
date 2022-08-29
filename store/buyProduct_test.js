let products = new DataTable(['productLink']);
products.xadd(['http://automationpractice.com/index.php?id_product=1&controller=product']);
products.xadd(['http://automationpractice.com/index.php?id_product=2&controller=product']);
products.xadd(['http://automationpractice.com/index.php?id_product=3&controller=product']);
products.xadd(['http://automationpractice.com/index.php?id_product=4&controller=product']);
/*let array = [];
array.push({ productLink: 'http://automationpractice.com/index.php?id_product=1&controller=product' },
    { productLink: 'http://automationpractice.com/index.php?id_product=2&controller=product' }
);
*/

const FileReader = require('E:/Automation/GFL_stream2/JS_adudyak/helpers/fileReader.js');
let productLinks = FileReader.readContectFromFile('E:/Automation/GFL_stream2/JS_adudyak/input/productLinks.txt');
let productLinksArray = productLinks.split('\r\n');
console.log(productLinksArray);
let arrayOfObjects = FileReader.getArrayOfProductLinkObjects(productLinksArray);
console.log(arrayOfObjects);

Feature('buy product');

Before(({ I, homePage, authPage }) => { // or Background
    I.openStore();
    homePage.clickSignIn();
    authPage.login('210327042022@test.com', '.VhGDZ!wqiKy@59');
});

Data(products).Scenario('buy product', async ({ I, productPage, current }) => {
    I.waitForText('My account');
    I.see('My account');
    I.amOnPage(current.productLink);
    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);
}).tag('buy');

Data(arrayOfObjects).Scenario('buy product', async ({ I, current }) => {
    console.log(current.productLink);
}).tag('links');



After(({ I }) => { // or Background
    //I.openStore();
});
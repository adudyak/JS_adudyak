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

const FileReader = require('./../helpers/fileReader.js');
let productLinks = FileReader.readContectFromFile('./input/productLinks.txt');
let productLinksArray = productLinks.split('\r\n');
console.log(productLinksArray);
let arrayOfObjects = FileReader.getArrayOfProductLinkObjects(productLinksArray);
console.log(arrayOfObjects);

Feature('buy product');

Before(({ I, homePage, authPage }) => {
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
    I.grabTextFrom({ css: 'div.box '});
}).tag('links');


Scenario('api', async ({ I }) => {
    let response = await I.sendGetRequest('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json');
    I.seeResponseCodeIs(200);
    console.log(response.data[0].rate);
}).tag('api');
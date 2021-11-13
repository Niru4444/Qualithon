const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const TreasureHunt = require('../pageobjects/treasureHunt');

const pages = {
    login: LoginPage
}


Given(/^I navigate to (\w+) url$/, async (page) => {
    //await pages[page].open()
    await browser.url("http://54.80.137.197:5000/");
  await TreasureHunt.clickOnImage();
browser.pause(10000);
   
});

/*When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});*/


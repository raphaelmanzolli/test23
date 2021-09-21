const { Given, When, Then } = require("@cucumber/cucumber");
const webdriver = require('selenium-webdriver');
const {By} = require("selenium-webdriver");

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

Given('I visit google', async () => {
    await driver.get('https://www.google.com');

});

When('I search for socorro', async () => {
    await driver.findElement(By.name('q')).sendKeys('socorro'+'\n');
}); 

Then('I should see the results', async () => {
    let text = await driver.findElement(By.id('result-stats')).getText();
    console.log(text);
});
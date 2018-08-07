module.exports = {
  'Home page': (browser) => {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .assert.visible('h1')
      .assert.containsText('h1', 'This is WeConnect')
      .assert.visible('div')
      .assert.visible('footer')
      .assert.visible('p')
      .pause(3000);
    browser.end();
  }
};

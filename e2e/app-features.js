module.exports = {
  'should not signup user with incorrect details': (browser) => {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .assert.visible('div')
      .setValue('input[name=username]', '')
      .setValue('input[name=email]', 'darealseun@gmail.com')
      .setValue('input[name=password]', 'passcodeword')
      .setValue('input[name=confirmPassword]', 'incorrect')
      .click('#signup')
      .pause(2000)
      .assert.urlEquals('http://localhost:3000/')
      .pause(5000);
  },
  'User should be able to signup with correct and complete details ': (browser) => {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .assert.visible('div')
      .setValue('input[name=username]', 'seunzone')
      .setValue('input[name=email]', 'darealseun@gmail.com')
      .setValue('input[name=password]', 'passcodeword')
      .setValue('input[name=confirmPassword]', 'passcodeword')
      .click('#signup')
      .pause(2000)
      .assert.urlEquals('http://localhost:3000/business')
      .waitForElementVisible('.alert', 2000)
      .pause(5000);
  },
  'User should not be able to login with incomplete details': (browser) => {
    browser
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 3000)
      .assert.visible('div')
      .setValue('input[name=email]', 'darealseun@gmail.com')
      .setValue('input[name=password]', '')
      .click('#signin')
      .pause(2000)
      .assert.urlEquals('http://localhost:3000/signin')
      .pause(5000);
  },
  'User login users with right details': (browser) => {
    browser
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 3000)
      .assert.visible('div')
      .setValue('input[name=email]', 'darealseun@gmail.com')
      .setValue('input[name=password]', 'passcodeword')
      .click('#signin')
      .pause(2000)
      .assert.urlEquals('http://localhost:3000/business')
      .pause(5000);
  },
  // write more e2e test

};

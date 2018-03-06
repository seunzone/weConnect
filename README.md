# weConnect
[![Build Status](https://travis-ci.org/seunzone/weConnect.svg?branch=api-fake-data)](https://travis-ci.org/seunzone/weConnect) [![Coverage Status](https://coveralls.io/repos/github/seunzone/weConnect/badge.svg?branch=api-fake-data)](https://coveralls.io/github/seunzone/weConnect?branch=api-fake-data) [![Maintainability](https://api.codeclimate.com/v1/badges/a5a45a1da4b3a7209757/maintainability)](https://codeclimate.com/github/seunzone/weConnect/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a5a45a1da4b3a7209757/test_coverage)](https://codeclimate.com/github/seunzone/weConnect/test_coverage)


<b>View UI Template here </b>https://seunzone.github.io/weConnect/template

<h3>TECHNOLOGIES USED</h3>
<hr>
<ul>
  <li>Front-end: React/Redux (Yet be Implemented)</li>
  <li>Back-end: Node/Expressjs + Sequelize/Postgres (Yet be Implemented)</li>
  <li>Libraries: jsonwebtoken, ES6, Babel-CLI, eslint, Mocha/Chai</li>
  <li>UI: html, css, javascript, bootstrap</li>
</ul>

<h3>App Usage</h3>
<ul>
    <li>Clone or download the repo</li>
    <li>npm install - to install the dependencies need by the app</li>
    <li>npm start - to run the app</li>
    <li>Server is running on port 3000</li>
</ul>

### Routes
- **POST** http://localhost:3000/api/v1/businesses - Adds a new Business
- **PUT** http://localhost:3000/api/v1/businesses/:id - Modifies a business
- **DELETE** http://localhost:3000/api/v1/businesses/:id - Deletes a business
- **POST** http://localhost:3000/api/v1/businesses/review/:id - Adds review for a business
- **GET** http://localhost:3000/api/v1/businesses/review/:id - Gets review for a business
- **GET** http://localhost:3000/api/v1/businesses - Gets all businesses
- **GET** http://localhost:3000/api/v1/businesses/:id - Gets details of a single business
- **POST** http://localhost:3000/api/v1/auth/signup - Creates a new user
- **POST** http://localhost:3000/api/v1/auth/login - Signs in a new user

# WEconnect

[![Build Status](https://travis-ci.org/seunzone/weConnect.svg?branch=develop)](https://travis-ci.org/seunzone/weConnect) [![Coverage Status](https://coveralls.io/repos/github/seunzone/weConnect/badge.svg?branch=develop)](https://coveralls.io/github/seunzone/weConnect) [![Maintainability](https://api.codeclimate.com/v1/badges/a5a45a1da4b3a7209757/maintainability)](https://codeclimate.com/github/seunzone/weConnect/maintainability)


## Application Description
WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with
 <br/><b> See Application here: </b> https://weconnect-seunzone.herokuapp.com/
## Table of Content

 [Features](#features)
 [Technology](#technology)
 [Installation](#installation)
 [Testing](#testing)
 [API End Points](#api-end-points)

## Features
Below are the features of my WEconnect app
###  Users

Users can register on WEconnect<br/>
Users can log into WEconnect<br/>
Users can view all businesses<br/>
Users can search for any business<br/>
Users can search businesses by category<br/>
Users can search businesses by location<br/>
Users can write a review for any business in the catalog<br/>
Users can register businesses in WEconnect<br/>
Users can update their businesses<br/>
Users can delete their businesses<br/>

## Technologies used

Modern JavaScript technologies were adopted for this project

ES2015: Also known as ES6 or ES2015 or ECMASCRIPT 6, is a new and widely used version of Javascript
that makes it compete healthily with other languages. See [here](https://en.wikipedia.org/wiki/ECMAScript) for more infromation.

NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment which allows you enjoy the features of Javascript off the web browsers and implement server-side web development.
Visit [here](https://nodejs.org/en/) for more information.

ExressJS: This is the web application framework for Node.js
Visit [here](https://expressjs.com) for more information

Postgresql: This is an open source Object-Relational Model (ORM) database.

React: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes
Visit [here](https://reactjs.org/) for more information

Webpack: webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
Visit [here](https://webpack.js.org/) for more information


Sequelize: This a promise-based ORM (Object Relational Mapper) for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
Visit [here](https://docs.sequelizejs.com) for more information

Codes are written in accordance with Airbnb JavaScript style guide, see [here](https://github.com/airbnb/javascript) for details.

## Other helpful resources
Pexels: Free stock photos you can use everywhere. ✓ Free for commercial use ✓ No attribution required.
Visit [here](https://www.pexels.com) to get started

Hero Patterns: A collection of repeatable SVG background patterns for you to use on your web projects.
Visit [here](http://www.heropatterns.com/) to get started

## Installation
1. Clone this repository into your local machine:
```
git clone https://github.com/seunzone/weConnect.git
```
2. Install dependencies
```
npm install
```
3. Start the development application by running
```
npm run dev
```
4. Create a `.env` file in the root of your project and insert
    See a sample in the `.env.sample`
    Fill in the sample data with your prefared parameters

5. Install postman to test all endpoints

## Testing
- run test using `npm run test`    

## API Routes

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>
<tr><td>POST</td> <td>api/v1/businesses</td>  <td>Add Business to catalog</td></tr>

<tr><td>PUT</td> <td>api/v1/businesses/:businessId</td>  <td>Update business</td></tr>

<tr><td>DELETE</td> <td>api/v1/businesses/:businessId</td>  <td>Delete business</td></tr>

<tr><td>POST</td> <td>api/v1/businesses/:businessId/review</td> <td>Add review for a business</td></tr>

<tr><td>GET</td> <td>api/v1/businesses/:businessId/review</td> <td>Get all reviews for a business</td></tr>

<tr><td>GET</td> <td>api/v1/businesses</td> <td>Get all businesses</td></tr>

<tr><td>GET</td> <td>api/v1/businesses/:businessId</td> <td>Get details of a business<td></tr>

<tr><td>GET</td> <td>api/v1/businesses?location=location</td> <td>Get businesses in a particular location<td></tr>

<tr><td>GET</td> <td>api/v1/businesses?category=category</td> <td>Get businesses in a particular category</td></tr>

<tr><td>POST</td> <td>api/v1/auth/signup</td> <td>Create a user</td></tr>

<tr><td>POST</td> <td>api/v1/auth/login</td> <td>Sign in a user</td></tr>
    </table>

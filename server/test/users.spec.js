import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import users from './seed/userSeed';

const { expect } = chai;

chai.use(chaiHttp);

const userSignup = '/api/v1/auth/signup';
const userLogin = '/api/v1/auth/login';
// Test Signing up a user
describe('User signup', () => {
  it('It Should create user with right signup credentials', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send(users[0])
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('signup sucessful');
        expect(res.body.user.username).to.equal(users[0].username);
        expect(res.body.user.email).to.equal(users[0].email);
        expect(res.body).to.have.property('token');
        expect(res.body.token).to.be.a('string');
        expect(res.body).to.not.have.property(users.password);
        done();
      });
  });
  it('should not register a new user with an already existing email', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send(users[0])
      .end((err, res) => {
        expect(res).to.have.status(409);
        expect(res.body).to.be.an('object');
        //expect(res.body.message).to.equal('Email already exist');
        done();
      });
  });
  it('should not register user with a wrong email format', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: 'tobi',
        email: 'teeboy.com',
        password: '1234567890',
        confirmPassword: '1234567890'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email)
          .to.include('Email address is empty or invalid');
        done();
      });
  });
  it('should not register user with an empty username field ', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: '',
        email: 'seun@test.com',
        password: '1234567',
        confirmPassword: '1234567'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error.username)
          .to.include('Username is required');
        done();
      });
  });
  it('should not register with less than 3 characters', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: 'sa',
        email: 'seun@test.com',
        password: '1234567',
        confirmPassword: '1234567'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Username can only be from 3 to 15 characters');
        done();
      });
  });
  it('should not register with more than 15 characters', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: 'sajhdkdbfbirjbrjbvjdljldjldfrjbrjbrkd',
        email: 'seun@test.com',
        password: '1234567',
        confirmPassword: '1234567'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Username can only be from 3 to 15 characters');
        done();
      });
  });
  it('should not register with wierd characters', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: '@$@%#!^!',
        email: 'seun@test.com',
        password: '1234567',
        confirmPassword: '1234567'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Only alphabets and numbers are allowed.');
        done();
      });
  });
  it('should not register with less than 6 password characters', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: 'superuser',
        email: 'seun@test.com',
        password: '123',
        confirmPassword: '123'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Password can only be from 6 to 50 characters');
        done();
      });
  });
  it('should not register user with an empty email field ', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: 'superuser',
        email: '',
        password: '1234567',
        confirmPassword: '1234567'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email)
          .to.include('Email is required');
        done();
      });
  });
  it('should not register user with an empty password field ', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: 'superuser',
        email: 'user@email.com',
        password: '',
        confirmPassword: '43453'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password)
          .to.include('Passwords do not match or empty');
        done();
      });
  });
  it('should return error if password do not match', (done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send({
        username: 'superuser',
        email: 'user@email.com',
        password: '5454',
        confirmPassword: '43453'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password)
          .to.include('Passwords do not match or empty');
        done();
      });
  });
});

describe('User login', () => {
  it('should login a user with the correct details', (done) => {
    chai.request(app)
      .post(`${userLogin}`)
      .send(users[1])
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.foundUser.email).to.equal(users[1].email);
        expect(res.body).to.have.property('token');
        expect(res.body.foundUser).to.not.have.property(users[1].password);
        expect(res.body).to.have.property('token');
        expect(res.body.token).to.be.a('string');
        done();
      });
  });
  it('should not login user without password', (done) => {
    chai.request(app)
      .post(`${userLogin}`)
      .send({
        email: 'test@we.com',
        password: '',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password).to.equal('Password is required');
        done();
      });
  });
  it('should not login user without email address', (done) => {
    chai.request(app)
      .post(`${userLogin}`)
      .send({
        email: '',
        password: 'password',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email).to.equal('Email is required');
        done();
      });
  });
  it('should not sign in a user with an incorrect password', (done) => {
    chai.request(app)
      .post(`${userLogin}`)
      .send({
        email: 'test@we.com',
        password: 'wrongpassword',
      })
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.equal('You entered a wrong password');
        done();
      });
  });
  it('should not login user with an incorrect email address', (done) => {
    chai.request(app)
      .post(`${userLogin}`)
      .send({
        email: 'wrong@email.com',
        password: 'test@we.com',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.equal('user does not exist');
        done();
      });
  });
});

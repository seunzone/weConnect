import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import users from './seed/userSeed';

const { expect } = chai;

chai.use(chaiHttp);

const userSignup = '/api/v1/auth/signup';
// Test Signing up a user
describe('User signup', () => {
  it('It Should create user with right signup credentials', (done) => {
    chai.request(app)
      .post(userSignup)
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
  it('Should not register a new user with an already existing email', (done) => {
    chai.request(app)
      .post(userSignup)
      .send(users[0])
      .end((err, res) => {
        expect(res).to.have.status(409);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Email already exist');
        done();
      });
  });
  it('Should not register user with a wrong email format', (done) => {
    chai.request(app)
      .post(userSignup)
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
  it('Should not register user with an empty username field ', (done) => {
    chai.request(app)
      .post(userSignup)
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
  it('Should not register user with an empty email field ', (done) => {
    chai.request(app)
      .post(userSignup)
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
  it('Should not register user with an empty password field ', (done) => {
    chai.request(app)
      .post(userSignup)
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
  it('Should return error if password do not match', (done) => {
    chai.request(app)
      .post(userSignup)
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


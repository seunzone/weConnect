import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../app';
import users from './seed/userSeed';

chai.use(chaiHttp);

let userToken;
let id;
const userSignup = '/api/v1/auth/signup';
const businessURL = '/api/v1/businesses';

const profile = {
  name: 'Andela Nigeria',
  description: 'Brilliance is evenly distributed, opprotunity is not',
  image: 'Some random image URL',
  category: 'ICT',
  location: 'Lagos Nigeria'
};

const review = {
  content: 'You own your learning'
};

describe('REVIEW API', () => {
  before((done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send(users[3])
      .end((err, res) => {
        userToken = res.body.token;
        done();
      });
  });

  before((done) => {
    chai.request(app)
      .post(`${businessURL}`)
      .set('token', userToken)
      .send(profile)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  describe('Add review', () => {
    it('should not allow non auth user to add a review', (done) => {
      chai.request(app)
        .post(`/api/v1/businesses/${id}/review`)
        .send(review)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Unauthorized.');
          done();
        });
    });
    it('should not add review for a id that is not a number', (done) => {
      chai.request(app)
        .post('/api/v1/businesses/abcdefg/review')
        .set('token', userToken)
        .send(review)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.id)
            .to.include('The Id must be a number');
          done();
        });
    });
  });
});

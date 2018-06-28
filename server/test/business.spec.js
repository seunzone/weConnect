import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import users from './seed/userSeed';

const { expect } = chai;

chai.use(chaiHttp);

let userToken;


const businessURL = '/api/v1/businesses';
const userSignup = '/api/v1/auth/signup';

const profile1 = {
  name: 'Andela Nigeria',
  description: 'Brilliance is evenly distributed, opprotunity is not',
  image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  category: 'ICT',
  location: 'Lagos Nigeria',
  token: userToken
};

describe('BUSINESS CONTROLLER', () => {
  before((done) => {
    chai.request(app)
      .post(`${userSignup}`)
      .send(users[2])
      .end((err, res) => {
        userToken = res.body.token;
        done();
      });
  });
  describe('Add Business', () => {
    it('should not add business with an empty name field', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .set('token', userToken)
        .send({
          name: '',
          description: 'Brilliance is evenly distributed, opprotunity is not',
          image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          category: 'ICT',
          location: 'Lagos Nigeria',
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.name)
            .to.include('Name is required');
          done();
        });
    });
    it('should not add business name with less than 3 characters', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .set('token', userToken)
        .send({
          name: 'An',
          description: 'Brilliance is evenly distributed, opprotunity is not',
          image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          category: 'ICT',
          location: 'Lagos Nigeria',
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('Business name should be between 3 to 30 characters');
          done();
        });
    });
    it('should not add business with an empty description', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .set('token', userToken)
        .send({
          name: 'Andela Nigeria',
          description: '',
          image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          category: 'ICT',
          location: 'Lagos Nigeria',
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.description)
            .to.include('Description is required');
          done();
        });
    });
    it('should not add business description with less than 10 characters', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .set('token', userToken)
        .send({
          name: 'Andela Naija',
          description: 'Brillia',
          image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          category: 'ICT',
          location: 'Lagos Nigeria',
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('Description must be between 10 to 2000 characters');
          done();
        });
    });
    it('should not add business with an empty category', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .set('token', userToken)
        .send({
          name: 'Andela Nigeria',
          description: 'Brilliance is evenly distributed, opportunity is not',
          image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          category: '',
          location: 'Lagos Nigeria',
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.category)
            .to.include('Category is required');
          done();
        });
    });
    it('should not add business with an empty location', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .set('token', userToken)
        .send({
          name: 'Andela Nigeria',
          description: 'Brilliance is evenly distributed, opportunity is not',
          image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          category: 'ICT',
          location: '',
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.location)
            .to.include('Location is required');
          done();
        });
    });
    it('should allow auth users to add business', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .set('token', userToken)
        .send(profile1)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done();
        });
    });

    it('should not allow non auth user to add business', (done) => {
      chai.request(app)
        .post(`${businessURL}`)
        .send(profile1)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('You must be logged in to perform this action.');
          done();
        });
    });
  });
  describe('Update Business', () => {
    it('should not update a business', (done) => {
      chai.request(app)
        .put('/api/v1/businesses/10')
        .set('token', userToken)
        .send(profile1)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.be.a('string');
          done();
        });
    });
    it('should not allow non auth user to update business', (done) => {
      chai.request(app)
        .put('/api/v1/businesses/10')
        .send(profile1)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('You must be logged in to perform this action.');
          done();
        });
    });
    it('should allow authenticated users update business', (done) => {
      chai.request(app)
        .put('/api/v1/businesses/1')
        .set('token', userToken)
        .send(profile1)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should not update a particular id that is not a number', (done) => {
      chai.request(app)
        .put('/api/v1/businesses/abcdefgh')
        .set('token', userToken)
        .send(profile1)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.id)
            .to.include('The Id must be a number');
          done();
        });
    });
  });
  describe('Get Business', () => {
    it('should allow users to view all bussinesses', (done) => {
      chai.request(app)
        .get(`${businessURL}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should allow users to view a particular business', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should allow users to sort search by location', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/?location=Lagos')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should allow users to sort search by Category', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/?category=ict')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should not get a particular id that is not a number', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/abcdefgh')
        .send(profile1)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.id)
            .to.include('The Id must be a number');
          done();
        });
    });
  });
  describe('Delete a business', () => {
    it('should not delete a business that does not exist', (done) => {
      chai.request(app)
        .delete('/api/v1/businesses/10')
        .set('token', userToken)
        .send({
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.be.a('string');
          done();
        });
    });
    it('should not allow a non auth user to delete a business', (done) => {
      chai.request(app)
        .delete('/api/v1/businesses/1')
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('You must be logged in to perform this action.');
          done();
        });
    });
    it('should allow an authenticated user delete a business', (done) => {
      chai.request(app)
        .delete('/api/v1/businesses/1')
        .set('token', userToken)
        .send({
          token: userToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should not delete a business without an id number', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/abcdef')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error.id)
            .to.include('The Id must be a number');
          done();
        });
    });
  });
});

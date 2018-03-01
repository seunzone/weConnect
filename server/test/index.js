import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test API', () => {
  // Test for default route
  it('Should return 200 for the default route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  // Test for undefined routes
  it('Undefined Routes Should Return 404', (done) => {
    chai.request(app)
      .post('/another/undefined/route')
      .send({ random: 'random' })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

// Test for posting a business
describe('POST business', () => {
  it('Should return 400 for post without event title', (done) => {
    chai.request(app)
      .post('/api/v1/profile')
      .send({
        id: 6,
        name: 'Andela Nigeria',
        details: 'Andela na the place o, if you are somewhere else, you are wrong. Copy that?',
        location: 'Lagos',
        category: 'ICT'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});

// Test for posting a business with any field missing
describe('POST business', () => {
  it('Should return 400 for post without event title', (done) => {
    chai.request(app)
      .post('/api/v1/profile')
      .send({
        id: 6,
        name: '',
        details: 'Andela na the place o, if you are somewhere else, you are wrong. Copy that?',
        location: 'Lagos',
        category: 'ICT'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
// Test for updating a business
describe('API to update business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .put('/api/v1/profile/1')
      .send({
        id: 1,
        name: 'Andela Naija',
        details: 'Andela na the place o, if you are somewhere else, you are wrong. Copy that?',
        location: 'Lagos',
        category: 'ICT'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').equal('success');
        done();
      });
  });
});

// Test for updating a business with any field missing
describe('API to update business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .put('/api/v1/profile/1')
      .send({
        id: 1,
        name: '',
        details: 'Andela na the place o, if you are somewhere else, you are wrong. Copy that?',
        location: 'Lagos',
        category: 'ICT'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

// Test to delete a business Profile
describe('API delete Profile', () => {
  it('Should return 200 for succesful delete request ', (done) => {
    chai.request(app)
      .delete('/api/v1/profile/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Should return 404 if parameter is not found', (done) => {
    chai.request(app)
      .delete('/api/v1/delete/')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

// Test for posting reviews
describe('Test for posting review', () => {
  it('Should return 201 if successful', (done) => {
    chai.request(app)
      .post('/api/v1/profile/review/:id')
      .send({
        reviewer: 'Seun',
        content: 'Just a test content'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('Should return 400 if any empty parameters', (done) => {
    chai.request(app)
      .post('/api/v1/profile/review/:id')
      .send({
        reviewer: '',
        content: 'Just a test content'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
// Test for getting reviews
describe('GET Reviews', () => {
  it('Should return 200 for getting reviews', (done) => {
    chai.request(app)
      .get('/api/v1/profile/review/1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('Should return 404 for reviews that does not exist', (done) => {
    chai.request(app)
      .get('/api/v1/profile/review/50')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});

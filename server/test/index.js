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

// Test for posting a business without a business name
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


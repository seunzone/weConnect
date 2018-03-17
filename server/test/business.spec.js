// import chaiHttp from 'chai-http';
// import chai from 'chai';
// import app from '../app';
// import users from './seed/userSeed';

// const { expect } = chai;

// chai.use(chaiHttp);

// let userToken;

// const businessURL = '/api/v1/businesses';

// // const profile1 = {
// //   name: 'Andela Nigeria',
// //   description: 'Brilliance is evenly distributed, opprotunity is not',
// //   image: 'Some random image URL',
// //   category: 'ICT',
// //   location: 'Lagos Nigeria'
// // };

// describe('BUSINESS CONTROLLER', () => {
//   before((done) => {
//     chai.request(app)
//       .post('/api/v1/auth/signup')
//       .send(users[0])
//       .end((err, res) => {
//         userToken = res.body.token;
//         done();
//       });
//   });
//   describe('Add Business', () => {
//     it('Should not add business with an empty name field', (done) => {
//       chai.request(app)
//         .post(businessURL)
//         .set('token', userToken)
//         .send({
//           name: '',
//           description: 'Brilliance is evenly distributed, opprotunity is not',
//           image: 'Some random image URL',
//           category: 'ICT',
//           location: 'Lagos Nigeria'
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           expect(res.body).to.be.an('object');
//           expect(res.body.error.name)
//             .to.include('Name is required');
//           done();
//         });
//     });
//   });
// });

// /* eslint no-undef: "off" */
// import * as actions from '../../actions/auth';
// import * as types from '../../actions/actionType';

// import {
//   signUp,
//   signUpResponse,
//   signIn,
//   signInResponse,
//   userReponseFailed
// } from '../__mocks__/users';

// describe('Authentication actions tests', () => {
//   beforeEach(() => moxios.install());
//   afterEach(() => moxios.uninstall());

//   describe('signup action', () => {
//     it('should register a new user', (done) => {
//       moxios.stubRequest('api/v1/auth/signup', {
//         status: 201,
//         response: signUpResponse
//       });

//       const { user } = signUpResponse.data;
//       const expectedActions = [
//         {
//           type: types.CURRENT_USER,
//           credentials: user
//         }
//       ];
//       const store = mockStore({});
//       return store.dispatch(actions.signUpUsers(signUp))
//         .then(() => {
//         console.log(store.getActions());
//         console.log(expectedActions);
//           expect(store.getActions()).toEqual(expectedActions);
//           done();
//         });
//     });
//   });
// });

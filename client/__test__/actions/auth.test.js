/* eslint no-undef: "off" */
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import decode from 'jwt-decode';
import * as actions from '../../actions/auth';
import * as types from '../../actions/actionType';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('should dispatch signInUsers on successful login', (done) => {
    moxios.stubRequest('api/v1/auth/login', {
      status: 200,
      response: { token }
    });
    const expectedActions = [{
      type: types.CURRENT_USER,
      user: decode(token)
    }];

    const myUser = {
      username: 'seunzone',
      password: 'password'
    };

    localStorage.setItem('token', token);

    const store = mockStore({});
    return store.dispatch(actions.signInUsers(myUser))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch signUpUsers on successful login', (done) => {
    moxios.stubRequest('api/v1/auth/signup', {
      status: 200,
      response: { token }
    });
    const expectedActions = [{
      type: types.CURRENT_USER,
      user: decode(token)
    }];

    const myUser = {
      username: 'seunzone',
      password: 'password'
    };

    localStorage.setItem('token', token);

    const store = mockStore({});
    return store.dispatch(actions.signUpUsers(myUser))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should logout user', (done) => {
    const expectedActions = [{
      type: types.CURRENT_USER,
      user: {},
    }];

    localStorage.setItem('token', token);
    localStorage.removeItem('token');

    const store = mockStore({});
    store.dispatch(actions.logout());
    expect(localStorage.token).toBeUndefined();
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});

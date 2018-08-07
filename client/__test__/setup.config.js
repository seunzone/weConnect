
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.moxios = moxios;
global.mockStore = mockStore;
const window = {
  splice: jest.fn(),
  location: {
    href: {
      split: jest.fn(() => ({
        splice: jest.fn(() => ({
          toString: jest.fn()
        }))
      }))
    }
  }
};

const document = {
  getElementById: jest.fn(() => ({
    click: jest.fn()
  }))
};

global.window = window;
global.document = document;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTMzNTA0MjAzLCJleHAiOjE1MzM1OTA2MDN9.h6l6C5CfUNC9RKgO-38LqAO6oLBXP05v7mjNJWd7kp8';
global.token = token;

/**
 * @description Mock Local storage
 *
 * @class LocalStorageMock
 */
class LocalStorageMock {
  /**
   * @description Creates an instance of LocalStorageMock
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof LocalStorageMock
   *
   * @returns {void}
   */
  constructor() {
    this.store = {};
  }
  /**
  * @description sets a local storage key to a value
  *
  * @method setItem
  *
  * @memberof LocalStorageMock
  *
  * @param {any} key
  * @param {any} value
  * @returns {void}
  */
  setItem(key, value) {
    this.store[key] = value.toString();
  }

  /**
  * @description removes local storage key value
  *
  * @method removeItem
  *
  * @memberof LocalStorageMock
  *
  * @param {any} key
  * @returns {void}
  */
  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

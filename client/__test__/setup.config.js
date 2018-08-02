
import { configure, shallow, render, mount } from 'enzyme';
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

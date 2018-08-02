import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import thunk from 'redux-thunk';
// import configureMockStore from 'redux-mock-store';
import React from 'react';
import { Signin } from '../../../components/auth/Signin';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
let context;
const setup = () => {
  props = {
    match: { params: {} },
    state: {
      oneBusiness: {
        id: 1,
        email: '',
        password: '',
        errors: {},
        isLoading: false
      },
    },
    signInUsers: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve())
  };
  context = {
    router: {
      history: {}
    }
  };
  return shallow(<Signin {...props} />, { context });
};
const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: SignIn', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('SigninForm').length).toBe(1);
  });
});

describe('Connected SignIn', () => {
  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });

  it('should call onSubmit function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(wrapper.instance(), 'onSubmit');
    action.onSubmit(event);
    expect(onSubmit).toBeCalled();
  });
});

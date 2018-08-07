import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { SigninForm } from '../../../components/auth/SinginForm';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    state: {
      name: '',
      email: '',
      password: 'qwerty',
      errors: [],
      isLoading: false
    }
  };
  return shallow(<SigninForm {...props} />);
};

describe('Component: SignUpForm', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
  });
});

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Home } from '../../../components/main/Home';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    signUpUsers: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
    getAllBusiness: jest.fn(() => Promise.resolve()),
    business: []
  };
  return shallow(<Home {...props} />);
};

describe('Component: Home', () => {
  it('should render component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
    wrapper.setProps({ business: [{}, {}, {}] });
    expect(wrapper.find('h3').length).toBe(1);
    wrapper.setProps({ business: [{}, {}, {}, {}] });
  });
});

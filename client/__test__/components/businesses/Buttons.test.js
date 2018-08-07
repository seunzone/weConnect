import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Buttons } from '../../../components/businesses/Buttons';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    // params: { id: 5 }
  };
  return shallow(<Buttons {...props} />);
};

describe('Component: Businesses', () => {
  it('should render component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
  });
});

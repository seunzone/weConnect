import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { AddBusinessParent } from '../../../components/businesses/AddBusinessParent';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    addBusiness: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve())
  };

  return shallow(<AddBusinessParent {...props} />);
};

describe('Component: AddBusinessParent', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(0);
  });
});

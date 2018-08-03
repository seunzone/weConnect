import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { EditBusinessParent } from '../../../components/businesses/EditBusinessParent';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    getOneBusiness: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
    editBusiness: jest.fn(() => Promise.resolve()),
    saveImageCloudinary: jest.fn(() => Promise.resolve()),
    match: {
      params: {
        id: 1
      }
    }
  };
  return shallow(<EditBusinessParent {...props} />);
};

describe('Component: EditBusinessParent', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(0);
  });
});

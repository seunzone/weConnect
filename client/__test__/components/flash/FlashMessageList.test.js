import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import FlashMessagesList from '../../../components/flash/FlashMessage';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    messages: [{
      id: 1
    }],
    deleteFlashMessage: jest.fn(),
    message: {}
  };
  return shallow(<FlashMessagesList {...props} />);
};

describe('Component: FlashMessage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
  });
});

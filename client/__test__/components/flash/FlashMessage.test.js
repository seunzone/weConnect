import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import FlashMessage from '../../../components/flash/FlashMessage';


configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    message: {},
    deleteFlashMessage: jest.fn(),
  };
  return shallow(<FlashMessage {...props} />);
};

describe('Compnent: FlashMessage', () => {
  it('should render flash message', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should delete flash message', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const deleteFlashMessage = jest.spyOn(wrapper.instance(), 'onClick');
    action.onClick();
    expect(deleteFlashMessage).toBeCalled();
  });
});

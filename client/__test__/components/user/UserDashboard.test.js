import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UserDashboard } from '../../../components/user/UserDashboard';

jest.mock('../../../public/images/loader.gif', () => 'loader.gif');

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    getAllBusiness: jest.fn(() => Promise.resolve()),
    deleteBusiness: jest.fn(() => Promise.resolve()),
    authId: {},
    paginate: {},
    business: [
      {
        id: 1,
        namee: 'Andela'
      }
    ]
  };
  return shallow(<UserDashboard {...props} />);
};
const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: '',
  }
};
describe('Component: Home', () => {
  it('should render component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(12);
  });
});

describe('Connected RegisterBusiness', () => {
  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });
});


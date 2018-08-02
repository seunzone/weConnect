import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedSignupForm, { SignupForm } from '../../../components/auth/SignupForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    business: {
      id: 1,
      title: 'bestMart',
      image: 'image.jpeg',
      description: 'we sell the best penguins... dolphins would envy you',
      category: 'technology',
      createdAt: '2018-07-25T10:08:38.181Z'
    },
    params: { id: 5 },
    state: {
      data: {
        username: '',
        email: '',
        password: '',
        errors: '',
        isLoading: false
      }
    },
    signUpUsers: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve())
  };
  return shallow(<SignupForm {...props} />);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: SignForm', () => {
  it('should render component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h6').length).toBe(1);
  });
});

describe('Connected EditBusinessPage', () => {
//   it('should return oneBusiness from state', () => {
//     const allBusinesses = {
//       business: {
//         id: 1,
//         title: 'bestMart',
//         image: 'image.jpeg',
//         description: 'we sell the best penguins... dolphins would envy you',
//         category: 'technology',
//         location: 'abuja',
//         email: 'email@email.com',
//         createdAt: '2018-07-25T10:08:38.181Z',
//         updatedAt: '2018-07-25T10:08:38.181Z'
//       }
//     };

//     const store = mockStore({
//       allBusinesses
//     });
//     const wrapper = shallow(<ConnectedEditBusiness store={store} {...props} />);
//     expect(wrapper.length).toBe(1);
//   });

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
  it('should call isValid function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const isValid = jest.spyOn(wrapper.instance(), 'isValid');
    action.isValid();
    expect(isValid).toBeCalled();
  });
});

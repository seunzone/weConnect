import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedRegisterBusiness, { AddNewBusiness } from '../../../components/businesses/AddBusiness';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
let context;
const setup = () => {
  props = {
    business: {
      id: 1,
      title: 'lorem',
      image: 'image.png',
      description: 'lorem ipsum dolor',
      category: 'ict'
    },
    match: { params: {} },
    state: {
      oneBusiness: {
        id: 1,
        title: 'lorem',
        image: 'image.png',
        description: 'lorem ipsum dolor',
        category: 'ict'
      },
    },
    response: { },
    imageInfo: {},
    addBusiness: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
    saveImageCloudinary: jest.fn(() => Promise.resolve()),
    mapStateToProps: jest.fn(() => Promise.resolve()),
  };
  context = {
    router: {
      history: {}
    }
  };
  return shallow(<AddNewBusiness {...props} />, { context });
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: '',
    files: [{}, {}, {}]
  }
};

describe('Component: RegisterBusinessPage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(14);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
  });
});

describe('Connected RegisterBusiness', () => {
  it('should return registered business from state', () => {
    const addBusiness = {
      business: {
        id: 1,
        title: 'lorem',
        image: 'image.png',
        description: 'lorem ipsum dolor',
        category: 'ict'
      }
    };
    const store = mockStore({
      imageInfo: {
        imageUrl: 'image.png'
      }
    });
    const wrapper = shallow(<ConnectedRegisterBusiness store={store} />, { context });
    expect(wrapper.length).toBe(1);
  });

  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });

  it('should call handleImageChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const handleImageChange = jest.spyOn(wrapper.instance(), 'handleImageChange');
    action.handleImageChange(event);
    expect(handleImageChange).toBeCalled();
  });

  it('should call submitImage function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const submitImage = jest.spyOn(wrapper.instance(), 'submitImage');
    action.submitImage(event);
    expect(submitImage).toBeCalled();
  });

  it('should call onSubmit function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(wrapper.instance(), 'onSubmit');
    action.onSubmit(event);
    expect(onSubmit).toBeCalled();
  });
});

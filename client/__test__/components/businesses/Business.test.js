import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedBusinessCatalog, { Businesses } from '../../../components/businesses/Business';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    paginate: {
      presentPage: 1,
      limit: 6,
      count: 5
    },
    business: [{
      id: 1,
      name: 'lorem',
      image: 'image.png',
      description: 'lorem ipsum dolor',
      category: 'technology'
    }],
    getAllBusiness: jest.fn(() => Promise.resolve()),
    getBusinessSearchAction: jest.fn(() => Promise.resolve()),
    componentDidMount: jest.fn(() => Promise.resolve()),
  };
  return shallow(<Businesses {...props} />);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: Businesses', () => {
  it('should render component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(11);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('option').length).toBe(4);
    expect(wrapper.find('h1').length).toBe(2);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(0);
  });
});

describe('Connected Businesses', () => {
  it('tests that the comnponent successfully renders', () => {
    const allBusinesses = {
      business: {
        id: 1,
        name: 'lorem',
        image: 'image.png',
        description: 'we sell the best penguins... dolphins would envy you',
        category: 'ict',
        location: 'abuja',
        createdAt: '2018-07-25T10:08:38.181Z'
      },
      paginate: {}
    };
    const store = mockStore({
      allBusinesses
    });
    const wrapper = shallow(<ConnectedBusinessCatalog store={store} />);
    expect(wrapper.length).toBe(1);
  });

  it('should call onChangeThis function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChangeThis = jest.spyOn(wrapper.instance(), 'onChangeThis');
    action.onChangeThis(event);
    expect(onChangeThis).toBeCalled();
  });

  it('should call onSearch function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSearch = jest.spyOn(wrapper.instance(), 'onSearch');
    action.onSearch(event);
    expect(onSearch).toBeCalled();
  });
  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });
});

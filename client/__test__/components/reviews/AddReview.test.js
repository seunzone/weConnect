import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { AddReviews } from '../../../components/reviews/AddReviews';

configure({ adapter: new Adapter() });
let props;
let context;
const setup = () => {
  props = {
    params: {},
    getOneBusiness: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
    addBusinessReview: jest.fn(() => Promise.resolve()),
  };
  return shallow(<AddReviews {...props} />, { context });
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: '',
    files: [{}, {}, {}]
  }
};

describe('Component: AddReviews', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });
});

describe('Connected AddReviews', () => {
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
});

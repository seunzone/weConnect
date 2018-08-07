import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Cards from '../../../components/common/TextFieldGroup';


configure({ adapter: new Adapter() });
const props = {
  field: 'something',
  value: 'seun',
  type: 'some type',
  placeholder: 'lorem ipsum dolor',
  error: 'error is here',
  onChange: jest.fn(),
};
describe('Compnent: TextFieldGroup', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Cards {...props}/>);
    expect(wrapper.find('div').length).toBe(1);
  });
});


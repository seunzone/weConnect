import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Cards from '../../../components/cards/BusinessCards';

configure({ adapter: new Adapter() });
const props = {
  id: 1,
  name: 'seun',
  image: 'some image string',
  description: 'lorem ipsum dolor',
  category: 'ict'
};
describe('Compnent: Card', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Cards {...props} />);
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('TextTruncate').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('hr').length).toBe(1);
  });
});

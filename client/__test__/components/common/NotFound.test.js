
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import NotFound from '../../../components/common/NotFound';


configure({ adapter: new Adapter() });
describe('Compnent: NotFound', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
  });
});
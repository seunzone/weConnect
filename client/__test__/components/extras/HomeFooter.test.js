
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import HomeFooter from '../../../components/extras/HomeFooter';


configure({ adapter: new Adapter() });
describe('Compnent: HomeFooter', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<HomeFooter />);
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('h3').length).toBe(4);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('p').length).toBe(3);
  });
});

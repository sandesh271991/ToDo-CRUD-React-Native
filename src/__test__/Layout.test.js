import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import __Layout from '../component/Layout';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ErrorAlert', () => {
  it('should render ErrorAlert component', () => {
    const wrapper = shallow(<__Layout />);
  });

  it('should render initial layout', () => {
    // when
    const component = shallow(<__Layout />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
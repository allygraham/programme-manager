import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {

  test('render the <Header> component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
  });

});

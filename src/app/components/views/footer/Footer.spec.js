import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer';

describe('Footer', () => {

  test('render the <Footer> component', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper).toMatchSnapshot();
  });

});

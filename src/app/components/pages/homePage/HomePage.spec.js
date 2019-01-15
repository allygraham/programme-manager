import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from './HomePage';

describe('HomePage', () => {

  test('render the <HomePage> component', () => {
    const resetApplicationStateMock = jest.fn();

    const wrapper = shallow(<HomePage resetApplicationState={resetApplicationStateMock}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('clicking on the RESET button should invoke the callback', () => {
    const resetApplicationStateMock = jest.fn();

    const wrapper = shallow(<HomePage resetApplicationState={resetApplicationStateMock}/>);
    expect(resetApplicationStateMock).not.toHaveBeenCalled();

    wrapper.find('button').simulate('click');
    expect(resetApplicationStateMock).toHaveBeenCalled();
  });

});
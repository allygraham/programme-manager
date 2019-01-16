import React from 'react';
import { shallow } from 'enzyme';

import { Search } from './Search';

describe('Search', () => {

  test('render the <Search> component', () => {
    const handleSearch = jest.fn();
    const clearSearch = jest.fn();
    const searchValue = '100';

    const wrapper = shallow(<Search handleSearch={handleSearch} clearSearch={clearSearch} searchValue={searchValue} />);
    expect(wrapper).toMatchSnapshot();
  });

});
import React from 'react';
import { shallow } from 'enzyme';

import { TableHead } from './TableHead';

describe('TableHead', () => {

  test('render the <TableHead> component', () => {
    const sortBy = jest.fn();
    const sortCriteria = 'name';

    const wrapper = shallow(<TableHead sortBy={sortBy} sortCriteria={sortCriteria} />);
    expect(wrapper).toMatchSnapshot();
  });

});
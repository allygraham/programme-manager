import React from 'react';
import { shallow } from 'enzyme';

import { TableRow } from './TableRow';

describe('TableRow', () => {

  test('render the <TableRow> component', () => {
    const handleProgrammeRemove = jest.fn();
    const handleProgrammeEdit = jest.fn();
    const programme = {};

    const wrapper = shallow(<TableRow handleProgrammeRemove={handleProgrammeRemove} handleProgrammeEdit={handleProgrammeEdit} programme={programme} />);
    expect(wrapper).toMatchSnapshot();
  });

});
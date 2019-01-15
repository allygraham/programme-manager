import React from 'react';
import { shallow } from 'enzyme';

import { Table } from './Table';

describe('Table', () => {

  test('render the <Table> component', () => {
    const children = <div>Hello World</div>;

    const wrapper = shallow(<Table>{children}</Table>);
    expect(wrapper).toMatchSnapshot();
  });

});
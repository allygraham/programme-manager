import React from 'react';
import { shallow } from 'enzyme';

import { ProgrammeModal } from './ProgrammeModal';

describe('ProgrammeModal', () => {

  test('render the <ProgrammeModal> component', () => {
    const formData = { id: 123, name: 'The Chase' };
    const onSubmit = jest.fn();
    const isEditing = false;

    const wrapper = shallow(<ProgrammeModal
      formData={formData}
      onSubmit={onSubmit}
      isEditing={isEditing}
    />);
    expect(wrapper).toMatchSnapshot();
  });

});

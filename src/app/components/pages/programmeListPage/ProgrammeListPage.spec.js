import React from 'react';
import { shallow } from 'enzyme';

import { ProgrammeListPage } from './ProgrammeListPage';

describe('ProgrammeListPage', () => {

  test('render the <ProgrammeListPage> component', () => {
    const programmeList = [{ id: 123 }, { id: 456 }];
    const openProgrammeModal = jest.fn();
    const isModalOpen = false;

    const wrapper = shallow(<ProgrammeListPage
      programmeList={programmeList}
      openProgrammeModal={openProgrammeModal}
      isModalOpen={isModalOpen}
    />);
    expect(wrapper).toMatchSnapshot();
  });

});

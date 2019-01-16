import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from './Modal';

describe('Modal', () => {

  test('render the <Modal> component', () => {
    const children = <div>Hello World</div>;
    const closeModal = jest.fn();
    const isModalOpen = false;

    const wrapper = shallow(<Modal closeModal={closeModal} isModalOpen={isModalOpen}>{children}</Modal>);
    expect(wrapper).toMatchSnapshot();
  });

});
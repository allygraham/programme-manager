import React from 'react';
import { shallow } from 'enzyme';

import { blankForm } from '../../../utils';
import { Form } from './Form';

describe('Form', () => {

  test('render the <Form> component', () => {
    const formData = { id: parseInt(blankForm.id), name: blankForm.name, shortDescription: blankForm.shortDescription, active: blankForm.active };
    const onSubmit = jest.fn();
    const isEditing = false;

    const wrapper = shallow(<Form formData={formData} onSubmit={onSubmit} isEditing={isEditing}/>);
    expect(wrapper).toMatchSnapshot();
  });

});
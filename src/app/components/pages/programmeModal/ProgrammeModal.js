import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { Modal } from '../../views/modal';
import { Form } from '../../views/form';
import { constants } from '../../../constants';

const Title = styled('h2')`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProgrammeModal = ({ onSubmit, formData, isEditing }) => (
  <Modal>
    <Title>{isEditing ? constants.modalTitles.edit : constants.modalTitles.add }</Title>
    <Form
      onSubmit={onSubmit}
      formData={formData}
      isEditing={isEditing}
    />
  </Modal>
);

ProgrammeModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

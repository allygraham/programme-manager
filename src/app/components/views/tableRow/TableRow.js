import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Row = styled('tr')`
  background-color: ${props => props.active ? '#FFF' : '#D5D5D5'};
  cursor: pointer;
  z-index: 1;
`;

const RemoveButton = styled('td')`
  cursor: pointer;
  transition: color 300ms ease-in-out;
  z-index: 5;

  &:hover {
    color: #B00020;
  }
`;

export const TableRow = ({ programme, handleProgrammeRemove, handleProgrammeEdit }) => (
  <Row
    active={programme.active}
  >
    <td onClick={() => handleProgrammeEdit(programme.id)}>{programme.id}</td>
    <td onClick={() => handleProgrammeEdit(programme.id)}>{programme.name}</td>
    <td onClick={() => handleProgrammeEdit(programme.id)}>{programme.shortDescription}</td>
    <td onClick={() => handleProgrammeEdit(programme.id)}>{programme.active ? 'Active' : 'Inactive'}</td>
    <RemoveButton
      className="has-text-centered"
      onClick={() => handleProgrammeRemove(programme.id)}
    >
      <i className="fa fa-close"/>
    </RemoveButton>
  </Row>
);

TableRow.propTypes = {
  programme: PropTypes.object.isRequired,
  handleProgrammeRemove: PropTypes.func.isRequired,
  handleProgrammeEdit: PropTypes.func.isRequired,
};
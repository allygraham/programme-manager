import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { constants } from '../../../constants';

const ClickableTableHead = styled('th')`
  cursor: pointer;
  min-width: 5rem;
  transition: color 300ms ease-in-out;

  &:hover {
    color: #3273DC;
  }
`;

const SortIcon = styled('i')`
  margin-left: 0.5rem;
`;

export const TableHead = ({ sortBy, sortCriteria }) => (
  <tr>
    <ClickableTableHead
      onClick={() => sortBy('id')}
      active={sortCriteria === 'id'}
    >
      {constants.tableTitles.id}
      {sortCriteria === 'id' && <SortIcon className="fa fa-chevron-down"/>}
    </ClickableTableHead>
    <ClickableTableHead
      onClick={() => sortBy('name')}
      active={sortCriteria === 'name'}
    >
      {constants.tableTitles.name}
      {sortCriteria === 'name' && <SortIcon className="fa fa-chevron-down"/>}
    </ClickableTableHead>
    <th>{constants.tableTitles.description}</th>
    <th>{constants.tableTitles.status}</th>
    <th>{constants.tableTitles.remove}</th>
  </tr>
);

TableHead.propTypes = {
  sortBy: PropTypes.func.isRequired,
  sortCriteria: PropTypes.string.isRequired,
};

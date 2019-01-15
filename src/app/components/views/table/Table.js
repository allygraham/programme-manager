import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { TableHead } from '../tableHead';

const StyledTable = styled('table')`
  width: 100%;
`;

export const Table = ({ children }) => (
  <StyledTable
    className="table"
  >
    <thead>
      <TableHead />
    </thead>
    <tbody>
      {children}
    </tbody>
  </StyledTable>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

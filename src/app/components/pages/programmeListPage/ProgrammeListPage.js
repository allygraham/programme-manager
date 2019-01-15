import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { constants } from '../../../constants';
import { Table } from '../../views/table';
import { TableRow } from '../../views/tableRow';
import { Search } from '../../views/search';
import { ProgrammeModal } from '../../pages/programmeModal';

const Title = styled('h2')`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const Notification = styled('article')`
  margin: 1rem 0;
`;

export const ProgrammeListPage = ({
  programmeList,
  openProgrammeModal,
}) => (
  <section className="section">
    <div className="container programme-list-page">
      <div className="columns">
        <div className="column is-8">
          <Title>{constants.titles.programmeList}</Title>
        </div>
        <div className="column is-4">
          <Search />
        </div>
      </div>
      <ButtonContainer>
        <button
          className="button is-primary"
          onClick={openProgrammeModal}
        >
          <span className="icon">
            <i className="fa fa-plus"></i>
          </span>
          <span>{constants.buttons.addProgramme}</span>
        </button>
      </ButtonContainer>
      {programmeList.length > 0 ?
        <Table>
          {programmeList.map(
            (programme, index) => 
              <TableRow
                programme={programme}
                key={index}
              />
          )}
        </Table> :
        <Notification className="message is-warning">
          <div className="message-body">
            There are no results for your search
          </div>
        </Notification>
      }
      <ProgrammeModal/>
    </div>
  </section>
);

ProgrammeListPage.propTypes = {
  programmeList: PropTypes.array.isRequired,
  openProgrammeModal: PropTypes.func.isRequired,
};

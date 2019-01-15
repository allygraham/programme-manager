import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

import { constants } from '~/constants';

const Title = styled('h1')`
  color: #FFF;
`;

const LinkText = styled('span')`
  margin-left: 1rem;
`;

export const Header = () => (
  <nav className="header navbar is-link">
    <div className="navbar-brand">
      <Link to={constants.routes.index}>
        <Title className="navbar-item is-size-5">
          {constants.titles.app}
        </Title>
      </Link>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-start">
        <Link to={constants.routes.programmeList} className="navbar-item">
          <i className="fa fa-list"/>
          <LinkText>{constants.titles.programmeList}</LinkText>
        </Link>
      </div>
    </div>
  </nav>
);

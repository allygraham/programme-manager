import React from 'react';
import PropTypes from 'prop-types';
import { constants } from '~/constants';
import styled from 'react-emotion';

const Article = styled('article')`
  margin: 1rem;

  @media screen and (min-width: 768px) {
    margin: 4rem;
  }
`;

export const HomePage = ({ resetApplicationState }) => (
  <div className="homepage">
    <Article className="message is-primary">
      <div className="message-header">
        <p>Welcome!</p>
      </div>
      <div className="message-body">
        <p>
          This is a simple programme manager web application built in React. Click on the Programme List option
          above to go to list page.
        </p>
        <hr/>
        <p>
          <em>
            NOTE: Application data is persisted to local storage, you can use this button to reset the application
            to initial state and retrieve the original list of programmes:
          </em>
        </p>
        <br/>
        <p>
          <button
            className="button is-danger"
            onClick={resetApplicationState}
          >
            {constants.buttons.reset}
          </button>
        </p>
      </div>
    </Article>
  </div>
);

HomePage.propTypes = {
  resetApplicationState: PropTypes.func.isRequired
};

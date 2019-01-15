import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'react-emotion';

import { history } from '~/store';
import { constants } from '~/constants';
import { Header } from '~/components/views/header';
import { Footer } from '~/components/views/footer';
import { HomePage } from '~/components/pages/homePage';
import { ProgrammeListPage } from '~/components/pages/programmeListPage';

const AppContainer = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppPage = styled('div')`
  flex-grow: 1;
`;

export const App = hot(module)(() => (
  <ConnectedRouter history={history}>
    <AppContainer>
      <Header/>
      <AppPage>
        <Switch>
          <Route exact path={constants.routes.index} component={HomePage}/>
          <Route exact path={constants.routes.programmeList} component={ProgrammeListPage}/>
          <Redirect to={constants.routes.index}/>
        </Switch>
      </AppPage>
      <Footer/>
    </AppContainer>
  </ConnectedRouter>
));

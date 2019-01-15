import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { debounce } from 'lodash';

import { constants } from '~/constants';
import { rootReducer } from '~/reducers';
import { effects } from '~/effects';

const LOCAL_STORAGE_WRITE_DELAY = 50;

function serialiseState() {
  window.localStorage.setItem(constants.localStorageKey, JSON.stringify(store.getState()));
}

function deserialiseState() {
  return window.localStorage.getItem(constants.localStorageKey)
    ? JSON.parse(window.localStorage.getItem(constants.localStorageKey))
    : {};
}

const history = createHashHistory();
const effectsMiddleware = createEpicMiddleware();

const store = createStore(
  connectRouter(history)(rootReducer),
  deserialiseState(),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      effectsMiddleware
    )
  )
);

effectsMiddleware.run(effects);

store.subscribe(debounce(serialiseState, LOCAL_STORAGE_WRITE_DELAY));

export { history, store };

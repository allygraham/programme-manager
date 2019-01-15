import { ofType } from 'redux-observable';
import { map, filter } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import { getProgrammeData } from '../actions/ProgrammeActions';

export const homePageLoadEffect = (action$) => action$
  .pipe(
    ofType('@@router/LOCATION_CHANGE'),
    map((action) => action.payload.location.pathname),
    filter((url) => /home/.test(url)),
    map(() => getProgrammeData())
  );

export const resetStateEffect = (action$) => action$
  .pipe(
    ofType('RESET_TO_INITIAL_STATE'),
    map(() => getProgrammeData())
  );

export const homePageEffects = combineEpics(
  homePageLoadEffect,
  resetStateEffect,
);
  
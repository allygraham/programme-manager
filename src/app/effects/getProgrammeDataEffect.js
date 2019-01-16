import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';

import { storeProgrammeData } from '../actions/ProgrammeActions';

export const getProgrammeDataEffect = (action$) => action$
  .pipe(
    ofType('GET_PROGRAMME_DATA'),
    mergeMap(() => 
      ajax.getJSON('/misc/programmes.json').pipe(
        map(response => storeProgrammeData(response))
      )
    )
  );

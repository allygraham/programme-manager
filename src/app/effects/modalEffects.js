import { ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { editProgramme, storeNewProgramme, openProgrammeModal, closeProgrammeModal } from '../actions/ProgrammeActions';
import { selectIsProgrammeBeingEdited } from '../selectors/simpleSelectors';

export const onCompleteModalForm = (action$, state$) => action$
  .pipe(
    ofType('COMPLETE_MODAL_FORM'),
    map((action) => action.payload),
    switchMap((form) => {
      const isEditing = selectIsProgrammeBeingEdited(state$.value);

      return of(
        isEditing ? editProgramme(form) : storeNewProgramme(form),
        closeProgrammeModal()
      );
    })
  );

export const openModalOnEditEffect = (action$) => action$
  .pipe(
    ofType('STORE_EDIT_PROGRAMME_ID'),
    map(() => openProgrammeModal())
  );

export const modalEffects = combineEpics(
  onCompleteModalForm,
  openModalOnEditEffect,
);
  
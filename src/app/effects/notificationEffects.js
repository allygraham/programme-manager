
import { ofType, combineEpics } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import toastr from 'toastr';

export const resetStateNotificationEffect = (action$) => action$
  .pipe(
    ofType('RESET_TO_INITIAL_STATE'),
    tap(() => toastr.success('Application data has been reset!')),
    ignoreElements()
  );

export const storeNewProgrammeNotificationEffect = (action$) => action$
  .pipe(
    ofType('STORE_NEW_PROGRAMME'),
    tap(() => toastr.success('Programme successfully added to list!')),
    ignoreElements()
  );

export const editProgrammeNotificationEffect = (action$) => action$
  .pipe(
    ofType('EDIT_PROGRAMME'),
    tap(() => toastr.success('Programme successfully updated!')),
    ignoreElements()
  );

export const removeProgrammeNotificationEffect = (action$) => action$
  .pipe(
    ofType('REMOVE_PROGRAMME'),
    tap(() => toastr.success('Programme successfully removed!')),
    ignoreElements()
  );

export const notificationEffects = combineEpics(
  resetStateNotificationEffect,
  storeNewProgrammeNotificationEffect,
  editProgrammeNotificationEffect,
  removeProgrammeNotificationEffect,
);
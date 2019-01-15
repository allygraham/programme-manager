import { ofType, combineEpics } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import { toast } from 'bulma-toast';

export const resetStateNotificationEffect = (action$) => action$
  .pipe(
    ofType('RESET_TO_INITIAL_STATE'),
    tap(() => toast({
      message: 'Application data has been reset!',
      type: 'is-success',
      dismissable: true,
      duration: 2000,
    })),
    ignoreElements()
  );

export const storeNewProgrammeNotificationEffect = (action$) => action$
  .pipe(
    ofType('STORE_NEW_PROGRAMME'),
    tap(() => toast({
      message: 'Programme successfully added to list!',
      type: 'is-success',
      dismissable: true,
      duration: 2000,
    })),
    ignoreElements()
  );

export const editProgrammeNotificationEffect = (action$) => action$
  .pipe(
    ofType('EDIT_PROGRAMME'),
    tap(() => toast({
      message: 'Programme successfully updated!',
      type: 'is-success',
      dismissable: true,
      duration: 2000,
    })),
    ignoreElements()
  );

export const removeProgrammeNotificationEffect = (action$) => action$
  .pipe(
    ofType('REMOVE_PROGRAMME'),
    tap(() => toast({
      message: 'Programme successfully removed!',
      type: 'is-success',
      dismissable: true,
      duration: 2000,
    })),
    ignoreElements()
  );

export const notificationEffects = combineEpics(
  resetStateNotificationEffect,
  storeNewProgrammeNotificationEffect,
  editProgrammeNotificationEffect,
  removeProgrammeNotificationEffect,
);
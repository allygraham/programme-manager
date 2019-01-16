import { TestScheduler } from 'rxjs/testing';

jest.mock('toastr', () => ({ error: jest.fn(), success: jest.fn() }));
import toastr from 'toastr';

import {
  resetStateNotificationEffect,
  storeNewProgrammeNotificationEffect,
  editProgrammeNotificationEffect,
  removeProgrammeNotificationEffect
} from './notificationEffects';

let scheduler;

describe('effects', () => {

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
    toastr.error.mockReset();
    toastr.success.mockReset();
  });

  test('resetStateNotificationEffect', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const action$ = cold('-a', {
        a: { type: 'RESET_TO_INITIAL_STATE' }
      });

      const output$ = resetStateNotificationEffect(action$);
      expect(toastr.success).not.toHaveBeenCalled();

      expectObservable(output$).toBe('--');
      flush();

      expect(toastr.success).toHaveBeenCalledWith('Application data has been reset!');
    });
  });

  test('storeNewProgrammeNotificationEffect', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const action$ = cold('-a', {
        a: { type: 'STORE_NEW_PROGRAMME' }
      });

      const output$ = storeNewProgrammeNotificationEffect(action$);
      expect(toastr.success).not.toHaveBeenCalled();

      expectObservable(output$).toBe('--');
      flush();

      expect(toastr.success).toHaveBeenCalledWith('Programme successfully added to list!');
    });
  });

  test('editProgrammeNotificationEffect', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const action$ = cold('-a', {
        a: { type: 'EDIT_PROGRAMME' }
      });

      const output$ = editProgrammeNotificationEffect(action$);
      expect(toastr.success).not.toHaveBeenCalled();

      expectObservable(output$).toBe('--');
      flush();

      expect(toastr.success).toHaveBeenCalledWith('Programme successfully updated!');
    });
  });

  test('removeProgrammeNotificationEffect', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const action$ = cold('-a', {
        a: { type: 'REMOVE_PROGRAMME' }
      });

      const output$ = removeProgrammeNotificationEffect(action$);
      expect(toastr.success).not.toHaveBeenCalled();

      expectObservable(output$).toBe('--');
      flush();

      expect(toastr.success).toHaveBeenCalledWith('Programme successfully removed!');
    });
  });

});
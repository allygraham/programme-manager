import { combineEpics } from 'redux-observable';

import { homePageEffects } from './homePageEffects';
import { getProgrammeDataEffect } from './getProgrammeDataEffect';
import { modalEffects } from './modalEffects';
import { notificationEffects } from './notificationEffects';

export const effects = combineEpics(
  homePageEffects,
  getProgrammeDataEffect,
  modalEffects,
  notificationEffects,
);

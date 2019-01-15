import { createSelector } from 'reselect';
import { sortByName, blankForm, sortById } from '../utils';

const getState = (state) => state.programmes;

export const selectSearchValue = createSelector(
  [getState],
  (state) => state.searchValue
);

export const selectSortCriteria = createSelector(
  [getState],
  (state) => state.sortBy
);

export const selectProgrammeList = createSelector(
  [getState],
  (state) => state.list
);

export const selectFilteredAndSortedProgrammeList = createSelector(
  [selectProgrammeList, selectSearchValue, selectSortCriteria],
  (list, search, sortBy) => list
    .filter(programme => search.length > 0 ? programme.name.includes(search) : programme.name)
    .sort((a, b) => sortBy === 'id' ?  sortById(a.id, b.id) : sortByName(a.name.toLowerCase(), b.name.toLowerCase()))
);

export const selectModalStatus = createSelector(
  [getState],
  (state) => state.isModalOpen
);

export const selectIsProgrammeBeingEdited = createSelector(
  [getState],
  (state) => state.editProgramme ? true : false
);

export const selectEditedProgrammeId = createSelector(
  [getState],
  (state) => state.editProgramme
);

export const selectFormData = createSelector(
  [selectProgrammeList, selectIsProgrammeBeingEdited, selectEditedProgrammeId],
  (list, editing, editId) => editing ?
    list.filter((programme) => programme.id === editId)[0] :
    blankForm
);

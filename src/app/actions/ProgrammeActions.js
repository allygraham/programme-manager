export const GET_PROGRAMME_DATA = 'GET_PROGRAMME_DATA';
export const STORE_PROGRAMME_DATA = 'STORE_PROGRAMME_DATA';
export const STORE_NEW_PROGRAMME = 'STORE_NEW_PROGRAMME';
export const REMOVE_PROGRAMME = 'REMOVE_PROGRAMME';
export const EDIT_PROGRAMME = 'EDIT_PROGRAMME';
export const STORE_SEARCH_VALUE = 'STORE_SEARCH_VALUE';
export const CLEAR_SEARCH_VALUE = 'CLEAR_SEARCH_VALUE';
export const OPEN_PROGRAMME_MODAL = 'OPEN_PROGRAMME_MODAL';
export const CLOSE_PROGRAMME_MODAL = 'CLOSE_PROGRAMME_MODAL';
export const STORE_SORT_BY = 'STORE_SORT_BY';
export const COMPLETE_MODAL_FORM = 'COMPLETE_MODAL_FORM';
export const STORE_EDIT_PROGRAMME_ID = 'STORE_EDIT_PROGRAMME_ID';
export const RESET_TO_INITIAL_STATE = 'RESET_TO_INITIAL_STATE';

export const getProgrammeData = () => ({
  type: GET_PROGRAMME_DATA,
});

export const storeProgrammeData = data => ({
  type: STORE_PROGRAMME_DATA,
  payload: data,
});

export const storeNewProgramme = data => ({
  type: STORE_NEW_PROGRAMME,
  payload: data,
});

export const removeProgramme = data => ({
  type: REMOVE_PROGRAMME,
  payload: data,
});

export const editProgramme = data => ({
  type: EDIT_PROGRAMME,
  payload: data,
});

export const storeSearchValue = data => ({
  type: STORE_SEARCH_VALUE,
  payload: data,
});

export const clearSearchValue = () => ({
  type: CLEAR_SEARCH_VALUE,
});

export const openProgrammeModal = () => ({
  type: OPEN_PROGRAMME_MODAL,
});

export const closeProgrammeModal = () => ({
  type: CLOSE_PROGRAMME_MODAL,
});

export const storeSortBy = data => ({
  type: STORE_SORT_BY,
  payload: data,
});

export const completeModalForm = data => ({
  type: COMPLETE_MODAL_FORM,
  payload: data,
});

export const storeEditProgrammeId = data => ({
  type: STORE_EDIT_PROGRAMME_ID,
  payload: data,
});

export const resetToInitialState = data => ({
  type: RESET_TO_INITIAL_STATE,
  payload: data,
});

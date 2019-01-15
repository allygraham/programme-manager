import {
  STORE_PROGRAMME_DATA,
  STORE_NEW_PROGRAMME,
  REMOVE_PROGRAMME,
  EDIT_PROGRAMME,
  STORE_SEARCH_VALUE,
  RESET_TO_INITIAL_STATE,
  OPEN_PROGRAMME_MODAL,
  CLOSE_PROGRAMME_MODAL,
  STORE_SORT_BY,
  STORE_EDIT_PROGRAMME_ID,
} from '../actions/ProgrammeActions';

export const INITIAL_STATE = {
  list: {},
  sortBy: '',
  searchValue: '',
  isModalOpen: false,
  editProgramme: '',
};

export const programmes = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case STORE_PROGRAMME_DATA:
      return {
        ...state,
        list: payload.results
      };
    case REMOVE_PROGRAMME:
      return {
        ...state,
        list: state.list.filter(programme => programme.id !== payload),
      };
    case STORE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload
      };
    case OPEN_PROGRAMME_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_PROGRAMME_MODAL:
      return {
        ...state,
        isModalOpen: false,
        editProgramme: '',
      };
    case STORE_NEW_PROGRAMME:
      return {
        ...state,
        list: [...state.list, payload],
      };
    case EDIT_PROGRAMME:
      return {
        ...state,
        list: state.list.map(
          (programme) => programme.id === payload.id ? payload : programme
        )
      };
    case STORE_SORT_BY:
      return {
        ...state,
        sortBy: payload
      };
    case STORE_EDIT_PROGRAMME_ID:
      return {
        ...state,
        editProgramme: payload
      };
    case RESET_TO_INITIAL_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

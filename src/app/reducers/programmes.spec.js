import { programmes, INITIAL_STATE } from './programmes';

describe('programmes reducer', () => {

  test('return an initial state', () => {
    const state = undefined;
    const action = { type: '' };

    expect(programmes(state, action)).toEqual(INITIAL_STATE);
  });

  test('handle STORE_PROGRAMME_DATA action', () => {
    const state = {};
    const action = { type: 'STORE_PROGRAMME_DATA', payload: { results: 'text field' } };

    expect(programmes(state, action)).toEqual({
      list: 'text field'
    });
  });

  test('handle OPEN_PROGRAMME_MODAL action', () => {
    const state = {};
    const action = { type: 'OPEN_PROGRAMME_MODAL' };

    expect(programmes(state, action)).toEqual({
      isModalOpen: true
    });
  });

  test('handle CLOSE_PROGRAMME_MODAL action', () => {
    const state = {};
    const action = { type: 'CLOSE_PROGRAMME_MODAL' };

    expect(programmes(state, action)).toEqual({
      isModalOpen: false,
      editProgramme: ''
    });
  });

  test('handle STORE_SEARCH_VALUE action', () => {
    const state = {};
    const action = { type: 'STORE_SEARCH_VALUE', payload: 'box' };

    expect(programmes(state, action)).toEqual({
      searchValue: 'box'
    });
  });

  test('handle CLEAR_SEARCH_VALUE action', () => {
    const state = {};
    const action = { type: 'CLEAR_SEARCH_VALUE' };

    expect(programmes(state, action)).toEqual({
      searchValue: ''
    });
  });

  test('handle STORE_SORT_BY action', () => {
    const state = {};
    const action = { type: 'STORE_SORT_BY', payload: 'name' };

    expect(programmes(state, action)).toEqual({
      sortBy: 'name'
    });
  });

  test('handle STORE_EDIT_PROGRAMME_ID action', () => {
    const state = {};
    const action = { type: 'STORE_EDIT_PROGRAMME_ID', payload: '1234' };

    expect(programmes(state, action)).toEqual({
      editProgramme: '1234'
    });
  });

  test('handle RESET_TO_INITIAL_STATE action', () => {
    const state = {};
    const action = { type: 'RESET_TO_INITIAL_STATE' };

    expect(programmes(state, action)).toEqual(INITIAL_STATE);
  });

});
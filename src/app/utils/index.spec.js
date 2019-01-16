import * as utils from './index';

describe('utils', () => {

  test('sortByName', () => {
    expect(utils.sortByName('Away', 'Common')).toEqual(-1);
    expect(utils.sortByName('Soccer', 'Preferred')).toEqual(1);
    expect(utils.sortByName('Exclaimation', 'Exclaimation')).toEqual(0);
  });

  test('sortById', () => {
    expect(utils.sortById(2, 4)).toEqual(-1);
    expect(utils.sortById(2, 1)).toEqual(1);
    expect(utils.sortById(0, 0)).toEqual(0);
  });

});

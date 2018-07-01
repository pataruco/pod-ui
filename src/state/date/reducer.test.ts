import { clearDate, saveDate } from './actions';

import modalReducer, { defaultState } from './reducer';

describe('User reducer', () => {
  const date = {
    date: 'somedate',
    files: [],
  };
  describe('SAVE_DATE', () => {
    it('set save date', () => {
      expect(modalReducer({ ...defaultState }, saveDate(date))).toEqual({
        ...defaultState,
        date: 'somedate',
        files: [],
      });
    });
  });

  describe('CLOSE_MODAL', () => {
    it('set isModalOpento true', () => {
      expect(modalReducer(date, clearDate())).toEqual({
        ...defaultState,
      });
    });
  });
});

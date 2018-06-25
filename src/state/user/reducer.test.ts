import { endDataFetch, startDataFetch } from './actions';

import userReducer, { defaultState } from './reducer';

describe('User reducer', () => {
  describe('START_DATA_FETCH', () => {
    it('set loading state to true', () => {
      expect(
        userReducer({ ...defaultState, loading: false }, startDataFetch()),
      ).toEqual({
        ...defaultState,
        loading: true,
      });
    });
  });

  describe('END_FETCH_DATA', () => {
    it('set loading state to true', () => {
      expect(
        userReducer({ ...defaultState, loading: true }, endDataFetch()),
      ).toEqual({
        ...defaultState,
        loading: false,
      });
    });
  });
});

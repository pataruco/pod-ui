import {
  endDataFetch,
  saveData,
  saveDatesAsEvents,
  startDataFetch,
} from './actions';

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

  describe('SAVE_DATA', () => {
    it('save data', () => {
      const data = {
        updated: 'somedate',
        dates: [
          {
            date: '2018-06-29',
            files: [],
          },
        ],
      };
      expect(userReducer({ ...defaultState }, saveData(data))).toEqual({
        ...defaultState,
        data,
      });
    });
  });

  describe('SAVE_DATES_AS_EVENTS', () => {
    it('save dates events', () => {
      const dates = {
        start: '2018-06-29',
        end: 'eventDate',
        title: 1,
        files: [],
      };
      expect(
        userReducer({ ...defaultState }, saveDatesAsEvents(dates)),
      ).toEqual({
        ...defaultState,
        dates,
      });
    });
  });
});

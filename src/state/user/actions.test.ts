// @ts-nocheck
import { isFSA } from 'flux-standard-action';
import {
  endDataFetch,
  fetchData,
  getDatesAsEvents,
  podData,
  saveData,
  saveDatesAsEvents,
  startDataFetch,
} from './actions';

describe('user actions', () => {
  describe('endDataFetch', () => {
    it('returns a standard action', () => {
      expect(isFSA(endDataFetch())).toBe(true);
    });
  });

  describe('endDataFetch', () => {
    it('returns a standard action', () => {
      expect(isFSA(startDataFetch())).toBe(true);
    });
  });

  describe('saveData', () => {
    it('returns a standard action', () => {
      expect(isFSA(saveData())).toBe(true);
    });
  });

  describe('saveDatesAsEvents', () => {
    it('returns a standard action', () => {
      expect(isFSA(saveDatesAsEvents())).toBe(true);
    });
  });

  describe('fetchData', () => {
    describe('when sucesfully dispatched', () => {
      beforeEach(() => {
        fetch.resetMocks();
      });

      it('fetchs data from manifest.json', async () => {
        const data = {
          updated: 'somedate',
          dates: [],
        };

        fetch.mockResponseOnce(JSON.stringify(data));

        const dispatchSpy = jest.fn();
        await fetchData(dispatchSpy, fetch);

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(podData);
      });

      it('save data in the store and set loading', async () => {
        const data = {
          updated: 'somedate',
          dates: [
            {
              date: '2018-06-29',
              files: [],
            },
          ],
        };

        fetch.mockResponseOnce(JSON.stringify(data));

        const dispatchSpy = jest.fn();
        await fetchData(dispatchSpy, fetch);
        const datesAsEvents = getDatesAsEvents(data);

        expect(dispatchSpy).toHaveBeenCalledTimes(3);
        expect(dispatchSpy).toHaveBeenCalledWith(saveData(data));
        expect(dispatchSpy).toHaveBeenCalledWith(endDataFetch());
        expect(dispatchSpy).toHaveBeenCalledWith(
          saveDatesAsEvents(datesAsEvents),
        );
      });
    });
  });
});

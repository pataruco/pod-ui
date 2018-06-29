// @ts-nocheck
import { isFSA } from 'flux-standard-action';
import {
  endDataFetch,
  fetchData,
  podData,
  saveData,
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
          dates: [],
        };

        fetch.mockResponseOnce(JSON.stringify(data));

        const dispatchSpy = jest.fn();
        await fetchData(dispatchSpy, fetch);

        expect(dispatchSpy).toHaveBeenCalledTimes(2);
        expect(dispatchSpy).toHaveBeenCalledWith(saveData(data));
        expect(dispatchSpy).toHaveBeenCalledWith(endDataFetch());
      });
    });
  });
});

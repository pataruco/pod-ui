import { isFSA } from 'flux-standard-action';
import { endDataFetch, saveData, startDataFetch } from './actions';

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
});

import { isFSA } from 'flux-standard-action';
import { endDataFetch, startDataFetch } from './actions';

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
});

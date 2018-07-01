// @ts-nocheck
import { isFSA } from 'flux-standard-action';
import { clearDate, saveDate } from './actions';

describe('date actions', () => {
  describe('saveDate', () => {
    it('returns a standard action', () => {
      expect(isFSA(saveDate())).toBe(true);
    });
  });

  describe('clearDate', () => {
    it('returns a standard action', () => {
      expect(isFSA(clearDate())).toBe(true);
    });
  });
});

import { closeModal, openModal } from './actions';

import modalReducer, { defaultState } from './reducer';

describe('User reducer', () => {
  describe('OPEN_MODAL', () => {
    it('set isModalOpento true', () => {
      expect(
        modalReducer({ ...defaultState, isModalOpen: false }, openModal()),
      ).toEqual({
        ...defaultState,
        isModalOpen: true,
      });
    });
  });

  describe('CLOSE_MODAL', () => {
    it('set isModalOpento true', () => {
      expect(
        modalReducer({ ...defaultState, isModalOpen: true }, closeModal()),
      ).toEqual({
        ...defaultState,
        isModalOpen: false,
      });
    });
  });
});

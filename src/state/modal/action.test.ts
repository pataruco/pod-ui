// @ts-nocheck
import { isFSA } from 'flux-standard-action';
import { closeModal, openModal, renderModal } from './actions';

describe('modal actions', () => {
  describe('openModal', () => {
    it('returns a standard action', () => {
      expect(isFSA(openModal())).toBe(true);
    });
  });

  describe('closeModal', () => {
    it('returns a standard action', () => {
      expect(isFSA(closeModal())).toBe(true);
    });
  });

  describe('renderModal', () => {
    describe('when sucessfully dispatched', () => {
      it('sets isModalOpen state to be true', () => {
        const dispatchSpy = jest.fn();

        renderModal(dispatchSpy);

        expect(dispatchSpy).toHaveBeenCalledTimes(1);
        // expect(dispatchSpy).toHaveBeenCalledWith(openModal());
      });
    });
  });
});

import { handleActions } from 'redux-actions';
import { CLOSE_MODAL, OPEN_MODAL } from './action-types';

export const defaultState = {
  isModalOpen: false,
};

export default handleActions(
  {
    [CLOSE_MODAL]: state => ({
      ...state,
      isModalOpen: false,
    }),
    [OPEN_MODAL]: state => ({
      ...state,
      isModalOpen: true,
    }),
  },
  defaultState,
);

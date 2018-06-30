// @ts-ignore
import { dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { CLOSE_MODAL, OPEN_MODAL } from './action-types';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);

export const renderModal = (dispatchFn = dispatch) => {
  return dispatchFn(openModal);
};

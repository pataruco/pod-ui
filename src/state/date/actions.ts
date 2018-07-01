// @ts-ignore
import { dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { CLEAR_DATE, SAVE_DATE } from './action-types';

export const saveDate = createAction(SAVE_DATE);
export const clearDate = createAction(CLEAR_DATE);

export const storeDate = (dispatchFn = dispatch, _, event) => {
  return dispatchFn(saveDate(event));
};

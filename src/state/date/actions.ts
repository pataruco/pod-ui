// @ts-ignore
import { dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { CLEAR_DATE, SAVE_DATE } from './action-types';

export const saveDate = createAction(SAVE_DATE);
export const clearDate = createAction(CLEAR_DATE);

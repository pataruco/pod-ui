import { handleActions } from 'redux-actions';
import { CLEAR_DATE, SAVE_DATE } from './action-types';

export const defaultState = {
  date: undefined,
  files: undefined,
};

export default handleActions(
  {
    [SAVE_DATE]: (state, action) => ({
      ...state,
      date: action.payload.date,
      files: action.payload.files,
    }),
    [CLEAR_DATE]: state => ({
      ...state,
      date: undefined,
      files: undefined,
    }),
  },
  defaultState,
);

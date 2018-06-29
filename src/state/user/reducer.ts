import { handleActions } from 'redux-actions';
import {
  END_DATA_FETCH,
  SAVE_DATA,
  SAVE_DATES_AS_EVENTS,
  START_DATA_FETCH,
} from './action-types';

export const defaultState = {
  loading: false,
};

export default handleActions(
  {
    [SAVE_DATES_AS_EVENTS]: (state, action) => ({
      ...state,
      dates: action.payload,
    }),
    [SAVE_DATA]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [START_DATA_FETCH]: state => ({
      ...state,
      loading: true,
    }),
    [END_DATA_FETCH]: state => ({
      ...state,
      loading: false,
    }),
  },
  defaultState,
);

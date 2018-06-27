import { handleActions } from 'redux-actions';
import { END_DATA_FETCH, SAVE_DATA, START_DATA_FETCH } from './action-types';

export const defaultState = {
  loading: false,
};

export default handleActions(
  {
    [SAVE_DATA]: (state, action) => ({
      ...state,
      loading: true,
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

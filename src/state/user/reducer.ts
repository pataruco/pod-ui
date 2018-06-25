import { handleActions } from 'redux-actions';
import { END_DATA_FETCH, START_DATA_FETCH } from './action-types';

export const defaultState = {
  loading: false,
};

export default handleActions(
  {
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

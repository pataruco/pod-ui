import { createAction } from 'redux-actions';

import { END_DATA_FETCH, START_DATA_FETCH } from './action-types';

export const endDataFetch = createAction(END_DATA_FETCH);
export const startDataFetch = createAction(START_DATA_FETCH);

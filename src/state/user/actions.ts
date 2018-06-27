import { createAction } from 'redux-actions';
import 'whatwg-fetch';
import { END_DATA_FETCH, START_DATA_FETCH } from './action-types';

export const endDataFetch = createAction(END_DATA_FETCH);
export const startDataFetch = createAction(START_DATA_FETCH);
const podData =
  'https://peter-of-the-day.s3.amazonaws.com/production/manifest/manifest.json';

export const fetchData = async () => {
  // console.log('fetchData');
  try {
    const request = await fetch(podData);
    const response = await request.json();
  } catch (error) {
    throw new Error(error);
  }
};

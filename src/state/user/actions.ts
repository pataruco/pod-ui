import { createAction } from 'redux-actions';
import 'whatwg-fetch';
import { END_DATA_FETCH, SAVE_DATA, START_DATA_FETCH } from './action-types';

export const endDataFetch = createAction(END_DATA_FETCH);
export const startDataFetch = createAction(START_DATA_FETCH);
export const saveData = createAction(SAVE_DATA);

const podData =
  'https://peter-of-the-day.s3.amazonaws.com/production/manifest/manifest.json';

export const fetchData = async (dispatchFn = dispatch, _, fetchFn = fetch) => {
  try {
    const request = await fetch(podData);
    const data = await request.json();
    // console.log(data);

    // dispatch(saveData(data));
  } catch (error) {
    throw new Error(error);
  }
};

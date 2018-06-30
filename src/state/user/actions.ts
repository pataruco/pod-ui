// @ts-ignore
import moment from 'moment';
import { dispatch } from 'redux';
import { createAction } from 'redux-actions';
import 'whatwg-fetch';
import {
  END_DATA_FETCH,
  SAVE_DATA,
  SAVE_DATES_AS_EVENTS,
  SET_DATA_LOADED,
  START_DATA_FETCH,
} from './action-types';

export const endDataFetch = createAction(END_DATA_FETCH);
export const startDataFetch = createAction(START_DATA_FETCH);
export const saveData = createAction(SAVE_DATA);
export const saveDatesAsEvents = createAction(SAVE_DATES_AS_EVENTS);
export const setDataLoaded = createAction(SET_DATA_LOADED);

export const podData =
  'https://peter-of-the-day.s3.amazonaws.com/production/manifest/manifest.json';

export const getDatesAsEvents = data => {
  return data.dates.map(date => {
    const eventDate = moment(date.date, 'YYYY-MM-DD');
    return {
      start: eventDate,
      end: eventDate,
      title: `${date.files.length}`,
    };
  });
};

export const fetchData = async (
  dispatchFn = dispatch,
  _,
  fetchFn = window.fetch,
) => {
  try {
    const data = await fetchFn(podData).then(response => response.json());
    const datesAsEvents = getDatesAsEvents(data);
    dispatchFn(saveDatesAsEvents(datesAsEvents));
    dispatchFn(saveData(data));
    dispatchFn(endDataFetch());
    return dispatchFn(setDataLoaded());
  } catch (error) {
    // tslint:disable-next-line no-console
    console.error(error);
    return dispatchFn(endDataFetch());
  }
};

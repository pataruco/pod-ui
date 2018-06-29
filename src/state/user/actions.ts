// @ts-ignore
import moment from 'moment';
import { dispatch } from 'redux';
import { createAction } from 'redux-actions';
import 'whatwg-fetch';
import {
  END_DATA_FETCH,
  SAVE_DATA,
  SAVE_DATES_AS_EVENTS,
  START_DATA_FETCH,
} from './action-types';

export const endDataFetch = createAction(END_DATA_FETCH);
export const startDataFetch = createAction(START_DATA_FETCH);
export const saveData = createAction(SAVE_DATA);
export const saveDatesAsEvents = createAction(SAVE_DATES_AS_EVENTS);

export const podData =
  'https://peter-of-the-day.s3.amazonaws.com/production/manifest/manifest.json';

export const getDatesAsEvents = data => {
  return data.dates.map(date => {
    const eventDate = moment(date.date);
    return {
      start: eventDate,
      end: eventDate,
      title: `${date.files.length}`,
      files: date.files,
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

    return dispatchFn(endDataFetch());
  } catch (error) {
    // tslint:disable-next-line no-console
    console.error(error);
    return dispatchFn(endDataFetch());
  }
};

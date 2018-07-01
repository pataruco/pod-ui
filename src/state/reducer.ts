import { combineReducers } from 'redux';
import date from './date/reducer';
import modal from './modal/reducer';
import user from './user/reducer';

export default combineReducers({ date, modal, user });

// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import data from './user/reducer';

export default combineReducers({
  data,
});

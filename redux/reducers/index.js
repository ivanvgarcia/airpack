import { combineReducers, createStore } from 'redux';
import airpackReducer from './airpackReducer';
import alert from './alert';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  airpackReducer,
  alert
});

export default rootReducer;

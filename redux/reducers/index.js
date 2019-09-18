import { combineReducers, createStore } from 'redux';
import airpackReducer from './airpackReducer';
import alert from './alert';

const rootReducer = combineReducers({
  alert,
  airpackReducer
});

export default rootReducer;

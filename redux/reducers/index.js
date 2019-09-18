import { combineReducers, createStore } from 'redux';
import airpackReducer from './airpackReducer';

const rootReducer = combineReducers({
  airpackReducer
});

export default rootReducer;

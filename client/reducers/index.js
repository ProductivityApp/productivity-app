import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
import filterReducers from './filterReducers';
// require("babel-core/register");
// require("babel-polyfill");

const reducers = combineReducers({
  tasks: taskReducers,
  filters: filterReducers
});

export default reducers;
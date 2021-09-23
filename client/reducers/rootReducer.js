import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
import filterReducers from './filterReducers';

const rootReducer = combineReducers({
  tasks: taskReducers,
  filters: filterReducers
});

export default rootReducer;
import * as types from '../constants/filterTypes';

export const filterNameActionCreator = (filter,taskList,current_input) => ({
    type: types.BY_NAME,
    payload: {filter,taskList,current_input}
  });
  export const liveFilterNameActionCreator = (filter,taskList,current_input) => ({
    type: types.BY_NAME_LIVE,
    payload: {filter,taskList,current_input}
  });
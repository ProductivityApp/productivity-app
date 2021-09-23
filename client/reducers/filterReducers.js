/* eslint-disable */
import * as types from '../constants/filterTypes';

const initialState = {
  name_filter:false,
  filterList: [],
  current_input:'',
};

export default function filterReducers(state = initialState, action) {
  let filterList;

  switch (action.type) {
//***************************************************************************************    
    case types.BY_NAME: {
      console.log("data in filterReducer",!state.name_filter,action.payload.current_input,action.payload.taskList);
      const name_filter = !state.name_filter
      const current_input = action.payload.current_input;
      const filterList = action.payload.taskList.slice();
      console.log("data",name_filter,current_input,filterList);
      return {
        name_filter,
        filterList,
        current_input
      };
    }
//***************************************************************************************
case types.BY_NAME_LIVE: {
    const name_filter = state.name_filter;
    const current_input = action.payload.current_input;
    const list_to_filter = action.payload.taskList;
    let filterList = [];
    if(name_filter&&current_input!==''){
        filterList = list_to_filter.filter((task)=>{
           if(task.taskName.includes(current_input)) return task;
        }); 
    } else{
      filterList = list_to_filter.slice();
    }
    return {
      ...state,
      filterList,
      current_input
    };
  }
  
//***************************************************************************************

    
default: {
    return state;
  }
//***************************************************************************************    
  }
}
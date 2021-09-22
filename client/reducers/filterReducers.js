/* eslint-disable */
import * as types from '../constants/filterTypes';

const initialState = {
  name_filter:false,
  filterList: [],
  current_input:'',
};

export default function taskReducers(state = initialState, action) {
  let filterList;

  switch (action.type) {
//***************************************************************************************    
    case types.BY_NAME: {
      const name_filter = !state.name_filter;
      const current_input = action.payload.current_input;
      const list_to_filter = action.payload.taskList;
      let filterList = [];
      if(name_filter){
          filterList = list_to_filter.filter((task)=>{
              task.taskName.includes(current_input);
          }); 
      }
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
    if(name_filter){
        console.log("filtering if it's checked")
        console.log("list_to_filter is:",list_to_filter)
        filterList = list_to_filter.filter((task)=>{
            console.log("inside filter",task.taskName,"current_input",current_input)
           if(task.taskName.includes(current_input)) return task;
        }); 
        console.log("filter list is now:",filterList)
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

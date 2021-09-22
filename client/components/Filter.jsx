import React from 'react';
import '../stylesheets/styles.css';
import * as filters from '../actions/filters';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addFilter: (filterType,taskList) => {
      return dispatch(filters.filterNameActionCreator(filterType,taskList));
    },
  });
  const mapStateToProps = state => ({
    taskList: state.tasks.taskList,
  });

const Filter = (props) => {
   const handleChange = (e) =>{
      console.log(e.target.value); 
      props.addFilter(e.target.value,props.taskList);
   }
    return(
        <div>
    <input type="checkbox" onChange={handleChange} id="string-filter" name="string-filter" value="NAME_FILTER" />
    <label htmlFor="string-filter" aria-label="Add new task...">Filter By Task Name</label>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
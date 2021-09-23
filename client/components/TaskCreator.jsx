/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import '../stylesheets/styles.css';
import { addTask } from '../actions/actions';
import * as filters from '../actions/filters';
import Filter from './Filter';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addFilter: (filterType,taskList,currentInput) => {
    return dispatch(filters.filterNameActionCreator(filterType,taskList,currentInput))
  },
  liveFilterName: (filterType,taskList,currentInput) => {
    return dispatch(filters.liveFilterNameActionCreator(filterType,taskList,currentInput));
  }
});

const mapStateToProps = state => ({
  taskList: state.tasks.taskList,
});

const TaskCreator = (props) => {
  
  const handleCheck = (e) =>{
  props.addFilter(e,props.taskList,document.getElementById('newTask').value)
  }
  const handleInput = () =>{
    props.liveFilterName("BY_NAME_LIVE",props.taskList,document.getElementById('newTask').value)
  }
  return(
    <div>
      <h3>Create New Tasks</h3>
      <div className="input-group mb-3">
        <input type="text" id="newTask" onKeyDown = {handleInput} className="form-control userInput" placeholder="Add new task..." aria-label="Add new task..." aria-describedby="button-addon2"></input>
        <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={() => {
        return props.addTask(props.username, document.getElementById('newTask').value); //took out taskId -JB
      }}>Add Task</button>
      </div>
      <Filter handleCheck={handleCheck} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);

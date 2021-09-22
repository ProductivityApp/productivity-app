/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import '../stylesheets/styles.css';
import { addTask } from '../actions/actions';


const TaskCreator = props =>  {
  const dispatch = useDispatch();
  const { username } = props;
  return(
    <div>
      <h3>Create New Tasks</h3>
      <div className="input-group mb-3">
        <input type="text" id="newTask" className="form-control userInput" placeholder="Add new task..." aria-label="Add new task..." aria-describedby="button-addon2"></input>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {
        return dispatch(addTask(username, document.getElementById('newTask').value)); //took out taskId -JB
      }}>Add Task</button>
      </div>
    </div>
  )
}

export default TaskCreator;

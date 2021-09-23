/* eslint-disable */
import React from 'react';

const Tasks = (props) => {
  const {username, taskList, index} = props;
  return (
    <div>
      {/* when the button is clicked isCompleted should toggle between true/false */}
      Task: {props.taskName}
      <button onClick={()=>{return props.toggleTask(props.index)}}type="button" className="list-group-item list-group-item-action">Mark as Complete</button>
      <button onClick={()=>{return props.deleteTask(username, taskList, index)}}type="button" className="list-group-item list-group-item-action">Delete</button>
    </div>
  )
}

export default Tasks;

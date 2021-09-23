/* eslint-disable */
import React from 'react';

const Tasks = (props) => {
  const {username, taskId, index,isComplete} = props;
  console.log('NEW TASK', props.taskName);
  return (
    <div>
      {/* when the button is clicked isCompleted should toggle between true/false */}
      
      Task: {props.taskName}
      <button onClick={()=>{return props.toggleTask(taskId, index)}}type="button" className="list-group-item list-group-item-action">Mark as Complete</button>
      <button onClick={()=>{return props.deleteTask(username, taskId, index)}}type="button" className="list-group-item list-group-item-action">Delete</button>
    </div>
  )
}

export default Tasks;

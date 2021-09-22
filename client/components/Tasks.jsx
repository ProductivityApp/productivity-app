/* eslint-disable */
import React from 'react';
import '../stylesheets/styles.css';

const Tasks = (props) => {
  // console.log(`task props ${props.taskList}`)
  console.log(props);
  return (
    <div>
      {/* when the button is clicked isCompleted should toggle between true/false */}
      Task: {props.task.taskName}
      <button onClick={()=>{return props.toggleTask(props.index, props.task)}}type="button" className="list-group-item list-group-item-action">Mark as Complete</button>
    </div>
  )
}

export default Tasks;

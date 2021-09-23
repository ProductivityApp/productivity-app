/* eslint-disable */
import React from 'react';

const Tasks = (props) => {
  return (
    <div>
      {/* when the button is clicked isCompleted should toggle between true/false */}
      Task: {props.taskName}
      <button onClick={()=>{return props.toggleTask(props.index, props.taskName)}}type="button" className="list-group-item list-group-item-action">Mark as Complete</button>
    </div>
  )
}

export default Tasks;

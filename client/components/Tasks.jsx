/* eslint-disable */
import React from 'react';

const Tasks = (props) => {
  return (
    <div>
      {/* when the button is clicked isCompleted should toggle between true/false */}
      <button onClick={()=>{return props.toggleTask(props.id)}}type="button" className="list-group-item list-group-item-action">{props.taskName}</button>
    </div>
  )
}

export default Tasks;

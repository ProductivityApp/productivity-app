/* eslint-disable */
import React from 'react';
import Tasks from './Tasks';
import { useSelector } from 'react-redux';

const TaskDisplay = props => {
  const tasks = [];
  const taskList = useSelector( state => state.tasks.taskList);

  for (let id in taskList) {
    tasks.push(<Tasks key={id} id={id} taskName={taskList[id].taskName} toggleTask={props.toggleTask}/>)
  };

  return (
    <div className="list-group">
      {tasks}
    </div>
  )
}

export default TaskDisplay;

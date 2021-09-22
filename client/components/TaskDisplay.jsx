/* eslint-disable */
import React from 'react';
import Tasks from './Tasks';
import { useSelector } from 'react-redux';

const TaskDisplay = props => {
  const tasks = [];
  const taskList = useSelector( state => state.tasks.taskList);

   for (let index of taskList) {
    // console.log(`id in for in loop`, id)
    tasks.push(<Tasks key={index} index={index} task={taskList[index]} toggleTask={props.toggleTask}/>)
  };

  return (
    <div className="list-group">
      {tasks}
    </div>
  )
}

export default TaskDisplay;

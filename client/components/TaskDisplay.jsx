/* eslint-disable */
import React from 'react';
import Tasks from './Tasks'
import '../stylesheets/styles.scss';

const TaskDisplay = props => {
  const tasks = [];
  const taskList = props.taskList;
  
  for (let index in taskList) { // ONLY FOR..IN WORKS HERE -SF 9.22
    // console.log(`id in for in loop`, id)
    tasks.push(<Tasks key={index} username={props.username} index={index} taskName={taskList[index].taskName} toggleTask={props.toggleTask}/>)
  };
  // console.log(tasks);
  //if (taskList.length !== 0) {
    return (
      <div className="list-group">
        {tasks}
      </div>
    )
  //}
}

export default TaskDisplay;

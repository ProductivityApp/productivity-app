/* eslint-disable */
import React from 'react';
import Tasks from './Tasks'
import '../stylesheets/styles.css';

const TaskDisplay = props => {
  const tasks = [];
  const {taskList, username, toggleTask, deleteTask} = props;

  for (let index in taskList) {
    // console.log(`id in for in loop`, id)
    console.log('the task id', taskList[index]);
    console.log('the task nameeees', taskList[index].taskName);
    tasks.push(<Tasks key={index} index={index} taskId={taskList[index]._id} username={username} taskName={taskList[index].taskName} toggleTask={toggleTask} deleteTask={deleteTask}/>)
  };
  // console.log(tasks);
  //if (taskList.length !== 0) {
    return (
      <div className="container overflow-auto">
        <table>
        <thead>
          <tr>
          <th scope="col" className="header">Task</th>
          <th scope="col">Actions</th>
          </tr>
        </thead>
        </table>
        {tasks}
      </div>
    )
  //}
}

export default TaskDisplay;

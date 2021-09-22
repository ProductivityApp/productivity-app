/* eslint-disable */
import React from 'react';
import TaskCreator from '../components/TaskCreator';
import TaskDisplay from '../components/TaskDisplay';

const TaskContainer = props => {
  
  const {username} = props;

  return (
    <div>
      <TaskCreator username={username} />
      <TaskDisplay />
    </div>
  )
}

export default TaskContainer;

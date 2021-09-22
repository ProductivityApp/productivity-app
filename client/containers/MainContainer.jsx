/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import LogIn from '../components/LogIn';
import TaskContainer from './TaskContainer';

const MainContainer = () => {

    const username = useSelector( (state) => state.tasks.username);
    console.log(`username in main container`, username)
    let loggedIn = username ? true : false; 

    if (loggedIn === false) 
      return(
        <div>
          <LogIn />
        </div>
      );
    else 
      return (
        <div>
          <TaskContainer username={username} />
        </div>
      )
}

export default MainContainer;


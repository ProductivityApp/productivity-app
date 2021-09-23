/* eslint-disable */
import React from 'react';
import {useDispatch } from 'react-redux';
import { addUser, verifyUser } from '../actions/actions';
import '../stylesheets/styles.scss';

const LogIn = () => {
  const dispatch = useDispatch();
  
  return (
    <div>
      Username: <input type ="text" id="usernameInput" className="userInput" placeholder='Enter your username'/><br />
      Password: <input type="password" id="passwordInput" className="userInput" placeholder='Enter your password'/><br />

    {/* trigger an action to POST input from username and password to backend*/}
      <button className="btn btn-sm btn-outline-primary" onClick={() => {
          return dispatch(addUser(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value))}} >
          
        Sign up    
      </button>
    
    {/* trigger an action to POST input from username and password to backend */}
      <button className="btn btn-sm btn-outline-secondary" onClick={() => {
          return dispatch(verifyUser(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value))}} >
        Log in
      </button>
      
    </div>
  )
};

export default LogIn;

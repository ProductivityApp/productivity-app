/* eslint-disable */
import axios from 'axios';
// import thunk from 'redux-thunk';
import * as types from '../constants/actionTypes';

export const addTaskActionCreator = (task) => ({
  type: types.ADD_TASK,
  payload: task,
});

export const addUserActionCreator = () => ({
  type: types.ADD_USER,
});

export const verifyUserActionCreator = (username, tasks=null) => ({
  type: types.VERIFY_USER,
  payload: {
    username,
    tasks,
  },
});

//INCOMPLETE 
export const toggleTaskActionCreator = (taskId) => ({
  type: types.TOGGLE_TASK,
  payload: taskId,
});

//THUNKS! 
/*send an http request to backend
after receiving the response, dispatch action to reducer
export the func to be used in the front end
*/

// Add a new user
export const addUser = (username, password) => (dispatch, getState) => {
  axios
    .post('http://localhost:3000/signup/',
      `username=${username}&password=${password}`,
      {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    .then((response) => {
      //do we need a response object?? or can we do an anomyous then func??
      // response received is an empty object {task: {}}
      // if (response.data.hasOwnProperty('errorMessage')) return alert('Error from /signup page, username exists');
      return dispatch(addUserActionCreator());
    })
    // will it ever throw an error in the middleware func if username exists? 
    //or does it throw an error because it didnt complete the middeware func chain? --JB
    .catch((error) => alert('Error from /signup page, username exists'));
};

export const verifyUser = (username, password) => (dispatch, getState) => {
  console.log(username)
  console.log('this is getstate', getState());
  axios
    .post('http://localhost:3000/login',
      `username=${username}&password=${password}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    .then((response) => {
      if (response.data.hasOwnProperty('errorMessage')) return alert('The username/password you\'ve entered is incorrect');
      console.log('WHEN LOGGED IN, WE RECEIVE THIS',  response.data);
      const { username, tasks } = response.data;
      if ( tasks.length === 0) return dispatch(checkUserActionCreator( username));
      else return dispatch(verifyUserActionCreator(username, tasks));
    });
};


// Body needs to match content-type
export const addTask = (username, task) => (dispatch, getState) => {
  console.log('saveTasks username, ', username);
  console.log('saveTasks task action, ', task);

  axios
    .post('http://localhost:3000/addtask',
          `task=${task}&username=${username}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    .then((response) => {
      console.log('response from the saveTasks: ', response);
      return dispatch(addTaskActionCreator(task));
    });
};

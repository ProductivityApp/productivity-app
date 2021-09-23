/* eslint-disable */
import axios from "axios";
// import thunk from 'redux-thunk';
import * as types from "../constants/actionTypes";


export const addTaskActionCreator = (taskAdded) => ({
  type: types.ADD_TASK,
  payload: taskAdded,
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
  payload: taskIndex
});


export const deleteTaskActionCreator = (index) => ({
  type: types.DELETE_TASK,
  payload: index
})

//THUNKS!
/*send an http request to backend
after receiving the response, dispatch action to reducer
export the func to be used in the front end
*/

// Add a new user
export const addUser = (username, password) => (dispatch, getState) => {
  axios
    .post(
      "http://localhost:3000/signup/",
      `username=${username}&password=${password}`,
      {
        method: "POST",
        headers: {
          // Accept: 'application/json',
          "Content-type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      //do we need a response object?? or can we do an anomyous then func??
      // response received is an empty object {task: {}}
      // if (response.data.hasOwnProperty('errorMessage')) return alert('Error from /signup page, username exists');
      return dispatch(addUserActionCreator());
    })
    // will it ever throw an error in the middleware func if username exists?
    //or does it throw an error because it didnt complete the middeware func chain? --JB
    .catch((error) => alert("Error from /signup page, username exists"));
};



export const verifyUser = (username, password) => (dispatch, getState) => {
  console.log(username)
  axios
    .post(
      "http://localhost:3000/login",
      `username=${username}&password=${password}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      if (response.data.hasOwnProperty("errorMessage"))
        return alert("The username/password you've entered is incorrect");
      console.log("WHEN LOGGED IN, WE RECEIVE THIS", response.data);
      const { username, tasks } = response.data;
      if ( tasks.length === 0) return dispatch(verifyUserActionCreator( username));
      else return dispatch(verifyUserActionCreator(username, tasks));
    });
};

// Body needs to match content-type

export const addTask = (username, taskName) => (dispatch, getState) => {
  console.log('saveTasks username, ', username);
  // console.log('saveTasks task action, ', task);
  console.log('this is getState', getState());
  axios
    .post(
      "http://localhost:3000/task/addtask",
      `taskName=${taskName}&username=${username}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      console.log("response from the saveTasks: ", response);
      return dispatch(addTaskActionCreator(response.data.taskAdded));
    });
};

export const deleteTask = (username, taskId, index) => (dispatch, getState) => {
  console.log(taskId);
  console.log(index);
  // console.log('ACTIONS.JS DELETE TASK', username, index, taskList)
  // console.log('getstate in deletetask', getState())
  // const currState = getState();
  // const username = currState.tasks.username;
  // const taskList = currState.tasks.taskList;
  // const taskListCopy = taskList.slice();
  // taskListCopy.splice(index, 1);
  // console.log('THIS IS USERNAME< TL', username, taskListCopy);
  axios.post("http://localhost:3000/task/deletetask", {
    taskId: taskId, 
    username: username, 
    index: index
  })
    .then(() => {
      return dispatch(deleteTaskActionCreator(index));
    });

};

export const toggleTask = (taskIndex, taskObj) => (dispatch, getState) => {
  
  
  axios
    .patch(
      "http://localhost:3000/toggleTask",
      `taskIndex=${taskIndex}&taskObj=${taskObj}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      return dispatch(toggleTaskActionCreator(taskIndex));
    });
};


// `taskList=${taskList}&username=${username}`,
      // // "http://localhost:3000/task/deletetask",
      // // `username=${username}&taskList=${taskList}&index=${index}`,
      // {
      //   headers: {
      //     "Content-type": "application/x-wwww-form-urlencoded",
      //   },
      // }
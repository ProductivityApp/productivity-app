/* eslint-disable */
import React from 'react';

// document.querySelector('toggleButton').addEventListener('click', function() {
//   document.body.classList.toggle('completeCard');



const Tasks = (props) => {
  const changeColor = () => {
    document.getElementById(props.taskId).classList.toggle('completeCard');
  }

  const {username, taskId, index} = props;
  console.log('NEW TASK', props.taskName);
  return (
    <div id= {taskId}>
      {/* when the button is clicked isCompleted should toggle between true/false */}
      <table className="table shadow-sm rounded">
        <tbody>
          <tr>
            <td>{props.taskName}</td>
            <td className="buttons">
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => {
                  changeColor();
                  return props.toggleTask(taskId, index);
                }}
              >Complete</button>
              <button
                onClick={() => {
                  return props.deleteTask(username, taskId, index);
                }}
                type="button"
                className="btn btn-danger btn-sm toggleButton"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tasks;
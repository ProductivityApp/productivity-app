/* eslint-disable */
import React from 'react';

const Tasks = (props) => {
  const {username, taskId, index} = props;
  console.log('NEW TASK', props.taskName);
  return (
    <div>
      {/* when the button is clicked isCompleted should toggle between true/false */}
      <table className="table shadow-sm bg-white rounded">
        <tbody>
          <tr>
            <td>{props.taskName}</td>
            <td className="buttons">
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => {
                  return props.toggleTask(taskId, index);
                }}
              >Complete</button>
              <button
                onClick={() => {
                  return props.deleteTask(username, taskId, index);
                }}
                type="button"
                className="btn btn-danger btn-sm"
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

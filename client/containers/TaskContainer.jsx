/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskCreator from '../components/TaskCreator';
import TaskDisplay from '../components/TaskDisplay';
import * as actions from '../actions/actions';
import '../stylesheets/styles.css';

const mapStateToProps = state => (
  // provide pertinent state here
  // what are the properties of state that this component wants to subscribe to?
  {
    taskList: state.tasks.taskList,
    taskId: state.tasks.taskId
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  //remove taskId below -- JB
  addTask: (username, task) => {
    // console.log(`props`,this.propzs)
    console.log(username)
    // this.onSave(task)
    // return dispatch(actions.addTaskActionCreator(task))
    return dispatch(actions.saveTasks(username, task));
  },
  // onSave: () => {console.log('onSave works on button click')}
  toggleTask: (taskId) => {
    return dispatch(actions.toggleTaskActionCreator(taskId));
  }
});


class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <TaskCreator username={this.props.username} addTask={this.props.addTask}/>
        <TaskDisplay taskList={this.props.taskList} toggleTask={this.props.toggleTask}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);

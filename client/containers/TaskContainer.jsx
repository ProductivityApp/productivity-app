/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskCreator from '../components/TaskCreator';
import TaskDisplay from '../components/TaskDisplay';
import * as actions from '../actions/actions';
import * as filters from '../actions/filters';
import '../stylesheets/styles.css';

const mapStateToProps = state => (
  {
    taskList: state.tasks.taskList,
    taskId: state.tasks.taskId,
    filterList: state.filters.filterList,
    name_filter: state.filters.name_filter
});

const mapDispatchToProps = dispatch => ({
 
  addTask: (username, task) => {
    return dispatch(actions.addTask(username, task));
  },
  toggleTask: (index) => {
    return dispatch(actions.toggleTaskActionCreator(index));
  },
  deleteTask: (username, taskList, index) => {
    return dispatch(actions.deleteTask(username, taskList, index));
  }
});


class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(this.props.name_filter){
    return (
        <div>
        <TaskCreator username={this.props.username} addTask={this.props.addTask}/>
        <TaskDisplay taskList={this.props.filterList} toggleTask={this.props.toggleTask} deleteTask={this.props.deleteTask}/>
      </div>
    )
    } 
    if(!this.props.name_filter){
        return (
            <div>
            <TaskCreator username={this.props.username} addTask={this.props.addTask}/>
            <TaskDisplay username={this.props.username} taskList={this.props.taskList} toggleTask={this.props.toggleTask} deleteTask={this.props.deleteTask}/>
          </div>
    )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);

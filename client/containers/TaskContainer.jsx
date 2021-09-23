/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskCreator from '../components/TaskCreator';
import TaskDisplay from '../components/TaskDisplay';
import * as actions from '../actions/actions';
import * as filters from '../actions/filters';
import '../stylesheets/styles.scss';

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
  toggleTask: (username,taskName,taskIndex) => {
    return dispatch(actions.toggleTaskActionCreator(username, taskName, taskIndex));
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
        <TaskDisplay username={this.props.username} taskList={this.props.filterList} toggleTask={this.props.toggleTask}/>
      </div>
    )
    } 
    if(!this.props.name_filter){
        return (
            <div>
            <TaskCreator username={this.props.username} addTask={this.props.addTask}/>
            <TaskDisplay username={this.props.username} taskList={this.props.taskList} toggleTask={this.props.toggleTask}/>
          </div>
    )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);

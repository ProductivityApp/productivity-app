/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import TaskContainer from './TaskContainer';
import LogOut from '../components/LogOut';
import '../stylesheets/styles.scss';
import * as actions from '../actions/actions';

const mapStateToProps = state => (
  {
    username: state.tasks.username,
  }
);

const mapDispatchToProps = dispatch => (
  {
    addUser: (username, password) => {
      return dispatch(actions.addUser(username, password));
    },
    verifyUser: (username, password) => {
      return dispatch(actions.verifyUser(username,password));
    }
  }
)

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    console.log(`username in main container`,this.props.username)
    let loggedIn = this.props.username ? true : false; 

    if (loggedIn === false) 
      return(
        <div>
          <LogIn addUser={this.props.addUser} verifyUser={this.props.verifyUser} />
        </div>
      );
    else 
      return (
        <div>
          <LogOut />
          <TaskContainer username={this.props.username} />
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


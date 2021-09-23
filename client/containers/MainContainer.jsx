/* eslint-disable */
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import {Route, Router} from 'react-router';
import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import TaskContainer from './TaskContainer';
import LogOut from '../components/LogOut';
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
    },
    oauth: () => dispatch(actions.oauth())
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
          <div>
            <LogIn addUser={this.props.addUser} verifyUser={this.props.verifyUser} />
          </div>

          <div><a href='/github/oauth'>CLICK HERE</a></div>
        </div>
      );
    else 
      return (
        <div>
          {/* <BrowserRouter>
          <Switch >
            <Route exact path='/dashboard'>  */}
         
              <LogOut />
              <TaskContainer username={this.props.username} />
            {/* </Route>
          </Switch>
          </BrowserRouter> */}
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


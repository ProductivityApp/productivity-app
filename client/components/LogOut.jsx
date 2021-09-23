import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser } from './actions/actions';

const dispatch = useDispatch();

const LogOut = props => {
  const { username } = props; 
  dispatch(logOutUser)

}

export default LogOut;
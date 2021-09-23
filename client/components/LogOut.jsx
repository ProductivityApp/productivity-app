import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutUserActionCreator } from '../actions/actions';



const LogOut = () => {
  const dispatch = useDispatch();
  return(
    <div className='logout'>
      <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(logOutUserActionCreator())}>Log Out</button>
    </div>
  )
  

}

export default LogOut;
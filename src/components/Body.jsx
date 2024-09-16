import React from 'react';
// import Services from './Services';
// import Complaints from './Complaints';
// import RequestList from './RequestList';
// import Login from './Login';
import { Link } from 'react-router-dom';


function Body() {
  return (
    <div>
      <Link className='m-5' to='/services'>Services</Link>
      <Link className='m-5' to='/requests'>Requests</Link>
      <Link className='m-5' to='/login'>Login</Link>
    </div>
  )
}

export default Body;
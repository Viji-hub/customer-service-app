import React, {useContext} from 'react';
import { ServiceContext } from '../App';

function User() {
    const {serviceObj} = useContext(ServiceContext);

  return (
    <div><span className='fs-4 fst-italic fw-semibold'>{serviceObj?.loggedInUser?.name}</span>, Welcome to Security Bank...</div>
  )
}

export default User;
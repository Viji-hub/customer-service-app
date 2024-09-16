import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { Request_URL } from '../Config';
import { ServiceContext } from '../App';
import Table from 'react-bootstrap/Table';
import Request from './Request';


function RequestList() {
    const {serviceObj : {requests}, updateServiceObj} = useContext(ServiceContext);

  async function fetchRequests() {
    try {
      const resData = await axios.get(Request_URL);
      if(resData.data) {
        updateServiceObj('requests', resData.data);
      }
    } catch (error) {
      throw new Error('Error on fetching requests data..!!!'); 
    }
  }

  useEffect(() => {
    fetchRequests();
  }, []);


  return (
    <div>
      {
          requests.length && <div className='d-flex justify-content-center my-4 row text-center'>
            <h1 className='text-primary-emphasis my-4'>Requests</h1>
                {
                  requests.map((request, index) => <Request index={index+1} request={request} key={request.id}/>)
                }
        </div>
      }
    </div>
  )
}

export default RequestList;
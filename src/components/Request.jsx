import React from 'react';
import Table from 'react-bootstrap/Table';

function Request({request, index}) {
  return (
    <Table striped bordered className='m-4 w-75'>
      <thead className='fs-6 text-decoration-underline'>
        <tr>
        <th></th>
          <th className='fst-italic text-muted' style={{width: "150px"}}>Name</th><th>Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-muted'>
          <td className='align-content-center fw-semibold' rowSpan={7} style={{width: "100px"}}>Request {index}</td>
          <td className='fst-italic text-muted' style={{width: "150px"}}>Request Id</td>
          <td className='text-wrap'>{request.id}</td>
        </tr>
        <tr>
          <td className='fst-italic text-muted' style={{width: "150px"}}>Request Name</td>
          <td className='text-wrap'>{request.data.name}</td>
        </tr>
        <tr>
          <td className='fst-italic text-muted' style={{width: "150px"}}>Category</td>
          <td className='text-wrap'>{request.category}</td>
        </tr>
        <tr>
          <td className='fst-italic text-muted' style={{width: "150px"}}>Raised Date</td>
          <td className='text-wrap'>{request.raisedDate}</td>
        </tr>
        <tr>
          <td className='fst-italic text-muted' style={{width: "150px"}}>Status</td>
          <td className='text-wrap'>{request.status}</td>
        </tr>
        <tr>
          <td className='fst-italic text-muted' style={{width: "150px"}}>Resolved Date</td>
          <td className='text-wrap'>{request.resolvedDate}</td>
        </tr>
        <tr>
          <td className='fst-italic text-muted' style={{width: "150px"}}>Detail</td>
          <td className='text-wrap'>{JSON.stringify(request.data.data).split(',').join(' ')}</td>
        </tr>
      </tbody>
    </Table>);
}

export default Request;
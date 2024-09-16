import React from 'react';
import Card from 'react-bootstrap/Card';

export function TitleCard({title}) {
  return (
    <Card className='card m-4 text-capitalize ' style={{ width: '20rem' }}>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        </Card.Body>
    </Card>
  )
}

function ServiceCard({name, description}) {
  return (
    <Card className='card m-4 border-0' style={{ width: '300px' }}>
      <Card.Body className='text-start'>
        <Card.Title className='text-capitalize pb-3'>{name}</Card.Title>
        <Card.Text className='fs-6 text-muted'>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard;
import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ServiceContext } from '../App';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  const {serviceObj, updateServiceObj} = useContext(ServiceContext);

  function handleLogout() {
    updateServiceObj('isUserLoggedIn', false);
    updateServiceObj('updateServiceObj', null);
    localStorage.setItem('token', 'invalid');
  }

  return (
    <header className='position-fixed shadow start-0 top-0 w-100 z-3'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='px-4'>
        <LinkContainer to={'/'}>
          <Navbar.Brand>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hJtmyNnmJbuLgolck-fCFZqcdpeIVobQrA&usqp=CAU" alt="Bank-Logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav className="fw-semibold navbar-nav text-center">
            <LinkContainer to={'/'}>
              <Nav.Link className='px-3'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className='px-3'>Services</Nav.Link> 
            </LinkContainer>
            <LinkContainer to="/requests">
              <Nav.Link className='px-3'>Requests</Nav.Link> 
            </LinkContainer>
            <LinkContainer to={'/contact'}>
              <Nav.Link className='px-3'>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/locate'}>
              <Nav.Link className='px-3'>Locate Us</Nav.Link>
            </LinkContainer>
            {
              serviceObj.isUserLoggedIn ? <LinkContainer to={'/'}> 
                  <Nav.Link className='text-white bg-primary border mx-3 p-2 px-3 rounded' onClick={handleLogout}>Log Out</Nav.Link>
              </LinkContainer> : <LinkContainer to={'/login'}>
                  <Nav.Link className='text-white bg-primary border mx-3 p-2 px-3 rounded'>Log In</Nav.Link>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
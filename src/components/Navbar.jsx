import React from 'react';import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';


function Navbare() {
  return (
    <div >
      <Navbar bg="light" expand="lg">
      <Container className='navbar'>
        <Navbar.Brand href="#home">Cummentor</Navbar.Brand>
        <Nav className="me-auto nav-link">
            <Nav.Link className='navbar-item btn' href="#coffee" id='coffee' variant='danger'>Buy Me A Coffee</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbare
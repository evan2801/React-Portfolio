import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function CustomNavBar() {
  return (
    <Navbar bg={'dark'} variant={'dark'}>
      <Navbar.Brand>Pupster</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Link as={NavLink} to='/'>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to='/discover'>
            Discover
          </Nav.Link>
          <Nav.Link as={NavLink} to='/search'>
            Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default CustomNavBar;



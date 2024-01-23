import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="#home" className='mr-4'>Crypto Begins</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Link to={"/batman"} className='text-decoration-none'>
                <Nav.Link href="#developer">Developer</Nav.Link>
            </Link>
            <Link to={"/news"} className='text-decoration-none'>
                <Nav.Link href="#news">News</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

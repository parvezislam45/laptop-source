import React from 'react';
import {Container ,Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Al-Quran</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
      <Nav.Link as = {Link} to ="/review">Review</Nav.Link>
      <Nav.Link as = {Link} to = "/deshboard">DeshBoard</Nav.Link> 
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Blogs</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
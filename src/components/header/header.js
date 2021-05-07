import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './header.css';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <LinkContainer to="/activities">
        <Nav.Link>Activities</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/mylist">
        <Nav.Link>My List</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
);
export default Header;

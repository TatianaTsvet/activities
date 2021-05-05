import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'; 
import {LinkContainer} from 'react-router-bootstrap'

import './header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/activities">
                <Navbar.Brand>Activities</Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/mylist">
                <Navbar.Brand>My List</Navbar.Brand>
            </LinkContainer>     
        </Navbar>
    )
}
export default Header;


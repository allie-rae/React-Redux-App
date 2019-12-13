import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Nav1 = () => {
    return <Navbar variant="dark" bg="dark">
        <Navbar.Brand href="#">Cat Facts</Navbar.Brand>
        <Nav>
            <Nav.Link href="#">Generate Fact</Nav.Link>
        </Nav>
    </Navbar>
}

export default Nav1;
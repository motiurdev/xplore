import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navbarStyle = {
        fontWeight: "bold",
        color: "#0a81fa"
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/home" className="logo text-white">Xplore</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="navlink" to="/home" activeStyle={navbarStyle}>Home</NavLink>
                        <NavLink className="navlink" to="/about" activeStyle={navbarStyle}>About</NavLink>
                        <NavLink className="navlink" to="/services" activeStyle={navbarStyle}>Courses</NavLink>
                        <NavLink className="navlink" to="/contact" activeStyle={navbarStyle}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
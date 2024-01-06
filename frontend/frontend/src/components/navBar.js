import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"

const MainNavBar = () => {
    return (
        <div className="MainNavBar">
            <div className="d-flex justify-content-center">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container className="nav-container justify-content-center">
                        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav align-items-baselin'>
                            <Nav className="mr-auto justify-content-center">
                                <NavLink to="/" className="NavLinkStyle">Home</NavLink>
                                <NavLink to="/new" className="NavLinkStyle">New Trip</NavLink>
                                <NavLink to="/session" className="NavLinkStyle">User Name</NavLink>
                                <NavLink to="/user" className="NavLinkStyle">Log Out</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default MainNavBar
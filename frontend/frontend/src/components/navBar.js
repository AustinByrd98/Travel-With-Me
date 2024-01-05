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
                    <Container className="nav-container">
                        <Navbar.Toggle aria-controls='basic-navbar-nav justify-content-center' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className="mr-auto justify-content-center">
                                <NavLink href="#Home">Home</NavLink>
                                <NavLink href="#NewTrip">New Trip</NavLink>
                                <NavLink href="#Login">Log In/Out</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default MainNavBar
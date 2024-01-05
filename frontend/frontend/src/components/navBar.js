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
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/new">New Trip</NavLink>
                                <NavLink href="/session">User Name</NavLink>
                                <NavLink href="/user">Log Out</NavLink>                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default MainNavBar
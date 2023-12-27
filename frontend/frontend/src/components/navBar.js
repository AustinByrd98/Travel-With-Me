import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
// import { Nav.Linknk } from "react-router-dom"

const MainNavBar = () => {
    return (
        <div class="d-flex justify-content-center">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="mr-auto justify-content-center">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#NewTrip">New Trip</Nav.Link>
                    <Nav.Link href="#Login">Log In/Out</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default MainNavBar
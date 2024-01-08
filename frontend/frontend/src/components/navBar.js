import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const MainNavBar = (props) => {
    return (
        <div className="MainNavBar">
            <div className="d-flex justify-content-center">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container className="nav-container justify-content-center">
                        <Navbar.Toggle aria-controls='basic-navbar-nav justify-content-center' />
                        <Navbar.Collapse id='basic-navbar-nav align-items-baselin'>
                            <Nav className="mr-auto justify-content-center">
                                <NavLink to="/" className="NavLinkStyle">Home</NavLink>
                                {props.user ? (
                                  <>
                                    <NavLink to="/new" className="NavLinkStyle">New Trip</NavLink>
                                    <h3>{props.user.username}</h3>
                                    <Logout setUser={props.setUser} />
                                  </>
                                ) : (
                                <>
                                  <NavLink to="/login" className="NavLinkStyle">Login</NavLink>
                                  <NavLink to="/register" className="NavLinkStyle">Register</NavLink>
                                </>
                              )}                              
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default MainNavBar

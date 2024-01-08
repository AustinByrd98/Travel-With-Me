import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"

const Footer = (props) => {
  const id = props.id
  
  return (
    <div className="RouterBar">
    <div class="d-flex justify-content-center">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="nav-container justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="mr-auto justify-content-center">            
             <NavLink to="/" className="NavLinkStyle">Home</NavLink>
              <NavLink to= {`/edit/${id}`} className="NavLinkStyle" >Edit</NavLink>
              <button onClick={props.removeTrip}  className="DeleteRouteStyle" >DELETE</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </div>
  );
};

export default Footer;

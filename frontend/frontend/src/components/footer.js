import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"

const Footer = (props) => {
  const id = props.id
  return (
    <div class="d-flex justify-content-center">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="mr-auto justify-content-center">
              <NavLink to= {`/edit/:${id}`}>Edit</NavLink>
              {/* <NavLink to="#delete">Delete</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;

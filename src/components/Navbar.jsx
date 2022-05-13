import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import resume from "../assets/resume.pdf";
const NavbarComponent = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Mustafa Binalhag</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About me</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#hater">Hater</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#cosmos">Cosmos</NavDropdown.Item>
              <NavDropdown.Item href="#nined">9D tic tac toe</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact-info">Contact</Nav.Link>
            <Nav.Link download href={resume}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

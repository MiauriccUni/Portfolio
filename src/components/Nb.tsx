import React from "react";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo/log.svg";
import linkedinlogo from "../assets/logo/linkedin_logo.svg";
import githublogo from "../assets/logo/github.svg";

function Nb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Inicio</Nav.Link>
            <Nav.Link href="#Skills">Habilidades</Nav.Link>
            <Nav.Link href="#Proyect">Proyectos</Nav.Link>
          </Nav>
          <span className="me">
            <div className="social">
              <a href="#">
                <img src={githublogo} alt="github" />
              </a>
              <a href="#">
                <img src={linkedinlogo} alt="Linkedin" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nb;

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo/log.svg";
import linkedinlogo from "../assets/logo/linkedin_logo.svg";
import githublogo from "../assets/logo/github.svg";

export function Nb() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand id="brand" href="#home">
          <img src={logo} alt="logo" className="logoimg" />
        </Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#proyects">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <span className="me">
            <div className="social">
              <a href="https://github.com/MiauriccUni">
                <img src={githublogo} alt="github" className="sociallogo" />
              </a>
              <a href="https://www.linkedin.com/in/ricardo-valverde-1704b9259/">
                <img src={linkedinlogo} alt="Linkedin" className="sociallogo" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

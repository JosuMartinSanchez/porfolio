import React from "react";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function Navbar() {
  return (
    <div id="navbar-container">
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-1">Sobre mí</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-2">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="disabled">Proyectos</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;

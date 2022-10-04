import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div id="navbar-container">
      <div id="link-container">
        <a className="navLink" href="#about-container">
          Sobre mí
        </a>

        <a className="navLink" href="#skill-container">
          Skills
        </a>

        <a className="navLink" href="#contacts-container">
          Contacto
        </a>

        <a className="navLink" href="#project-general-container">
          Proyectos
        </a>
      </div>
    </div>
  );
}

export default Navbar;

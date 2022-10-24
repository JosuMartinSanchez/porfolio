import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
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

      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#about-container">
              Sobre mí
            </a>
          </li>
          <li>
            <a className="menu__item" href="#skill-container">
              Skills
            </a>
          </li>
          <li>
            <a className="menu__item" href="#contacts-container">
              Contacto
            </a>
          </li>
          <li>
            <a className="menu__item" href="#project-general-container">
              Proyectos
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import "./skills.css";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

function Skills() {
  return (
    <div id="skill-container">
      <h2>Skills</h2>
      <h3>Hard Skills</h3>
      <div id="logo-container">
        <img src="../icons/html5.png" alt="Html5" />
        <img src="../icons/css-3.png" alt="Css" />
        <img src="../icons/js.png" alt="JavaScript" />
        <img src="../icons/mongoDB.png" alt="MongoDB" />
        <img src="../icons/nodejs.png" alt="NodeJS" />
        <img src="../icons/expressJS.png" alt="ExpressJS" />
        <img src="../icons/React.png" alt="React" />
        <img src="../icons/handlebars.jpg" alt="Handlebars" />
        <img src="../icons/bootstrap.png" alt="Bootstrap" />
        <img src="../icons/Tailwind.png" alt="Tailwind" />
        <img src="../icons/Git.png" alt="Git" />
        <img src="../icons/github.png" alt="GitHub" />
        <img src="../icons/heroku.png" alt="heroku" />
        <img src="../icons/netlify.png" alt="netlify" />
        <img src="../icons/RestApi.png" alt="RestApi" />
      </div>
      <h3>Soft Skills</h3>
      <div id="sk-container">
        <div>
          <ul>
            <li>Resiliencia</li>
            <li>Empatia</li>
            <li>Comunicación</li>
            <li>Trabajo en equipo</li>
            <li>Resolución de problemas</li>
          </ul>
        </div>
        <ul>
          <li>Creatividad</li>
          <li>Gestión del tiempo</li>
          <li>Responsabilidad</li>
          <li>Adaptabilidad</li>
          <li>Pensamiento crítico</li>
        </ul>
      </div>
      <div id="arrow-container">
        <IconContext.Provider
          value={{ color: "#0250A3", size: "5em", className: "arrow" }}
        >
          <a href="#contacts-container">
            <IoIosArrowDown />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Skills;

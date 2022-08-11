import React from "react";
import "./about.css";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about-container">
      <h2>Sobre mí</h2>
      <div id="text-container-about">
        <p id="about-text">
          Nacido en 1995. Graduado en Administración y Dirección de Empresas y
          Web Developer Full Stack. Me defino como una persona resiliente,
          perseverante, con capacidad para trabajar en equipo, con alta
          capacidad de planificación y organización. Con energía, entusiasmo y
          la ilusión de aprender nuevas competencias para poder ir creciendo y
          logrando objetivos en mi carrera personal y profesional.
        </p>

        <IconContext.Provider value={{ color: "#0250A3", size: "5em" }}>
          <a href="#skill-container">
            <IoIosArrowDown />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default About;

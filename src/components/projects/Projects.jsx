import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowUp } from "react-icons/io";

import Card from "react-bootstrap/Card";
import "./projects.css";
function Projects() {
  return (
    <div id="project-container">
      <div>
        <Card style={{ width: "21rem" }}>
          <Card.Img variant="top" src="../../../IH-Fighters.png" />
          <Card.Body>
            <Card.Title>IH Fighters</Card.Title>
            <Card.Text>
              Juego arcade en el que el jugador tiene que eliminar verticalmente
              disparando proyectiles a aeronaves que aparecen desde la parte
              superior de la pantalla.
            </Card.Text>
            <button href="https://josumartinsanchez.github.io/IronHack-IHFighter/">
              Ver Demo
            </button>
            <a href="https://github.com/JosuMartinSanchez/IronHack-IHFighter">
              Repositorio
            </a>
          </Card.Body>
        </Card>
      </div>
      <div id="arrow-container">
        <IconContext.Provider value={{ color: "#0250A3", size: "5em" }}>
          <a href="#skill-container">
            <IoIosArrowUp />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Projects;

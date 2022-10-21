import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowUp } from "react-icons/io";

import Card from "react-bootstrap/Card";
import "./projects.css";
function Projects() {
  return (
    <div id="project-general-container">
      <h2>Proyectos</h2>
      <div id="project-container">
        <div className="card-container">
          <Card style={{}} className="card">
            <Card.Img variant="top" src="../../../IH-Fighters.png" />
            <Card.Body>
              <Card.Title>IH Fighters</Card.Title>
              <Card.Text>
                Juego arcade en el que el jugador tiene que eliminar
                verticalmente disparando proyectiles a aeronaves que aparecen
                desde la parte superior de la pantalla.
              </Card.Text>
              <div className="demo-container">
                <a
                  className="demo-button"
                  href="https://josumartinsanchez.github.io/IronHack-IHFighter/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver Demo
                </a>

                <a
                  className="repo-link"
                  href="https://github.com/JosuMartinSanchez/IronHack-IHFighter"
                  rel="noreferrer"
                  target="_blank"
                >
                  Repositorio
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card style={{}} className="card">
            <Card.Img variant="top" src="../../../C-Wall-Tracker.png" />
            <Card.Body>
              <Card.Title>CWall Tracker</Card.Title>
              <Card.Text>
                Aplicación básica en la que verás una interfaz donde podrás
                comprobar tus criptodivisas favoritas en tiempo real y calcular
                tus beneficios según el precio actual.
              </Card.Text>
              <div className="demo-container">
                <a
                  className="demo-button"
                  rel="noreferrer"
                  target="_blank"
                  href="https://cwall-tracker.herokuapp.com/"
                >
                  Ver App
                </a>

                <a
                  className="repo-link"
                  href="https://github.com/pelayotrives/cwall-tracker"
                  rel="noreferrer"
                  target="_blank"
                >
                  Repositorio
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card style={{}} className="card">
            <Card.Img variant="top" src="../../../Dr.forest.png" />
            <Card.Body>
              <Card.Title>Dr.Forest</Card.Title>
              <Card.Text>
                Aplicación web en la que te puedes registrarte como cliente para
                pedir presupuestos de los servicios forestales ofertados o como
                profesional para ofrecer los servicios.
              </Card.Text>
              <div className="demo-container">
                <a
                  className="demo-button"
                  href="https://drforest.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver App
                </a>

                <div id="a-container">
                  <a
                    className="repo-link"
                    href="https://github.com/JosuMartinSanchez/dr.forest-server"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Backend
                  </a>
                  <a
                    className="repo-link"
                    href="https://github.com/pol1987/dr.forest-client"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Frontend
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div id="arrow-container">
        <IconContext.Provider value={{ color: "#0250A3", size: "5em" }}>
          <a href="#home-container" rel="noreferrer">
            <IoIosArrowUp />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Projects;

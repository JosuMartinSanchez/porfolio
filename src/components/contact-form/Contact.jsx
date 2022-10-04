import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  return (
    <div id="contacts-container">
      <h2>Contacto:</h2>
      <p>
        Mediante este formulario podrás ponerte en contacto conmigo si te
        interesa mi perfil:
      </p>
      <fieldset>
        <label>
          Nombre y apellido:
          <input type="text" placeholder="Nombre" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Email" />
        </label>
        <label>
          Empresa:
          <input type="text" placeholder="Empresa" />
        </label>
        <label>
          Observaciones:
          <textarea placeholder="Escriba aquí sus observaciones"></textarea>
        </label>
      </fieldset>
      <div></div>

      <div id="arrow-container">
        <IconContext.Provider value={{ color: "#0250A3", size: "5em" }}>
          <a href="#skill-container">
            <IoIosArrowDown />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Contact;

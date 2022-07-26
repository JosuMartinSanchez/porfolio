import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoMdPin } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useState, useRef } from "react";

function Contact() {
  const [formEnv, setFormEnv] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const refForm = useRef();
  console.log(refForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombre("");
    setEmail("");
    setEmpresa("");
    setObservaciones("");

    emailjs
      .sendForm(
        "service_oyu2z9x",
        "template_3z7rm9q",
        refForm.current,
        "WL779bKqAn6v_DXuq"
      )
      .then(
        (result) => {
          console.log("El mensaje se ha enviado correctamente.");
          return setFormEnv(true);
        },
        (error) => {
          console.log(
            "Se ha producido un error al enviar su mensaje. Intentelo de nuevo."
          );
        }
      );
    console.log(formEnv);
  };
  return (
    <div id="contacts-container">
      <h2>Contacto:</h2>
      <p id="pIntro">
        Mediante este formulario podrás ponerte en contacto conmigo si te
        interesa mi perfil:
      </p>
      <div id="formOther-container">
        <div id="form-container">
          <form ref={refForm} onSubmit={handleSubmit}>
            <fieldset>
              <label>
                Nombre y apellido:
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label>
                Empresa:
                <input
                  type="text"
                  placeholder="Empresa"
                  name="empresa"
                  value={empresa}
                  onChange={(event) => setEmpresa(event.target.value)}
                  required
                />
              </label>
              <label>
                Observaciones:
                <textarea
                  placeholder="Escriba aquí sus observaciones"
                  name="observaciones"
                  value={observaciones}
                  onChange={(event) => setObservaciones(event.target.value)}
                ></textarea>
              </label>
            </fieldset>
            {formEnv === true ? (
              <button
                id="btn"
                onClick={() => {
                  const btn = document.querySelector("#btn");
                  const btnText = document.querySelector("#btnText");
                  btn.classList.add("active");
                  btnText.innerHTML = "Gracias por tu tiempo";
                }}
              >
                <p id="btnText">Enviar</p>
                <div class="check-box">
                  <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 50 50">
                    <path
                      id="svgPath"
                      fill="transparent"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>
              </button>
            ) : (
              <button
                id="btn"
                onClick={() => {
                  const btn = document.querySelector("#btn");
                  const btnText = document.querySelector("#btnText");
                  btn.classList.add("active");
                  btnText.innerHTML = "Intentelo de nuevo";
                }}
              >
                <p id="btnText">Enviar</p>
                <div class="check-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path
                      id="svgPath"
                      fill="transparent"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>
              </button>
            )}
          </form>
        </div>
        <div id="otherContact-Container">
          <h3>Información de Contacto</h3>
          <IconContext.Provider
            value={{
              color: "#0250A3",
            }}
          >
            <div className="iconText-container">
              <IoMdPin className="contactIcon" />
              <span className="iconTxt">San Sebastian-Donostia (Spain)</span>
            </div>
            <div className="iconText-container">
              <FaEnvelope className="contactIcon" />
              <span className="iconTxt">josu.martin.sanchez@gmail.com</span>
            </div>
            <div className="iconText-container">
              <RiPhoneFill className="contactIcon" />{" "}
              <span className="iconTxt">(+34) 687192398 </span>
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div id="arrow-container">
        <IconContext.Provider value={{ color: "#0250A3", size: "5em" }}>
          <a href="#project-general-container">
            <IoIosArrowDown />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Contact;

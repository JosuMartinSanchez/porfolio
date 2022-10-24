import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileDownload } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import CV from "../../assets/CVJosuMartín.pdf";
function Home() {
  const { text } = useTypewriter({
    words: [
      " aplicar mis conomientos.",
      " trabajar en equipo.",
      " seguir creciendo.",
      " aprender cosas nuevas.",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div id="home-container">
      <div id="home">
        <img src="../my-photo.jpg" alt="Profile-img" />

        <div id="text-container-home">
          <h1>Josu Martín Sanchez</h1>
          <p
            style={{
              fontWeight: "normal",
            }}
          >
            Soy Josu Martín Sanchez, Junior Full Stack developer y estoy
            buscando la oportunidad para,
            <span style={{ color: "#0250A3", fontWeight: "bold" }}>
              {text}
              <Cursor />
            </span>
          </p>
          <IconContext.Provider
            id="home-icons"
            value={{ color: "#0250A3", size: "4em" }}
          >
            <div id="button-container">
              <a
                href="https://www.linkedin.com/in/josu-mart%C3%ADn-s%C3%A1nchez-3b459a239/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/JosuMartinSanchez"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href={CV}
                download="CV-JosuMartín.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TbFileDownload />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <IconContext.Provider value={{ color: "#0250A3", size: "5em" }}>
        <a href="#about-container">
          <IoIosArrowDown />
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default Home;

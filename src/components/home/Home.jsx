import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileDownload } from "react-icons/tb";
import { IconContext } from "react-icons";
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
    <div id="home">
      <img src="../my-photo.jpg" alt="Profile-img" />

      <div id="text-container">
        <h1>Josu Martín Sanchez</h1>
        <p
          style={{
            fontWeight: "normal",
          }}
        >
          Soy Josu Martín Sanchez, Junior Full Stack developer y estoy buscando
          la oportunidad para,
          <span style={{ color: "#0250A3", fontWeight: "bold" }}>
            {text}
            <Cursor />
          </span>
        </p>
        <IconContext.Provider value={{ color: "#0250A3", size: "2em" }}>
          <div id="button-container">
            <a href="https://www.linkedin.com/in/josu-mart%C3%ADn-s%C3%A1nchez-3b459a239/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/JosuMartinSanchez">
              <FaGithub />
            </a>
            <a href="../cv.pdf" download>
              <TbFileDownload />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Home;

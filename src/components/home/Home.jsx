import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./home.css";
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
      <img src="../foto carnet.jpg" alt="Profile-img" />
      <div id="text-container">
        <h1>Josu Martín Sanchez</h1>
        <p
          style={{
            fontWeight: "normal",
          }}
        >
          Soy Josu Martín Sanchez, Junior Full Stack developer y estoy buscando
          la oportunidad para,
          <span style={{ color: "blue", fontWeight: "bold" }}>
            {text}
            <Cursor />
          </span>
        </p>
        <div id="button-container">
          <button>Linkedlin</button>
          <button>github</button>
          <button>CV</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

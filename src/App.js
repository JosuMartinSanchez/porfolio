import "./App.css";
import About from "./components/about-me/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact-form/Contact";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;

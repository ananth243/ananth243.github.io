import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import {useState} from "react";
import Skills from "./components/Skills/Skills";

function App() {
  const [state, setState] = useState(false);
  setTimeout(() => {
    setState(true);
  }, 7500);
  return (
    <>
      {!state && <Landing />}
      {state && (
        <>
        <Navbar />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;

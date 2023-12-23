import React from "react";
import Profile from "./Profile";
import { useNavState } from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import useWindowSize from "./util/useWindowSize";
import MobileView from "./MobileView";
import Experience from "./Experience";

function App() {
  const { home, projects, experience } = useNavState();
  const { width } = useWindowSize();
  return (
    <AnimatePresence>
      {home && <Profile />}
      {projects && width >= 1000 && <Projects />}
      {projects && width < 1000 && <MobileView />}
      {experience && <Experience />}
    </AnimatePresence>
  );
}

export default App;

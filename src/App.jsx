import React from "react";
import Profile from "./Profile";
import { useNavState } from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Projects from "./Projects";

function App() {
  const { home, projects } = useNavState();
  return (
    <AnimatePresence>
      {home && <Profile />}
      {projects && <Projects />}
    </AnimatePresence>
  );
}

export default App;

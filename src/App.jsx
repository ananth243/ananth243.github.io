import React from "react";
import Profile from "./Profile";
import { useNavState } from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import NewModal from "./components/Projects";

function App() {
  const { home, work, projects } = useNavState();
  return (
    <AnimatePresence>
      {home && <Profile />}
      {projects && <NewModal />}
    </AnimatePresence>
  );
}

export default App;

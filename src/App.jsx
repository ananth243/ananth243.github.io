import React from "react";
import Profile from "./Profile";
import Work from "./Work";
import Contact from "./Contact";
import Personal from "./Personal";
import { useNavState } from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const { home, work, personal, contact } = useNavState();
  return (
    <AnimatePresence>
      {home && <Profile />}
      {work && <Work />}
      {contact && <Contact />}
      {personal && <Personal />}
    </AnimatePresence>
  );
}

export default App;

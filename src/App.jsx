import React from "react";
import Profile from "./Profile";
import Work from "./Work";
import Personal from "./Personal";
import { useNavState } from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const { home, work, personal } = useNavState();
  return (
    <AnimatePresence>
      {home && <Profile />}
      {work && <Work />}
      {personal && <Personal />}
    </AnimatePresence>
  );
}

export default App;

import React from "react";
import Profile from "./Profile";
import Work from "./Work";
import Contact from "./Contact";
import Personal from "./Personal";
import { useNavState } from "./components/Navbar";

function App() {
  const { home, work, personal, contact } = useNavState();
  return (
    <>
      {home && <Profile />}
      {work && <Work />}
      {contact && <Contact />}
      {personal && <Personal />}
    </>
  );
}

export default App;

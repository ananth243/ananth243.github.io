import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import CustomChakraProvider from "./config/CustomChakraProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomChakraProvider>
      <Navbar>
        <Profile />
      </Navbar>
    </CustomChakraProvider>
  </React.StrictMode>
);

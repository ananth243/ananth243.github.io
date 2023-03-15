import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import CustomChakraProvider from "./config/CustomChakraProvider";
import App from "./App";
import "./assets/styles/projects.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomChakraProvider>
      <Navbar>
        <App />
      </Navbar>
    </CustomChakraProvider>
  </React.StrictMode>
);

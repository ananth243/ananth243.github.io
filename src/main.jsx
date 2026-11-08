import React from "react";
import ReactDOM from "react-dom/client";
import CustomChakraProvider from "./config/CustomChakraProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomChakraProvider>
      <App />
    </CustomChakraProvider>
  </React.StrictMode>
);

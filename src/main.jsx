import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomChakraProvider from "./config/CustomChakraProvider";
import App from "./App";
import './assets/styles/projects.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomChakraProvider>
      <Navbar>
        <RouterProvider router={router} />
      </Navbar>
    </CustomChakraProvider>
  </React.StrictMode>
);

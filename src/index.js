import React from "react";
import ReactDOM from "react-dom/client";
import ".././src/asssets/styles/index.css";
import Dashboard from "./pages/dashboard.jsx";
import './helpers/i18n'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

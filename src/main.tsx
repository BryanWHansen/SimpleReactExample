import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import FetchApp from "./FetchApp";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FetchApp />
  </React.StrictMode>
);

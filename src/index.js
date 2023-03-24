import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./components/Welcome"
import Welcome from "./components/Welcome";
import Hello from "./components/Hello"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <BrowserRouter>
    <Welcome name = 'ohnmar' age = "12">
      <p>I am a programmer</p>
    </Welcome>
    <Hello name = "pone"/>
  </BrowserRouter>,
  document.getElementById("root")
);

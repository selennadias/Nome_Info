import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div id="principal">
      <Header />
      <App />
      <Footer texto="Elenna e Mainara" />
    </div>
  </React.StrictMode>,
  rootElement
);

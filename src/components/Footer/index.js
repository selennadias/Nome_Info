import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer className="py-4 bg-black text-white-50">
      <div className="container text-center">
        <div id="cor">
          <small> {props.texto} </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

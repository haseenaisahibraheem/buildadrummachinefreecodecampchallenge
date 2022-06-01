import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./store";

import "./styles.scss";

const Main = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Store>
      <App />
      <small style={{ textAlign: "center", color: "red", marginLeft: "50%" }}>
        Made by XTruong
      </small>
    </Store>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);

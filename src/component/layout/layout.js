import React from "react";

const Layout = props => {
  return (
    <div id="drum-machine">
      <div id="keypad">{props.keypad}</div>
      <div id="control">{props.control}</div>
    </div>
  );
};

export default Layout;

import React from "react";
import Layout from "./component/layout/layout";
import Control from "./component/UI/control";
import KeyPad from "./component/UI/key-pad";

const App = () => {
  return <Layout keypad={<KeyPad />} control={<Control />} />;
};

export default App;

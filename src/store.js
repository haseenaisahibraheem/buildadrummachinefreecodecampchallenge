import React, { useReducer, createContext } from "react";
import reducer from "./reducer/reducer";
const initialState = {
  name: "",
  volume: "50",
  power: true
};

export const MyContext = createContext(null);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const val = { state, dispatch };
  return <MyContext.Provider value={val}>{children}</MyContext.Provider>;
};
export default Store;

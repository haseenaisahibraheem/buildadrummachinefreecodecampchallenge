import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../store";
import {
  changeVolume,
  changePower,
  addDrum
} from "../../action/drumpad-action";

const Control = props => {
  const { state, dispatch } = useContext(MyContext);
  const [volume, setVolume] = useState(false);

  useEffect(
    () => {
      state.power === false && dispatch(addDrum(""));
    },
    [state.power]
  );

  const show =
    state.power === false ? (
      <p />
    ) : (volume === true) & (state.power === true) ? (
      <p className="volume">Volume: {state.volume}</p>
    ) : (
      <p>{state.name}</p>
    );

  const isDisable = () => {
    return state.power ? false : true;
  };
  return (
    <div className="control">
      <div className="power">
        <p>Power</p>
        <label className="label">
          <input
            type="checkbox"
            className="power-control"
            onClick={() => dispatch(changePower(!state.power))}
          />
          <span className="slider" />
        </label>
      </div>
      <div id="display">{show}</div>
      <div className="volume">
        <p>Volume</p>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={state.volume}
          step="1"
          className="volume-slider"
          onChange={e => dispatch(changeVolume(e.target.value))}
          onMouseEnter={() => setVolume(true)}
          onMouseLeave={() => setVolume(false)}
          disabled={isDisable()}
        />
      </div>
    </div>
  );
};

export default Control;

/*
<div className="bank">
<p>Bank</p>
<label className="label">
  <input type="checkbox" className="bank-control" />
  <span className="slider" />
</label>
</div>
*/

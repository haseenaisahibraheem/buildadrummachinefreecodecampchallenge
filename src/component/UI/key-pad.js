import React, { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "../../store";
import { addDrum } from "../../action/drumpad-action";

const KeyPad = props => {
  const { state, dispatch } = useContext(MyContext);
  const [keyPress, setKeyPress] = useState("Q");

  /* Make componet just render when componentDidUpdate using useRef()
  const initialState = useRef(true);
  useEffect(
    () => {
      initialState.current
        ? (initialState.current = false)
        : document.addEventListener("keydown", () => {
            const sound = document.getElementById(keyPress);
            sound.play();
          });
    },
    [keyPress]
  );
*/
  useEffect(
    () => {
      document.addEventListener("keydown", () => {
        const sound = document.getElementById(keyPress);
        sound.play();
      });
    },
    [keyPress]
  );
  const playSound = (key, name, url) => () => {
    dispatch(addDrum(name));
    setKeyPress(key);
    const sound = document.getElementById(key);
    sound.currentTime = 0;
    sound.play();
    sound.volume = Number(state.volume) * 0.01;
  };
  const getNameSong = song => {
    return song.slice(song.lastIndexOf("/") + 1);
  };
  const drumPad = state.power
    ? Pad.map(x => (
        <div
          className="drum-pad key-on"
          id={getNameSong(x.url)}
          key={x.key}
          onClick={playSound(x.key, x.name, x.url)}
        >
          <audio className="clip" id={x.key} src={x.url} />
          {x.key}
        </div>
      ))
    : Pad.map(x => (
        <div className="drum-pad key-off" id={getNameSong(x.url)} key={x.key}>
          <audio className="clip" id={x.key} src="#" />
          {x.key}
        </div>
      ));

  return <div className="pad">{drumPad}</div>;
};
const Pad = [
  {
    key: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1"
  },
  {
    key: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2"
  },
  {
    key: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater-3"
  },
  {
    key: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4_1"
  },
  {
    key: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Heater-6"
  },
  {
    key: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Dsc_Oh"
  },
  {
    key: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick_n_Hat"
  },
  {
    key: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "RP4_KICH_1"
  },
  {
    key: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "CEV_H2"
  }
];
export default KeyPad;

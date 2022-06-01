import ADD_DRUM_NAME from "./action-type";
const CHANGE_VOLUME = "CHANGE_VOLUME";
const CHANGE_POWER = "CHANGE_POWER";

export const addDrum = name => {
  return {
    type: ADD_DRUM_NAME,
    name
  };
};

export const changeVolume = volume => {
  return {
    type: CHANGE_VOLUME,
    volume
  };
};

export const changePower = power => {
  return {
    type: CHANGE_POWER,
    power
  };
};

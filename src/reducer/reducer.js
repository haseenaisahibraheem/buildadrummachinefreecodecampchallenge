import ADD_DRUM_NAME from "../action/action-type";
const CHANGE_VOLUME = "CHANGE_VOLUME";
const CHANGE_POWER = "CHANGE_POWER";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_DRUM_NAME:
      return {
        ...state,
        name: action.name
      };
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume
      };
    case CHANGE_POWER:
      return {
        ...state,
        power: action.power
      };
    default:
      throw new Error();
  }
};

export default reducer;

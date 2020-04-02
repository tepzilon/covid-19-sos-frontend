import { counterActionTypes } from "./counter.types";

export const initialState = {
  value: 0
}

export const reducer = (state, action) => {
  switch(action.type) {
    case counterActionTypes.INCREASE:
      return {
        ...state,
        value: state.value + action.payload
      }
    case counterActionTypes.DECREASE:
      return {
        ...state,
        value: state.value - action.payload
      }
    default: return state;
  }
}

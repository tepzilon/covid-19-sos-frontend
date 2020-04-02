import { requestsActionTypes } from "./requests.types";
import { inputField } from "../../types";

const sampleData = [
  {
    [inputField.hospitalName]: 'โรงพยาบาล A',
    [inputField.faceShieldDemand]: 1000,
    [inputField.numberOfBed]: 500,
    [inputField.address]: "ระยอง"
  },
  {
    [inputField.hospitalName]: 'โรงพยาบาล B',
    [inputField.faceShieldDemand]: 1000,
    [inputField.numberOfBed]: 300,
    [inputField.address]: "ชลบุรี"
  }
]

export const initialState = {
  data: sampleData,
  filter: ''
};

export const reducer = (state, action) => {
  switch(action.type) {
    case requestsActionTypes.UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      }
    case requestsActionTypes.UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload
      }
  }
}
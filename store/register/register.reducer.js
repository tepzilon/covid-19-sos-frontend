import { inputField } from '../../types/index';
import { registerActionTypes } from './register.types';

export const initialState = {
  [inputField.name]: '',
  [inputField.hospitalName]: '',
  [inputField.faceShieldDemand]: '',
  [inputField.address]: '',
  [inputField.phoneNumber]: '',
  [inputField.hospitalType]: '',
  [inputField.numberOfBed]: '',
  [inputField.notice]: '',
  [inputField.username]: '',
  [inputField.password]: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case registerActionTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    default:
      return state;
  }
};
import { requestsActionTypes } from './requests.types';
import { requestField } from '../../types';

const sampleData = [
  {
    key: 1,
    [requestField.hospitalName]: 'โรงพยาบาล A',
    [requestField.faceShieldDemand]: 1000,
    [requestField.numberOfBed]: 500,
    [requestField.province]: 'ระยอง'
  },
  {
    key: 2,
    [requestField.hospitalName]: 'โรงพยาบาล B',
    [requestField.faceShieldDemand]: 1000,
    [requestField.numberOfBed]: 300,
    [requestField.province]: 'ชลบุรี'
  }
];

export const initialState = {
  data: sampleData,
  filter: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case requestsActionTypes.UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      };
    case requestsActionTypes.UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload
      };
  }
};

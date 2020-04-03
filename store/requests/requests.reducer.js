import { requestsActionTypes } from './requests.types';
import requestsDummy from './requests.dummy';

export const initialState = {
  data: requestsDummy,
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

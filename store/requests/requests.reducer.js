import { requestsActionTypes } from './requests.types';
import { toggleModalShow, updateModalRequestKey } from './requests.utils';

export const initialState = {
  data: [],
  filter: '',
  modal: {
    show: false,
    requestKey: 0,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case requestsActionTypes.UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case requestsActionTypes.UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case requestsActionTypes.TOGGLE_MODAL_SHOW:
      return {
        ...state,
        modal: toggleModalShow(state.modal),
      };
    case requestsActionTypes.UPDATE_MODAL_REQUEST_KEY:
      return {
        ...state,
        modal: updateModalRequestKey(state.modal, action.payload),
      };
  }
};

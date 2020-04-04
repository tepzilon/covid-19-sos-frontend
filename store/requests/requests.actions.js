import { requestsActionTypes } from './requests.types';

export const updateData = (data) => ({
  type: requestsActionTypes.UPDATE_DATA,
  payload: data,
});

export const updateFilter = (filter) => ({
  type: requestsActionTypes.UPDATE_FILTER,
  payload: filter,
});

export const toggleModalShow = () => ({
  type: requestsActionTypes.TOGGLE_MODAL_SHOW,
  payload: null,
});

export const updateModalRequestKey = (key) => ({
  type: requestsActionTypes.UPDATE_MODAL_REQUEST_KEY,
  payload: key,
});

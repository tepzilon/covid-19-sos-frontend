import { requestsActionTypes } from './requests.types';

export const updateFilter = filter => ({
  type: requestsActionTypes.UPDATE_DATA,
  payload: filter
});

export const updateData = data = ({
  type: requestsActionTypes.UPDATE_DATA,
  payload: data
})
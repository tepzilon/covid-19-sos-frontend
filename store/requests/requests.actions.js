import { requestsActionTypes } from './requests.types';

export const updateData = data => ({
  type: requestsActionTypes.UPDATE_DATA,
  payload: data
});

export const updateFilter = filter = ({
  type: requestsActionTypes.UPDATE_FILTER,
  payload: filter
})
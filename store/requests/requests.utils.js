import { requestField } from '../../types/requests';

export const getFilteredRequests = (requests, filter) => {
  return requests.filter(
    request =>
      request[requestField.hospitalName].includes(filter) ||
      request[requestField.address].includes(filter)
  );
};
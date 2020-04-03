import {
  requestField,
  requestStatus,
  requestStatusColours
} from '../types/requests';

const getStatusHTML = status => {
  let color = requestStatusColours.pending;
  switch (status) {
    case requestStatus.recieved:
      color = requestStatusColours.recieved;
      break;
    case requestStatus.shipping:
      color = requestStatusColours.shipping;
      break;
  }
  return <span style={{ color }}>{status}</span>;
};

export const getStatusPriority = status => {
  switch (status) {
    case requestStatus.recieved:
      return 0;
    case requestStatus.shipping:
      return 1;
    default:
      return 2;
  }
};

export const getInjectedHTMLRequests = requests =>
  requests.map(request => ({
    ...request,
    status: getStatusHTML(request.status)
  }));

export const getCompareString = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const getCompareNumber = (a, b) => a - b;

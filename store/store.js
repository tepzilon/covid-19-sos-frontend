import { createContext, useReducer, useContext } from 'react';

import * as counterReducer from './counter/counter.reducer';
import * as registerReducer from './register/register.reducer';
import * as requestsReducer from './requests/requests.reducer';

const StoreContext = createContext({});

const getReducerObject = ({ reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export const StoreProvider = ({ children }) => {
  const store = {
    counter: getReducerObject(counterReducer),
    register: getReducerObject(registerReducer),
    requests: getReducerObject(requestsReducer)
  };
  // const [counterState, counterDispatch] = useReducer(counterReducer.reducer, counterReducer.initialState);
  // const [registerState, registerDispatch] = useReducer(counterReducer.reducer, counterReducer.initialState);
  // const [requestsState, requestsDispatch] = useReducer(counterReducer.reducer, counterReducer.initialState);
  
  // const store = {
  //   counter: {state: counterState, dispatch: counterDispatch},
  //   register: {state: registerState, dispatch: registerDispatch},
  //   requests: {state: requestsState, dispatch: requestsDispatch}
  // };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const StoreConnect = (propsMapper) => Component =>
  function StoreConsumer() {
    const store = useContext(StoreContext);
    return <Component {...propsMapper(store)} />;
  };

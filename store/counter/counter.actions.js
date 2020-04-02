import { counterActionTypes } from './counter.types';

export const increase = (x) => ({
  type: counterActionTypes.INCREASE,
  payload: x
});

export const decrease = (x) => ({
  type: counterActionTypes.DECREASE,
  payload: x
});

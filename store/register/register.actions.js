import { registerActionTypes } from './register.types';

export const updateField = (field, value) => ({
  type: registerActionTypes.UPDATE_FIELD,
  payload: { field, value },
});

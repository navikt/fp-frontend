import { createSelector } from 'reselect';

const getFormState = (state: any) => state.form;
const getRegisteredFields = (formName: any) => createSelector(
  [getFormState],
  (formState = {}) => (formState[formName] ? formState[formName].registeredFields : {}),
);

export default getRegisteredFields;

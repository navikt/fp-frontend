import { createSelector } from 'reselect';

const getFormState = (state: any): any => state.form;
const getRegisteredFields = (formName: string): any => createSelector(
  [getFormState],
  (formState = {}) => (formState[formName] ? formState[formName].registeredFields : {}),
);

export default getRegisteredFields;

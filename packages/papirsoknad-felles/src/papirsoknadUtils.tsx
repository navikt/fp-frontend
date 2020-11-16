import { createSelector } from 'reselect';

const getFormState = (state: any) => state.form;
const getRegisteredFields = (formName: string) => createSelector(
  [getFormState],
  (formState = {}) => (formState[formName] ? formState[formName].registeredFields : {}),
);

export default getRegisteredFields;

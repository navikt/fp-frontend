import { createSelector } from 'reselect';
import { getFormSyncErrors } from 'redux-form';

const getFormState = (state) => state.form;
const getBehandlingFormRegisteredFields = (formName: string) => createSelector(
  [getFormState], (formState = {}) => (formState[formName] ? formState[formName].registeredFields : {}),
);

const traverseAndFindValue = (error: { [x: string]: string }, idParts: any[]): any => idParts.reduce((o, i) => (o[i] ? o[i] : []), error);

const hasBehandlingFormErrorsOfType = (formName: string, errorMsg: string) => createSelector(
  [getBehandlingFormRegisteredFields(formName),
    getFormSyncErrors(formName)],
  (registeredFields = {}, errors = {}) => {
    const shownFieldIds = Object.keys(registeredFields).filter((rf) => registeredFields[rf].count > 0);

    return shownFieldIds.some((id) => {
      const idParts = id.split(/[.|\[|\]]/).filter((parts) => parts && parts !== ''); /* eslint-disable-line no-useless-escape */
      return Object.keys(errors)
        .some((errorKey) => {
          const value = traverseAndFindValue({ [errorKey]: errors[errorKey] }, idParts);
          return value === errorMsg;
        });
    });
  },
);

export default hasBehandlingFormErrorsOfType;

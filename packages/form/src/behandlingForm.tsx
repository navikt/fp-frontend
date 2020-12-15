import React, { ComponentType } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  formValueSelector,
  getFormInitialValues,
  getFormSyncErrors,
  getFormValues,
  InjectedFormProps,
  isDirty,
  isSubmitting,
  reduxForm,
  ConfigProps,
} from 'redux-form';

import { LoadingPanel, requireProps } from '@fpsak-frontend/shared-components';

export const getBehandlingFormPrefix = (behandlingId: number, behandlingVersjon: number): string => `behandling_${behandlingId}_v${behandlingVersjon}`;
export const getBehandlingFormName = (behandlingId: number, behandlingVersjon: number, form: string): string => `${getBehandlingFormPrefix(behandlingId,
  behandlingVersjon)}.${form}`;

interface BehandlingFormProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingFormName: string;
  form?: string;
}

/**
 * behandlingForm
 *
 * Higher-order component som lager forms innen konteksten av en gitt behandling. BehandlingIndex har ansvaret for å styre livssyklusen til disse skjemaene.
 * @see BehandlingIndex
 */
export const behandlingForm = (config: ConfigProps) => (WrappedComponent: ComponentType<InjectedFormProps>) => {
  const { form, ...reduxFormConfig } = config;
  // Default configuration lets BehandlingIndex manage the lifecycle of the forms
  const defaultReduxFormConfig = {
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
  };
  const FormComponent = reduxForm({
    ...defaultReduxFormConfig,
    ...reduxFormConfig,
  })(WrappedComponent);

  const WithBehandlingForm = ({ behandlingFormName, ...otherProps }: BehandlingFormProps) => (
    <FormComponent
      {...otherProps}
      key={behandlingFormName}
      form={behandlingFormName}
    />
  );

  const mapStateToProps = (_state, ownProps: BehandlingFormProps) => ({
    behandlingFormName: getBehandlingFormName(ownProps.behandlingId, ownProps.behandlingVersjon, form || ownProps.form),
  });

  return connect(mapStateToProps)(
    requireProps(['behandlingId', 'behandlingVersjon'], <LoadingPanel />)(WithBehandlingForm),
  );
};

const getFormName = (formName: string, behandlingId: number, behandlingVersjon: number): string => (behandlingId && behandlingVersjon
  ? getBehandlingFormName(behandlingId, behandlingVersjon, formName)
  : '');

export const behandlingFormValueSelector = (formName: string, behandlingId: number, behandlingVersjon: number) => (
  state,
  ...fieldNames
): any => formValueSelector(getFormName(formName, behandlingId, behandlingVersjon))(state, ...fieldNames);

export const isBehandlingFormDirty = (formName: string, behandlingId: number, behandlingVersjon: number) => (
  state,
): boolean => isDirty(getFormName(formName, behandlingId, behandlingVersjon))(state);

export const isBehandlingFormSubmitting = (formName: string, behandlingId: number, behandlingVersjon: number) => (
  state,
): boolean => isSubmitting(getFormName(formName, behandlingId, behandlingVersjon))(state);

export const getBehandlingFormValues = (formName: string, behandlingId: number, behandlingVersjon: number) => (
  state,
): any => getFormValues(getFormName(formName, behandlingId, behandlingVersjon))(state);

export const getBehandlingFormInitialValues = (formName: string, behandlingId: number, behandlingVersjon: number) => (
  state,
): any => getFormInitialValues(getFormName(formName, behandlingId, behandlingVersjon))(state);

export const getBehandlingFormSyncErrors = (formName: string, behandlingId: number, behandlingVersjon: number) => (
  state,
): any => getFormSyncErrors(getFormName(formName, behandlingId, behandlingVersjon))(state);

const getFormState = (state) => state.form;
export const getBehandlingFormRegisteredFields = (formName: string, behandlingId: number, behandlingVersjon: number) => createSelector(
  [getFormState], (formState = {}) => {
    const behandlingFormId = getBehandlingFormPrefix(behandlingId, behandlingVersjon);
    return (formState[behandlingFormId] && formState[behandlingFormId][formName]
      ? formState[behandlingFormId][formName].registeredFields : {});
  },
);

const traverseAndFindValue = (error: { [x: string]: string }, idParts: any[]): any => idParts.reduce((o, i) => (o[i] ? o[i] : []), error);

export const hasBehandlingFormErrorsOfType = (
  formName: string,
  behandlingId: number,
  behandlingVersjon: number,
  errorMsg: string,
) => createSelector(
  [getBehandlingFormRegisteredFields(formName, behandlingId, behandlingVersjon),
    getBehandlingFormSyncErrors(formName, behandlingId, behandlingVersjon)],
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

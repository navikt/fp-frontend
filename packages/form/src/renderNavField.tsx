import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';

import Label from './Label';
import LabelType from './LabelType';

const formatError = (submitFailed: boolean, error: any, intl: IntlShape) => {
  if (submitFailed && error) {
    // @ts-ignore
    return intl.formatMessage(...error);
  }
  return undefined;
};

interface FieldComponentProps {
  label: LabelType;
  readOnly?: boolean;
  readOnlyHideEmpty?: boolean;
  isEdited?: boolean;
}

const renderNavField = (WrappedNavFieldComponent) => {
  const FieldComponent = (props: FieldComponentProps & WrappedFieldProps & WrappedComponentProps) => {
    const {
      intl,
      input,
      meta: { submitFailed, error },
      label,
      readOnly,
      isEdited,
      readOnlyHideEmpty,
      ...otherProps
    } = props;
    const isEmpty = input.value === null || input.value === undefined || input.value === '';
    if (readOnly && readOnlyHideEmpty && isEmpty) {
      return null;
    }
    const fieldProps = {
      id: input.name,
      feil: formatError(submitFailed, error, intl),
      label: <Label input={label} readOnly={readOnly} />,
    };

    return readOnly
      ? <WrappedNavFieldComponent {...fieldProps} {...input} isEdited={isEdited} {...otherProps} readOnly={readOnly} />
      : <WrappedNavFieldComponent {...fieldProps} {...input} {...otherProps} readOnly={readOnly} />;
  };

  FieldComponent.defaultProps = {
    readOnly: false,
    readOnlyHideEmpty: false,
    isEdited: false,
  };

  const FieldComponentWithIntl = injectIntl(FieldComponent);

  FieldComponentWithIntl.WrappedComponent = FieldComponent;

  return FieldComponentWithIntl;
};

export default renderNavField;

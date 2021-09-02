import React, { FunctionComponent } from 'react';
import { BaseFieldProps, Field } from 'redux-form';
import { Input as NavInput, InputProps as NavFrontendInputProps } from 'nav-frontend-skjema';

import renderNavField from './renderNavField';
import ReadOnlyField, { ReadOnlyFieldProps } from './ReadOnlyField';
import LabelType from './LabelType';

const renderNavInput = renderNavField(NavInput);

interface InputFieldProps {
  readOnly?: boolean;
  isEdited?: boolean;
  type?: string;
  label?: LabelType;
}

const InputField: FunctionComponent<BaseFieldProps & InputFieldProps & (NavFrontendInputProps | ReadOnlyFieldProps)> = ({
  name,
  type,
  label,
  validate,
  readOnly,
  isEdited,
  ...otherProps
}) => (
  <Field
    name={name}
    validate={validate}
    component={readOnly ? ReadOnlyField : renderNavInput}
    type={type}
    label={label}
    {...otherProps}
    readOnly={readOnly}
    readOnlyHideEmpty
    isEdited={isEdited}
    autoComplete="off"
  />
);

InputField.defaultProps = {
  type: 'text',
  readOnly: false,
  label: '',
  isEdited: false,
};

export default InputField;

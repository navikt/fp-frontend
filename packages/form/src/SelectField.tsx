import React, { FunctionComponent, ReactElement } from 'react';
import { BaseFieldProps, Field, WrappedFieldProps } from 'redux-form';

import CustomNavSelect from './CustomNavSelect';
import renderNavField from './renderNavField';
import ReadOnlyField from './ReadOnlyField';
import LabelType from './LabelType';

interface SelectFieldProps {
  selectValues: ReactElement[];
  label: LabelType;
  readOnly?: boolean;
  placeholder?: string;
  hideValueOnDisable?: boolean;
  bredde?: string;
  disabled?: boolean;
  className?: string;
  value?: string;
}

interface ReadOnlyProps {
  selectValues: ReactElement[];
}

const renderReadOnly = (): FunctionComponent<WrappedFieldProps & ReadOnlyProps> => ({
  input,
  selectValues,
  ...otherProps
}): JSX.Element => {
  const option = selectValues.map((sv) => sv.props).find((o) => o.value === input.value);
  const value = option ? option.children : undefined;
  return <ReadOnlyField input={{ value }} {...otherProps} />;
};

const renderNavSelect = renderNavField(CustomNavSelect);

const SelectField: FunctionComponent<BaseFieldProps & SelectFieldProps> = ({
  name,
  label,
  selectValues,
  validate,
  readOnly,
  ...otherProps
}): JSX.Element => (
  <Field
    name={name}
    validate={validate}
    component={readOnly ? renderReadOnly() : renderNavSelect}
    label={label}
    selectValues={selectValues}
    disabled={!!readOnly}
    {...otherProps}
    readOnly={readOnly}
  />
);

SelectField.defaultProps = {
  readOnly: false,
  placeholder: ' ',
  hideValueOnDisable: false,
};

export default SelectField;

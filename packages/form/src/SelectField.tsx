import React, { FunctionComponent, ReactNode } from 'react';
import { Field, Validator } from 'redux-form';

import CustomNavSelect from './CustomNavSelect';
import renderNavField from './renderNavField';
import ReadOnlyField from './ReadOnlyField';
import LabelType from './LabelType';

interface SelectFieldProps {
  name: string;
  selectValues: any[];
  label: LabelType;
  validate?: Validator | Validator[];
  readOnly?: boolean;
  placeholder?: string;
  hideValueOnDisable?: boolean;
  bredde?: string;
  disabled?: boolean;
  onChange?: (elmt: ReactNode, value: any) => void;
  className?: string;
  value?: string;
}

/* eslint-disable-next-line react/prop-types */
const renderReadOnly = () => ({ input, selectValues, ...otherProps }) => {
  /* eslint-disable-next-line react/prop-types */
  const option = selectValues.map((sv) => sv.props).find((o) => o.value === input.value);
  const value = option ? option.children : undefined;
  return <ReadOnlyField input={{ value }} {...otherProps} />;
};

const renderNavSelect = renderNavField(CustomNavSelect);

const SelectField: FunctionComponent<SelectFieldProps> = ({
  name, label, selectValues, validate, readOnly, ...otherProps
}) => (
  <Field
    name={name}
    validate={validate}
    component={readOnly ? renderReadOnly() : renderNavSelect}
    label={label}
    selectValues={selectValues}
    disabled={!!readOnly}
    {...otherProps}
    readOnly={readOnly}
    // @ts-ignore TODO Fiks
    readOnlyHideEmpty
  />
);

SelectField.defaultProps = {
  validate: null,
  readOnly: false,
  placeholder: ' ',
  hideValueOnDisable: false,
};

export default SelectField;

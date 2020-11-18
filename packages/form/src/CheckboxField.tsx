import React, { FunctionComponent } from 'react';
import { BaseFieldProps, Field, WrappedFieldProps } from 'redux-form';
import { Checkbox as NavCheckbox } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';

import LabelType from './LabelType';
import renderNavField from './renderNavField';

interface CheckboxFieldProps {
  label: LabelType;
  readOnly?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface RenderCheckboxFieldProps {
  onChange: (isChecked: boolean) => void;
  label: React.ReactElement;
  value: string | number | string[];
  isEdited: boolean;
}

export const RenderCheckboxField = renderNavField(({
  onChange,
  label,
  ...otherProps
}: WrappedFieldProps & RenderCheckboxFieldProps) => {
  // eslint-disable-next-line no-param-reassign
  delete otherProps.isEdited;
  return (
    <NavCheckbox
      onChange={(event) => onChange(event.target.checked)}
      checked={!!otherProps.value}
      label={React.cloneElement(label, { typographyElement: Normaltekst })}
      {...otherProps}
    />
  );
});

const CheckboxField: FunctionComponent<BaseFieldProps & CheckboxFieldProps> = ({
  name,
  label,
  validate,
  readOnly = false,
  ...otherProps
}) => (
  <Field
    name={name}
    validate={validate}
    component={RenderCheckboxField}
    label={label}
    disabled={readOnly}
    readOnly={readOnly}
    readOnlyHideEmpty
    {...otherProps}
  />
);

export default CheckboxField;

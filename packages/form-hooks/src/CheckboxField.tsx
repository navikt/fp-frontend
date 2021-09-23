import React, { FunctionComponent, useMemo } from 'react';
import { Checkbox as NavCheckbox } from 'nav-frontend-skjema';
import { useController, useFormContext } from 'react-hook-form';
import { Normaltekst } from 'nav-frontend-typografi';
import { LabelType } from './Label';
import { getError, getValidationRules } from './formUtils';

interface OwnProps {
  name: string;
  label: LabelType;
  validate?: ((value: string) => any)[];
  readOnly?: boolean;
  onChange?: (isChecked: boolean) => void;
  onClick?: () => void;
}

const CheckboxField: FunctionComponent<OwnProps> = ({
  name,
  label,
  validate = [],
  readOnly = false,
  onChange,
  onClick,
}) => {
  const { formState: { errors } } = useFormContext();

  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  return (
    <NavCheckbox
      label={<Normaltekst>{label}</Normaltekst>}
      feil={getError(errors, name)}
      disabled={readOnly}
      checked={field.value === true}
      {...field}
      onChange={(event) => {
        field.onChange(event);
        if (onChange) {
          onChange(event.currentTarget.checked);
        }
      }}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    />
  );
};

export default CheckboxField;

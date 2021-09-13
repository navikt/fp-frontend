import React, { FunctionComponent, useMemo } from 'react';
import { Checkbox as NavCheckbox } from 'nav-frontend-skjema';
import { useController, useFormContext } from 'react-hook-form';
import { Normaltekst } from 'nav-frontend-typografi';

interface OwnProps {
  name: string;
  label: string;
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
  const validationFunctions = useMemo(() => validate.reduce((acc, fn, index) => ({
    ...acc,
    [index]: (value: any) => fn(value) || true,
  }), {}), [validate]);

  const { field } = useController({
    name,
    rules: {
      validate: validationFunctions,
    },
  });

  return (
    <NavCheckbox
      label={<Normaltekst>{label}</Normaltekst>}
      feil={errors[name] && errors[name].message}
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

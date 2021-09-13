import React, { FunctionComponent } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Input as NavInput } from 'nav-frontend-skjema';
import Label from './Label';
import ReadOnlyField from './ReadOnlyField';

interface OwnProps {
  name: string;
  label?: string;
  bredde?: 'fullbredde' | 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | 'XXS';
  validate?: ((value: string) => any)[];
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onBlur?: (value: any) => void;
  shouldValidateOnBlur?: boolean;
  autoFocus?: boolean;
}

const InputField: FunctionComponent<OwnProps> = ({
  name,
  label,
  validate = [],
  readOnly = false,
  bredde,
  shouldValidateOnBlur = false,
  onBlur,
  className,
  placeholder,
  autoFocus,
}) => {
  const { formState: { errors }, trigger } = useFormContext();
  const validationFunctions = validate.reduce((acc, fn, index) => ({
    ...acc,
    [index]: (value: any) => fn(value) || true,
  }), {});

  const { field } = useController({
    name,
    rules: {
      validate: validationFunctions,
    },
  });

  if (readOnly) {
    return <ReadOnlyField label={<Label input={label} readOnly />} input={field.value} />;
  }

  return (
    <NavInput
      className={className}
      placeholder={placeholder}
      label={<Label input={label} readOnly={false} />}
      feil={errors[name] && errors[name].message}
      bredde={bredde}
      {...field}
      value={field.value ? field.value : ''}
      autoFocus={autoFocus}
      onBlur={async (event) => {
        field.onBlur();
        if (shouldValidateOnBlur) {
          const isValidationOk = await trigger();
          if (onBlur && isValidationOk) {
            onBlur(event?.target?.value);
          }
        } else if (onBlur) {
          onBlur(event?.target?.value);
        }
      }}
    />
  );
};

export default InputField;

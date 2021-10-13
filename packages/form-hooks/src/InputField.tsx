import React, { FunctionComponent, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Input as NavInput } from 'nav-frontend-skjema';
import Label from './Label';
import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';

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
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    return <ReadOnlyField label={<Label input={label} readOnly />} input={field} />;
  }

  return (
    <NavInput
      className={className}
      placeholder={placeholder}
      label={<Label input={label} readOnly={false} />}
      feil={getError(errors, name)}
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

import React, { FunctionComponent, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';
import { SkjemaGruppe as NavSkjemaGruppe } from 'nav-frontend-skjema';
import { useController, useFormContext } from 'react-hook-form';

import { LabelType } from './Label';
import { RadioOptionProps } from './RadioOption';
import OptionGrid, { Direction } from './OptionGrid';
import { getError, getValidationRules } from './formUtils';

import styles from './radioGroupField.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  name: string;
  label?: LabelType;
  bredde?: string;
  children: React.ReactElement<RadioOptionProps>[];
  spaceBetween?: boolean;
  direction?: Direction;
  onChange?: (value: any) => void;
  readOnly?: boolean;
  isEdited?: boolean;
  validate?: ((value: string) => any)[];
  parse?: (value: string) => any;
}

const RadioGroupField: FunctionComponent<OwnProps> = ({
  label,
  name,
  onChange,
  bredde,
  readOnly,
  isEdited,
  children,
  spaceBetween,
  direction,
  validate = [],
  parse = (value) => value,
}) => {
  const { formState: { errors } } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  const customOnChange = useCallback((e: any) => {
    field.onChange(parse(e.target.value));
    if (onChange) {
      onChange(e.target.value);
    }
  }, [field, onChange]);

  const showCheckedOnly = readOnly && field.value !== null && field.value !== undefined && field.value !== '';

  const options = useMemo(() => children
    .filter((radioOption) => !!radioOption)
    .map((radioOption) => React.cloneElement(radioOption, {
      key: JSON.stringify(radioOption.props.value),
      name: field.name,
      value: radioOption.props.value,
      onChange: customOnChange,
      groupDisabled: readOnly,
      checked: radioOption.props.value.toString() === field.value?.toString(),
    }))
    .filter((radioOption) => !showCheckedOnly || radioOption.props.value.toString() === field.value?.toString()),
  [children, field.value, customOnChange]);

  const feil = getError(errors, name);

  return (
    <NavSkjemaGruppe
      feil={readOnly ? undefined : feil}
      className={classNames(`input--${bredde}`, 'radioGroup', { readOnly })}
    >
      {label && <span className={classNames('radioGroupLabel', { readOnly })}>{label}</span>}
      <OptionGrid
        direction={direction}
        isEdited={readOnly && isEdited}
        // @ts-ignore Fiks
        options={options}
        spaceBetween={spaceBetween}
      />
    </NavSkjemaGruppe>
  );
};

export default RadioGroupField;

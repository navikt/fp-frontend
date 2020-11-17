import React from 'react';
import classnames from 'classnames/bind';
import { BaseFieldProps, Field } from 'redux-form';
import { SkjemaGruppe as NavSkjemaGruppe } from 'nav-frontend-skjema';

import renderNavField from './renderNavField';
import OptionGrid from './OptionGrid';
import { RadioOptionProps } from './RadioOption';

import styles from './radioGroupField.less';

type Direction = 'horizontal' | 'vertical';

interface RadioGroupFieldProps {
  label?: React.ReactElement;
  /**
   * columns: Antall kolonner som valgene skal fordeles på. Default er samme som antall valg.
   */
  columns?: number;
  bredde?: string;
  children?: React.ReactElement<RadioOptionProps>[];
  spaceBetween?: boolean;
  rows?: number;
  direction?: Direction;
  DOMName?: string;
  readOnly?: boolean;
  legend?: React.ReactNode;
  isEdited?: boolean;
  className?: string;
}

const classNames = classnames.bind(styles);

const isChecked = (radioOption: React.ReactElement<RadioOptionProps>, actualValueStringified: string): boolean => radioOption.key === actualValueStringified;

const renderRadioGroupField = renderNavField(({
  label,
  columns,
  name,
  value,
  onChange,
  bredde,
  readOnly,
  isEdited,
  feil,
  children,
  spaceBetween,
  rows,
  direction,
  DOMName,
  legend,
}: BaseFieldProps & RadioGroupFieldProps) => {
  const optionProps = {
    onChange,
    name: DOMName || name,
    groupDisabled: readOnly,
    className: classNames('radio'),
    actualValue: value,
  };
  const actualValueStringified = JSON.stringify(value);
  const showCheckedOnly = readOnly && value !== null && value !== undefined && value !== '';
  const options = children
    .filter((radioOption) => !!radioOption)
    .map((radioOption) => React.cloneElement(radioOption as React.ReactElement<any>, { key: JSON.stringify(radioOption.props.value), ...optionProps }))
    .filter((radioOption) => !showCheckedOnly || isChecked(radioOption, actualValueStringified));

  return (
    <NavSkjemaGruppe
      feil={readOnly ? undefined : feil}
      className={classNames(`input--${bredde}`, 'radioGroup', { readOnly })}
      legend={legend}
    >
      {label.props.input && <span className={classNames('radioGroupLabel', { readOnly })}>{label}</span>}
      <OptionGrid
        direction={direction}
        isEdited={readOnly && isEdited}
        options={options}
        spaceBetween={spaceBetween}
        columns={showCheckedOnly ? 1 : columns}
        rows={showCheckedOnly ? 1 : rows}
      />
    </NavSkjemaGruppe>
  );
});

export const RadioGroupField = (props: BaseFieldProps & RadioGroupFieldProps) => (
  <Field
    component={renderRadioGroupField}
    {...props}
  />
);

RadioGroupField.defaultProps = {
  columns: 0,
  rows: 0,
  bredde: 'fullbredde',
  label: '',
  spaceBetween: false,
  direction: 'horizontal',
  legend: '',
};

export default RadioGroupField;

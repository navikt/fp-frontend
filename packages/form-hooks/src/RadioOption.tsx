import React, { FunctionComponent, CSSProperties, ReactNode } from 'react';
import { Radio as NavRadio } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';

import Label, { LabelType } from './Label';

export interface RadioOptionProps {
  name?: string;
  label: LabelType;
  value: string | number;
  style?: CSSProperties;
  onChange?: (value: any) => void;
  checked?: boolean;
  children?: ReactNode | ReactNode[];
  groupDisabled?: boolean;
  disabled?: boolean;
}

export const RadioOption: FunctionComponent<RadioOptionProps> = ({
  name = '',
  label,
  value,
  style,
  onChange,
  checked,
  groupDisabled,
  children,
  disabled,
}) => (
  <div style={style}>
    <NavRadio
      name={name}
      label={<Label input={label} typographyElement={Normaltekst} />}
      checked={checked}
      value={value}
      disabled={disabled || groupDisabled}
      onChange={(newValue) => {
        if (onChange) {
          onChange((newValue));
        }
      }}
    />
    {checked && children}
  </div>
);

export default RadioOption;

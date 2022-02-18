import React, { useMemo, FunctionComponent, ReactNode } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import classnames from 'classnames/bind';

import { LabelType } from './Label';
import CustomNavSelect from './CustomNavSelect';
import styles from './selectField.less';
import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';

const classNames = classnames.bind(styles);

interface OwnProps {
  name: string;
  label: LabelType;
  onClick?: (event: any) => void;
  onChange?: (event: any) => void;
  validate?: ((value: string) => any)[];
  readOnly?: boolean;
  selectValues: React.ReactElement[];
  placeholder?: ReactNode;
  hideValueOnDisable?: boolean;
  bredde?: 'fullbredde' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
  disabled?: boolean;
  className?: string;
}

const SelectField: FunctionComponent<OwnProps> = ({
  name,
  label,
  selectValues,
  validate = [],
  readOnly = false,
  placeholder = ' ',
  hideValueOnDisable = false,
  bredde,
  onChange,
  className,
  ...otherProps
}) => {
  const { formState: { errors } } = useFormContext();

  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    const option = selectValues.map((sv) => sv.props).find((o) => o.value === field.value);
    const value = option ? option.children : undefined;
    return <ReadOnlyField value={value} {...otherProps} />;
  }

  return (
    <CustomNavSelect
      selectValues={selectValues}
      placeholder={placeholder}
      hideValueOnDisable={hideValueOnDisable}
      className={classNames('navSelect', className, { navSelectReadOnly: readOnly })}
      label={label}
      feil={getError(errors, name)}
      bredde={bredde}
      {...field}
      onChange={(evt) => {
        if (onChange) {
          onChange(evt);
        }
        field.onChange(evt);
      }}
      {...otherProps}
    />
  );
};

export default SelectField;

import React, { FunctionComponent, ReactNode } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import classnames from 'classnames/bind';

import CustomNavSelect from './CustomNavSelect';
import styles from './selectField.less';
import ReadOnlyField from './ReadOnlyField';

const classNames = classnames.bind(styles);

interface OwnProps {
  name: string;
  label: string;
  onClick?: () => void;
  validate?: ((value: string) => any)[];
  readOnly?: boolean;
  selectValues: React.ReactElement[];
  placeholder?: ReactNode;
  hideValueOnDisable?: boolean;
  bredde?: 'fullbredde' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
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
  ...otherProps
}) => {
  const { formState: { errors } } = useFormContext();
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
    const option = selectValues.map((sv) => sv.props).find((o) => o.value === field.value);
    const value = option ? option.children : undefined;
    // @ts-ignore Fiks
    return <ReadOnlyField input={{ value }} {...otherProps} />;
  }

  return (
    <CustomNavSelect
      selectValues={selectValues}
      placeholder={placeholder}
      hideValueOnDisable={hideValueOnDisable}
      className={classNames('navSelect', { navSelectReadOnly: readOnly })}
      label={label}
      feil={errors[name] && errors[name].message}
      bredde={bredde}
      {...field}
      {...otherProps}
    />
  );
};

export default SelectField;

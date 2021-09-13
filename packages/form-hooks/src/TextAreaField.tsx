import React, { FunctionComponent } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Textarea as NavTextarea } from 'nav-frontend-skjema';
import EtikettFokus from 'nav-frontend-etiketter';

import Label, { LabelType } from './Label';

import styles from './textAreaField.less';
import ReadOnlyField from './ReadOnlyField';

type BadgesType = 'suksess' | 'info' | 'advarsel' | 'fokus';

interface Badges {
  text: string;
  type: BadgesType;
  titleText: string;
}

interface OwnProps {
  name: string;
  label: LabelType;
  readOnly?: boolean;
  maxLength?: number;
  badges?: Badges[];
  validate?: ((value: string) => any)[];
}

const TextAreaField: FunctionComponent<OwnProps> = ({
  name,
  label,
  validate = [],
  readOnly,
  badges,
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
    return <ReadOnlyField label={<Label input={label} readOnly />} input={field.value} />;
  }

  return (
    <div className={badges ? styles.textAreaFieldWithBadges : null}>
      { badges && (
        <div className={styles.etikettWrapper}>
          { badges.map(({ text, type, titleText }) => (
            <EtikettFokus key={text} type={type} title={titleText}>
              {text}
            </EtikettFokus>
          ))}
        </div>
      )}
      <NavTextarea
        label={<Label input={label} readOnly={false} />}
        feil={errors[name] && errors[name].message}
        {...field}
        value={field.value ? field.value : ''}
        {...otherProps}
      />
    </div>
  );
};

export default TextAreaField;

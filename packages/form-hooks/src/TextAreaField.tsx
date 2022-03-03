import React, { FunctionComponent, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Textarea as NavTextarea } from 'nav-frontend-skjema';
import EtikettFokus from 'nav-frontend-etiketter';

import Label, { LabelType } from './Label';

import styles from './textAreaField.less';
import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';

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
  textareaClass?: string;
  placeholder?: string;
  parse?: (value: string | number) => string | number;
  autoFocus?: boolean;
}

const TextAreaField: FunctionComponent<OwnProps> = ({
  name,
  label,
  validate = [],
  readOnly,
  badges,
  parse = (value) => value,
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
    return <ReadOnlyField label={label} value={field.value} type="textarea" />;
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
        autoComplete="off"
        feil={getError(errors, name)}
        {...field}
        onChange={(event) => field.onChange(event.currentTarget.value !== '' ? parse(event.currentTarget.value) : undefined)}
        value={field.value ? field.value : ''}
        {...otherProps}
      />
    </div>
  );
};

export default TextAreaField;

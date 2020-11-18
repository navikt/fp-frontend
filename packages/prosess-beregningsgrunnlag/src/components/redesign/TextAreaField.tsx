import React, { FunctionComponent } from 'react';
import { Field } from 'redux-form';
import { Textarea as NavTextarea, TextareaProps } from 'nav-frontend-skjema';
import EtikettFokus from 'nav-frontend-etiketter';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';

import renderNavField from '@fpsak-frontend/form/src/renderNavField';
import styles from './textAreaField.less';
import ReadOnlyField from './ReadOnlyField';

type labelPropType = {
  id: string;
  args: any;
};

type BadgesType = 'suksess' | 'info' | 'advarsel' | 'fokus';

interface Badges {
  textId: string;
  type: BadgesType;
  title: string;
}

type TextAreaWithBadgeProps = {
  badges: Badges[];
};

const TextAreaWithBadge: FunctionComponent<TextAreaWithBadgeProps & WrappedComponentProps & TextareaProps> = ({ badges, intl, ...otherProps }) => {
  const { placeholder } = otherProps;
  return (
    <div className={badges ? styles.textAreaFieldWithBadges : null}>
      { badges
      && (
        <div className={styles.etikettWrapper}>
          { badges.map(({ textId, type, title }) => (
            <EtikettFokus key={textId} type={type} title={intl.formatMessage({ id: title })}>
              <FormattedMessage id={textId} />
            </EtikettFokus>
          ))}
        </div>
      )}
      <div className={placeholder ? styles.textAreaWithPlaceholder : null}>
        <NavTextarea {...otherProps} />
      </div>
    </div>
  );
};

const renderNavTextArea = renderNavField(injectIntl(TextAreaWithBadge));

type TextAreaFieldProps = {
    name: string;
    label: React.ReactNode | labelPropType;
    validate?: ((...args: any[]) => any)[];
    readOnly?: boolean;
    maxLength?: number;
    placeholder?: string;
    endrettekst?: any;
};

const TextAreaField: FunctionComponent<TextAreaFieldProps> = ({
  name, label, validate, readOnly, ...otherProps
}) => (
  <Field
    name={name}
    validate={validate}
    component={readOnly ? ReadOnlyField : renderNavTextArea}
    label={label}
    {...otherProps}
    readOnly={readOnly}
    readOnlyHideEmpty
    autoComplete="off"
  />
);

TextAreaField.defaultProps = {
  validate: null,
  readOnly: false,
};

TextAreaWithBadge.defaultProps = {
  badges: null,
};

export default TextAreaField;

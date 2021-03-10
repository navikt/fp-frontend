import React, { FunctionComponent } from 'react';
import { BaseFieldProps, Field } from 'redux-form';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Textarea as NavTextarea, TextareaProps } from 'nav-frontend-skjema';
import EtikettFokus from 'nav-frontend-etiketter';

import renderNavField from './renderNavField';
import LabelType from './LabelType';
import ReadOnlyField from './ReadOnlyField';

import styles from './textAreaField.less';

type BadgesType = 'suksess' | 'info' | 'advarsel' | 'fokus';

interface Badges {
  text: string;
  type: BadgesType;
  title: string;
}

interface TextAreaWithBadgeProps {
  badges: Badges[];
  dataId?: string;
}

const TextAreaWithBadge: FunctionComponent<TextAreaWithBadgeProps & WrappedComponentProps & TextareaProps> = ({
  badges,
  intl,
  dataId,
  ...otherProps
}) => (
  <div className={badges ? styles.textAreaFieldWithBadges : null}>
    { badges && (
      <div className={styles.etikettWrapper}>
        { badges.map(({ text, type, title }) => (
          <EtikettFokus key={text} type={type} title={intl.formatMessage({ id: title })}>
            {text}
          </EtikettFokus>
        ))}
      </div>
    )}
    <NavTextarea data-id={dataId} {...otherProps} />
  </div>
);

const renderNavTextArea = renderNavField(injectIntl(TextAreaWithBadge));

interface TextAreaFieldProps {
  label: LabelType;
  readOnly?: boolean;
  dataId?: string;
  textareaClass?: string;
  maxLength?: number;
  badges?: Badges[];
  placeholder?: string;
  autoFocus?: boolean;
  endrettekst?: React.ReactNode;
}

const TextAreaField: FunctionComponent<BaseFieldProps & TextAreaFieldProps> = ({
  name,
  label,
  validate,
  readOnly,
  ...otherProps
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
    type="textarea"
    // Desse to bindestrekane er ikkje like. Den første er kopiert fra PDF og må endrast før lagring
    parse={(value: string) => value.replace('‑', '-')}
  />
);

TextAreaField.defaultProps = {
  readOnly: false,
};

export default TextAreaField;

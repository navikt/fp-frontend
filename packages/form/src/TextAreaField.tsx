import React, { FunctionComponent } from 'react';
import { BaseFieldProps, Field } from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Textarea as NavTextarea, TextareaProps } from 'nav-frontend-skjema';
import EtikettFokus from 'nav-frontend-etiketter';

import renderNavField from './renderNavField';
import LabelType from './LabelType';
import ReadOnlyField from './ReadOnlyField';

import styles from './textAreaField.less';

type BadgesType = 'suksess' | 'info' | 'advarsel' | 'fokus';

interface Badges {
  textId: string;
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
  />
);

TextAreaField.defaultProps = {
  readOnly: false,
};

export default TextAreaField;

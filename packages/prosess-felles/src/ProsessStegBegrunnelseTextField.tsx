import React, { FunctionComponent } from 'react';

import { TextAreaField } from '@fpsak-frontend/form';
import {
  decodeHtmlEntity, hasValidText, maxLength, minLength, requiredIfNotPristine, createIntl,
} from '@fpsak-frontend/utils';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import messages from '../i18n/nb_NO.json';

import styles from './prosessStegBegrunnelseTextField.less';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const getBegrunnelseTextCode = (readOnly: boolean): string => (readOnly
  ? 'ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly'
  : 'ProsessStegBegrunnelseTextField.ExplanationRequired');

type FormValues = {
  begrunnelse?: string;
}

interface OwnProps {
  readOnly: boolean;
  text?: string;
  useAllWidth?: boolean;
}

interface StaticFunctions {
  buildInitialValues?: (aksjonspunkter: Aksjonspunkt[]) => FormValues;
  transformValues?: (values: FormValues) => {
    begrunnelse?: string;
  },
}

/**
 * ProsessStegBegrunnelseTextField
 *
 * Presentasjonskomponent. Lar den NAV-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.
 */
const ProsessStegBegrunnelseTextField: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  text,
  useAllWidth = false,
}) => (
  <div className={!useAllWidth ? styles.begrunnelseTextField : ''}>
    <TextAreaField
      name="begrunnelse"
      label={text || intl.formatMessage({ id: getBegrunnelseTextCode(readOnly) })}
      validate={[requiredIfNotPristine, minLength3, maxLength1500, hasValidText]}
      textareaClass={styles.explanationTextarea}
      maxLength={1500}
      readOnly={readOnly}
      placeholder={intl.formatMessage({ id: 'ProsessStegBegrunnelseTextField.BegrunnVurdering' })}
    />
  </div>
);

const getBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): string => (aksjonspunkter.length > 0 && aksjonspunkter[0].begrunnelse
  ? aksjonspunkter[0].begrunnelse
  : '');

ProsessStegBegrunnelseTextField.buildInitialValues = (aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  begrunnelse: decodeHtmlEntity(getBegrunnelse(aksjonspunkter)),
});

ProsessStegBegrunnelseTextField.transformValues = (values: FormValues): any => ({
  begrunnelse: values.begrunnelse,
});

export default ProsessStegBegrunnelseTextField;

import React, { FunctionComponent } from 'react';

import { TextAreaField } from '@fpsak-frontend/form';
import {
  decodeHtmlEntity, hasValidText, maxLength, minLength, requiredIfNotPristine,
} from '@fpsak-frontend/utils';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import useIntl from './useIntl';

import styles from './prosessStegBegrunnelseTextField.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const getBegrunnelseTextCode = (readOnly: boolean) => (readOnly
  ? 'ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly'
  : 'ProsessStegBegrunnelseTextField.ExplanationRequired');

interface OwnProps {
  readOnly: boolean;
  textCode?: string;
  useAllWidth?: boolean;
}

interface StaticFunctions {
  buildInitialValues?: (aksjonspunkter: Aksjonspunkt[]) => {
    begrunnelse?: string;
  },
  transformValues?: (values: { begrunnelse?: string }) => {
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
  textCode,
  useAllWidth = false,
}) => {
  const intl = useIntl();
  return (
    <div className={!useAllWidth ? styles.begrunnelseTextField : ''}>
      <TextAreaField
        name="begrunnelse"
        label={intl.formatMessage({ id: textCode || getBegrunnelseTextCode(readOnly) })}
        validate={[requiredIfNotPristine, minLength3, maxLength1500, hasValidText]}
        textareaClass={styles.explanationTextarea}
        maxLength={1500}
        readOnly={readOnly}
        placeholder={intl.formatMessage({ id: 'ProsessStegBegrunnelseTextField.BegrunnVurdering' })}
      />
    </div>
  );
};

const getBegrunnelse = (aksjonspunkter: Aksjonspunkt[]) => (aksjonspunkter.length > 0 && aksjonspunkter[0].begrunnelse
  ? aksjonspunkter[0].begrunnelse
  : '');

ProsessStegBegrunnelseTextField.buildInitialValues = (aksjonspunkter: Aksjonspunkt[]) => ({
  begrunnelse: decodeHtmlEntity(getBegrunnelse(aksjonspunkter)),
});

ProsessStegBegrunnelseTextField.transformValues = (values: { begrunnelse?: string }) => ({
  begrunnelse: values.begrunnelse,
});

export default ProsessStegBegrunnelseTextField;

import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';

import { TextAreaField } from '@fpsak-frontend/form-hooks';
import {
  decodeHtmlEntity, hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew, createIntl,
} from '@navikt/ft-utils';
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

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) => value !== undefined || isDirty;

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
}) => {
  const { formState: { isDirty } } = useFormContext();
  const isRequiredFn = getIsBegrunnelseRequired(isDirty);
  return (
    <div className={!useAllWidth ? styles.begrunnelseTextField : ''}>
      <TextAreaField
        name="begrunnelse"
        label={text || intl.formatMessage({ id: getBegrunnelseTextCode(readOnly) })}
        validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
        textareaClass={styles.explanationTextarea}
        maxLength={1500}
        readOnly={readOnly}
        placeholder={intl.formatMessage({ id: 'ProsessStegBegrunnelseTextField.BegrunnVurdering' })}
      />
    </div>
  );
};

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

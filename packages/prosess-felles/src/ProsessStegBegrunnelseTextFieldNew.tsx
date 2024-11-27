import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { createIntl, decodeHtmlEntity, formaterFritekst } from '@navikt/ft-utils';

import { Aksjonspunkt } from '@navikt/fp-types';

import styles from './prosessStegBegrunnelseTextField.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(2000);

const getBegrunnelseTextCode = (readOnly: boolean): string =>
  readOnly
    ? 'ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly'
    : 'ProsessStegBegrunnelseTextField.ExplanationRequired';

type FormValues = {
  begrunnelse?: string;
};

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string | number | boolean) =>
  value !== undefined || isDirty;

interface OwnProps {
  readOnly: boolean;
  text?: string;
  useAllWidth?: boolean;
  notRequired?: boolean;
}

interface StaticFunctions {
  buildInitialValues: (aksjonspunkter: Aksjonspunkt[]) => FormValues;
  transformValues: (values: FormValues) => {
    begrunnelse?: string;
  };
}

/**
 * ProsessStegBegrunnelseTextField
 *
 * Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.
 */
const ProsessStegBegrunnelseTextField: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  text,
  useAllWidth = false,
  notRequired = false,
}) => {
  const {
    formState: { isDirty },
  } = useFormContext();
  const isRequiredFn = notRequired ? () => false : getIsBegrunnelseRequired(isDirty);
  return (
    <div className={!useAllWidth ? styles.begrunnelseTextField : ''}>
      <TextAreaField
        name="begrunnelse"
        label={text || intl.formatMessage({ id: getBegrunnelseTextCode(readOnly) })}
        validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
        maxLength={2000}
        readOnly={readOnly}
        parse={formaterFritekst}
      />
    </div>
  );
};

const getBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): string =>
  aksjonspunkter.length > 0 && aksjonspunkter[0].begrunnelse ? aksjonspunkter[0].begrunnelse : '';

ProsessStegBegrunnelseTextField.buildInitialValues = (aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  begrunnelse: decodeHtmlEntity(getBegrunnelse(aksjonspunkter)),
});

ProsessStegBegrunnelseTextField.transformValues = (values: FormValues): any => ({
  begrunnelse: values.begrunnelse,
});

export default ProsessStegBegrunnelseTextField;

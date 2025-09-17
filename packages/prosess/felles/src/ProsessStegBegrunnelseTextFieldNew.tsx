import { useFormContext } from 'react-hook-form';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { createIntl, decodeHtmlEntity, formaterFritekst } from '@navikt/ft-utils';

import type { Aksjonspunkt } from '@navikt/fp-types';

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

interface Props {
  readOnly: boolean;
  text?: string;
  useAllWidth?: boolean;
  notRequired?: boolean;
}

/**
 * ProsessStegBegrunnelseTextField
 *
 * Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.
 */
export const ProsessStegBegrunnelseTextField = ({
  readOnly,
  text,
  useAllWidth = false,
  notRequired = false,
}: Props) => {
  const {
    formState: { isDirty },
    control,
  } = useFormContext<FormValues>();

  const isRequiredFn = notRequired ? () => false : getIsBegrunnelseRequired(isDirty);
  return (
    <div className={!useAllWidth ? styles.begrunnelseTextField : ''}>
      <RhfTextarea
        name="begrunnelse"
        control={control}
        label={text ?? intl.formatMessage({ id: getBegrunnelseTextCode(readOnly) })}
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

ProsessStegBegrunnelseTextField.transformValues = (values: FormValues): { begrunnelse: string | undefined } => ({
  begrunnelse: values.begrunnelse,
});

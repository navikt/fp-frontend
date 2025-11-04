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

export type ProsessStegBegrunnelseTextFieldFormValues = {
  begrunnelse?: string;
};

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string | number | boolean) =>
  value !== undefined || isDirty;

interface Props {
  readOnly: boolean;
  text?: string;
  notRequired?: boolean;
}

/**
 * ProsessStegBegrunnelseTextField
 *
 * Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.
 */
export const ProsessStegBegrunnelseTextField = ({ readOnly, text, notRequired = false }: Props) => {
  const {
    formState: { isDirty },
    control,
  } = useFormContext<ProsessStegBegrunnelseTextFieldFormValues>();

  const isRequiredFn = notRequired ? () => false : getIsBegrunnelseRequired(isDirty);
  return (
    <RhfTextarea
      name="begrunnelse"
      control={control}
      resize
      className={styles['begrunnelseTextField']}
      label={text ?? intl.formatMessage({ id: getBegrunnelseTextCode(readOnly) })}
      validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
      maxLength={2000}
      readOnly={readOnly}
      parse={formaterFritekst}
    />
  );
};

const getBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): string => aksjonspunkter.at(0)?.begrunnelse ?? '';

ProsessStegBegrunnelseTextField.buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
): ProsessStegBegrunnelseTextFieldFormValues => ({
  begrunnelse: decodeHtmlEntity(getBegrunnelse(aksjonspunkter)),
});

ProsessStegBegrunnelseTextField.transformValues = (
  values: ProsessStegBegrunnelseTextFieldFormValues,
): { begrunnelse: string | undefined } => ({
  begrunnelse: values.begrunnelse,
});

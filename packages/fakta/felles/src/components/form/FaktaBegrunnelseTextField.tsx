import { RawIntlProvider } from 'react-intl';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { createIntl, decodeHtmlEntity } from '@navikt/ft-utils';

import type { Aksjonspunkt } from '@navikt/fp-types';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type Props = {
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasBegrunnelse: boolean;
  label?: string;
  hasReadOnlyLabel?: boolean;
  hasVurderingText?: boolean;
  name?: string;
};

export type FormValues = {
  begrunnelse: string | undefined;
};

type TransformedValues = {
  begrunnelse: string;
};

/**
 * FaktaBegrunnelseTextField
 */
export const FaktaBegrunnelseTextField = ({
  isReadOnly,
  isSubmittable,
  hasBegrunnelse,
  label,
  hasReadOnlyLabel = false,
  hasVurderingText = false,
  name = 'begrunnelse',
}: Props) => {
  const code = hasVurderingText ? 'FaktaBegrunnelseTextField.Vurdering' : 'FaktaBegrunnelseTextField.BegrunnEndringene';

  const getLabel = () => {
    if (isReadOnly) return hasReadOnlyLabel ? intl.formatMessage({ id: 'FaktaBegrunnelseTextField.Begrunnelse' }) : '';
    return label ?? intl.formatMessage({ id: code });
  };
  return (
    <RawIntlProvider value={intl}>
      {(isSubmittable || hasBegrunnelse) && (
        <TextAreaField
          name={name}
          label={getLabel()}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
        />
      )}
    </RawIntlProvider>
  );
};

const getBegrunnelse = (aksjonspunkt?: Aksjonspunkt[] | Aksjonspunkt): string | undefined | null => {
  if (aksjonspunkt && Array.isArray(aksjonspunkt)) {
    return aksjonspunkt[0]?.begrunnelse ?? '';
  }
  return !!aksjonspunkt && !Array.isArray(aksjonspunkt) && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : '';
};

FaktaBegrunnelseTextField.initialValues = (aksjonspunkt?: Aksjonspunkt[] | Aksjonspunkt): FormValues => ({
  begrunnelse: decodeHtmlEntity(getBegrunnelse(aksjonspunkt) ?? undefined),
});

FaktaBegrunnelseTextField.transformValues = (values: FormValues): TransformedValues => values as TransformedValues;

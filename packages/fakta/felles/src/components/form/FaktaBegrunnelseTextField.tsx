import type { FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { createIntl, decodeHtmlEntity } from '@navikt/ft-utils';

import type { Aksjonspunkt } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type FormValues = {
  begrunnelse: string | undefined;
};

type Props<T extends FieldValues & FormValues> = {
  control: UseControllerProps<T>['control'];
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasBegrunnelse: boolean;
  label?: string;
  hasReadOnlyLabel?: boolean;
  hasVurderingText?: boolean;
  size?: 'small' | 'medium';
};

type TransformedValues = {
  begrunnelse: string;
};

export const FaktaBegrunnelseTextField = <T extends FieldValues & FormValues>({
  control,
  isReadOnly,
  isSubmittable,
  hasBegrunnelse,
  label,
  hasReadOnlyLabel = false,
  hasVurderingText = false,
  size,
}: Props<T>) => {
  const code = hasVurderingText ? 'FaktaBegrunnelseTextField.Vurdering' : 'FaktaBegrunnelseTextField.BegrunnEndringene';

  const getLabel = () => {
    if (isReadOnly) return hasReadOnlyLabel ? intl.formatMessage({ id: 'FaktaBegrunnelseTextField.Begrunnelse' }) : '';
    return label ?? intl.formatMessage({ id: code });
  };

  return (
    <RawIntlProvider value={intl}>
      {(isSubmittable || hasBegrunnelse) && (
        <RhfTextarea
          name={'begrunnelse' as Path<T>}
          control={control}
          label={getLabel()}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
          size={size}
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

FaktaBegrunnelseTextField.transformValues = (values: FormValues): TransformedValues => ({
  begrunnelse: notEmpty(values.begrunnelse),
});

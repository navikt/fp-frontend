import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { decodeHtmlEntity, createIntl } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { Aksjonspunkt } from '@navikt/fp-types';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type OwnProps = {
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasBegrunnelse: boolean;
  label?: string;
  hasReadOnlyLabel?: boolean;
  hasVurderingText?: boolean;
  name?: string;
};

export type FormValues = {
  [key: string]: any;
};

type TransformedValues = {
  begrunnelse: string;
};

interface StaticFunctions {
  buildInitialValues: (aksjonspunkt?: Aksjonspunkt[] | Aksjonspunkt, begrunnelseFieldName?: string) => FormValues;
  transformValues: (values: FormValues, name?: string) => TransformedValues;
}

/**
 * FaktaBegrunnelseTextField
 */
const FaktaBegrunnelseTextField: FunctionComponent<OwnProps> & StaticFunctions = ({
  isReadOnly,
  isSubmittable,
  hasBegrunnelse,
  label,
  hasReadOnlyLabel = false,
  hasVurderingText = false,
  name = 'begrunnelse',
}) => {
  const code = hasVurderingText ? 'FaktaBegrunnelseTextField.Vurdering' : 'FaktaBegrunnelseTextField.BegrunnEndringene';

  const getLabel = () => {
    if (isReadOnly) return hasReadOnlyLabel ? intl.formatMessage({ id: 'FaktaBegrunnelseTextField.Begrunnelse' }) : '';
    return label || intl.formatMessage({ id: code });
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

const getBegrunnelse = (aksjonspunkt?: Aksjonspunkt[] | Aksjonspunkt): string | undefined => {
  if (aksjonspunkt && Array.isArray(aksjonspunkt)) {
    return aksjonspunkt.length > 0 ? aksjonspunkt[0].begrunnelse : '';
  }
  return !!aksjonspunkt && !Array.isArray(aksjonspunkt) ? aksjonspunkt.begrunnelse : '';
};

FaktaBegrunnelseTextField.buildInitialValues = (
  aksjonspunkt?: Aksjonspunkt[] | Aksjonspunkt,
  begrunnelseFieldName = 'begrunnelse',
): FormValues => ({
  [begrunnelseFieldName]: decodeHtmlEntity(getBegrunnelse(aksjonspunkt)),
});

FaktaBegrunnelseTextField.transformValues = (values: FormValues, name = 'begrunnelse'): TransformedValues => ({
  begrunnelse: values[name] as string,
});

export default FaktaBegrunnelseTextField;

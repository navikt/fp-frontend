import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const Arbeidsgiver = ({
  arbeidsgiverOpplysningerPerId,
  arbeidsgiverIdent,
}: {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  arbeidsgiverIdent: string;
}) => {
  const intl = useIntl();
  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.arbeidsgiver.heading' })}>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.arbeidsgiver.navn" />:{' '}
        {arbeidsgiverOpplysningerPerId[arbeidsgiverIdent]?.navn ?? '-'}
      </span>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.arbeidsgiver.underenhet" />: {arbeidsgiverIdent}
      </span>
    </InntektsmeldingInfoBlokk>
  );
};

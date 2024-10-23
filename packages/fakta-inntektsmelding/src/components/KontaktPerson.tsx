import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Inntektsmelding } from '@navikt/fp-types';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const KontaktPerson = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  const intl = useIntl();
  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kontaktperson.heading' })}>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.kontaktperson.navn" />: {inntektsmelding.kontaktpersonNavn}
      </span>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.kontaktperson.telefon" />: {inntektsmelding.kontaktpersonNummer}
      </span>
    </InntektsmeldingInfoBlokk>
  );
};

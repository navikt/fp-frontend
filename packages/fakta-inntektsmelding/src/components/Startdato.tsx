import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { DateLabel } from '@navikt/ft-ui-komponenter';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const Startdato = ({ startDatoPermisjon, ytelse }: { startDatoPermisjon?: string; ytelse: string }) => {
  const intl = useIntl();
  if (!startDatoPermisjon) {
    return null;
  }

  return (
    <InntektsmeldingInfoBlokk
      tittel={intl.formatMessage(
        { id: 'InntektsmeldingFaktaPanel.startDato.heading' },
        {
          ytelse: ytelse.toLowerCase(),
        },
      )}
    >
      <span>{startDatoPermisjon ? <DateLabel dateString={startDatoPermisjon} /> : '-'}</span>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver" />
      </span>
    </InntektsmeldingInfoBlokk>
  );
};

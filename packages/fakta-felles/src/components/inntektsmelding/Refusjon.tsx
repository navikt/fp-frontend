import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { createIntl, formatCurrencyNoKr } from '@navikt/ft-utils';

import { Inntektsmelding } from '@navikt/fp-types';

import { InfoBlokk } from './InfoBlokk';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const Refusjon = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  if (inntektsmelding.refusjonsperioder.length === 0) {
    return (
      <RawIntlProvider value={intl}>
        <InfoBlokk tittel={intl.formatMessage({ id: 'Inntektsmelding.Refusjon.heading' })}>
          <span>
            {inntektsmelding.refusjonPrMnd ? (
              formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)
            ) : (
              <FormattedMessage id="Inntektsmelding.Refusjon.ingen" />
            )}
          </span>
        </InfoBlokk>
      </RawIntlProvider>
    );
  }

  const perioderStigende = [...inntektsmelding.refusjonsperioder].sort(
    (a, b) => new Date(a.fom).getTime() - new Date(b.fom).getTime(),
  );
  return (
    <RawIntlProvider value={intl}>
      <VStack gap="0">
        <span>Krever refusjon</span>
        <span>{formatCurrencyNoKr(inntektsmelding.refusjonPrMnd ?? 0)}</span>
        <span>Endringer i perioden:</span>
        <ul>
          {perioderStigende.map(refusjon => {
            return (
              <li key={refusjon.indexKey}>
                <FormattedMessage
                  id="Inntektsmelding.Refusjon.endring.periode"
                  values={{
                    kroner: formatCurrencyNoKr(refusjon.refusjonsbeløp.verdi),
                    fom: <DateLabel dateString={refusjon.fom} />,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </VStack>
    </RawIntlProvider>
  );
};

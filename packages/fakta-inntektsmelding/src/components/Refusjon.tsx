import React from 'react';
import { Inntektsmelding } from '@navikt/fp-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const Refusjon = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  const intl = useIntl();
  if (inntektsmelding.refusjonsperioder.length === 0) {
    return (
      <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.refusjon.heading' })}>
        <span>
          {inntektsmelding.refusjonPrMnd ? (
            formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)
          ) : (
            <FormattedMessage id="InntektsmeldingFaktaPanel.refusjon.ingen" />
          )}
        </span>
      </InntektsmeldingInfoBlokk>
    );
  }

  const perioderStigende = [...inntektsmelding.refusjonsperioder].sort(
    (a, b) => new Date(a.fom).getTime() - new Date(b.fom).getTime(),
  );
  return (
    <VStack gap="0">
      <span>Krever refusjon</span>
      <span>{formatCurrencyNoKr(inntektsmelding.refusjonPrMnd ?? 0)}</span>
      <span>Endringer i perioden:</span>
      <ul>
        {perioderStigende.map(refusjon => {
          return (
            <li key={refusjon.indexKey}>
              <FormattedMessage
                id="InntektsmeldingFaktaPanel.refusjon.endring.periode"
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
  );
};

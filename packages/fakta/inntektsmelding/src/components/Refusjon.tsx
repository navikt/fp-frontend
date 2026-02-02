import { FormattedMessage, useIntl } from 'react-intl';

import { BeløpLabel, DateLabel } from '@navikt/ft-ui-komponenter';

import type { Inntektsmelding } from '@navikt/fp-types';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const Refusjon = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  const intl = useIntl();
  if (inntektsmelding.refusjonsperioder.length === 0) {
    return (
      <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.refusjon.heading' })}>
        {inntektsmelding.refusjonPrMnd ? (
          <BeløpLabel beløp={inntektsmelding.refusjonPrMnd} />
        ) : (
          <FormattedMessage tagName="span" id="InntektsmeldingFaktaPanel.refusjon.ingen" />
        )}
      </InntektsmeldingInfoBlokk>
    );
  }

  const perioderStigende = [...inntektsmelding.refusjonsperioder].sort(
    (a, b) => new Date(a.fom).getTime() - new Date(b.fom).getTime(),
  );
  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.refusjon.heading' })}>
      <span>Krever refusjon</span>
      <BeløpLabel beløp={inntektsmelding.refusjonPrMnd ?? 0} />
      <span>Endringer i perioden:</span>
      <ul>
        {perioderStigende.map(refusjon => {
          return (
            <li key={refusjon.indexKey}>
              <FormattedMessage
                id="InntektsmeldingFaktaPanel.refusjon.endring.periode"
                values={{
                  kroner: <BeløpLabel beløp={refusjon.refusjonsbeløpMnd?.verdi} />,
                  fom: <DateLabel dateString={refusjon.fom} />,
                }}
              />
            </li>
          );
        })}
      </ul>
    </InntektsmeldingInfoBlokk>
  );
};

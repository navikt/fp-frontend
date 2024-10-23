import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { sorterPerioder } from '@navikt/fp-fakta-felles';
import { VStack } from '@navikt/ds-react';
import { AktivNaturalYtelse, AlleKodeverk, Inntektsmelding } from '@navikt/fp-types';
import { addDaysToDate, formatCurrencyNoKr, TIDENES_ENDE } from '@navikt/ft-utils';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

/**
 * Konverterer liste aktive naturalytelser til liste av bortfalte perioder.
 * Eksempelvis vil disse aktive periodene resultere i denne bortfalte perioden:
 * Aktiv periode: {fomDato: '0001-01-01', tomDato: '2024-09-04'} og {fomDato: '2024-09-27', tomDato: '9999-12-31'}
 * bortfalt periode: {fomDato: '2024-09-05', tomDato: '2024-09-26'}
 */
const konverterAktivePerioderTilBortfaltePerioder = (inntektsmelding: Inntektsmelding) => {
  const gruppertPåType = inntektsmelding.aktiveNaturalytelser.reduce(
    (prev, value) => {
      const type = value.type;
      if (type in prev) {
        return { ...prev, [type]: [...prev[type], value] };
      }

      return { ...prev, [type]: [value] };
    },
    {} as Record<string, AktivNaturalYtelse[]>,
  );

  const bortfalteNaturalytelser = {} as Record<string, AktivNaturalYtelse[]>;

  Object.entries(gruppertPåType).forEach(([key, value]) => {
    const sortert = value
      .sort((a, b) =>
        sorterPerioder(
          { fom: a.periode.fomDato, tom: a.periode.tomDato },
          { fom: b.periode.fomDato, tom: b.periode.tomDato },
        ),
      )
      .reverse();

    bortfalteNaturalytelser[key] = sortert.flatMap((current, index, array) => {
      const next = array[index + 1];

      const nyFom = current.periode.tomDato;
      const nyTom = next?.periode.fomDato;

      if (nyFom === TIDENES_ENDE) {
        return [];
      }

      return [
        {
          ...current,
          periode: {
            fomDato: addDaysToDate(nyFom, 1),
            tomDato: nyTom ? addDaysToDate(nyTom, -1) : TIDENES_ENDE,
          },
        },
      ];
    });
  });

  return bortfalteNaturalytelser;
};

export const BortfalteNaturalYtelser = ({
  inntektsmelding,
  alleKodeverk,
}: {
  inntektsmelding: Inntektsmelding;
  alleKodeverk: AlleKodeverk;
}) => {
  const intl = useIntl();

  const bortfalteNaturalytelser = konverterAktivePerioderTilBortfaltePerioder(inntektsmelding);
  return (
    <InntektsmeldingInfoBlokk
      tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading' })}
    >
      {inntektsmelding.aktiveNaturalytelser.length === 0 ? (
        <span>
          <FormattedMessage id="InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen" />
        </span>
      ) : (
        <VStack>
          {Object.entries(bortfalteNaturalytelser).map(([key, value]) => (
            <VStack key={key}>
              <span>
                {alleKodeverk[KodeverkType.NATURAL_YTELSE_TYPE].find(kodeverk => kodeverk.kode === key)?.navn}
              </span>
              <ul>
                {value.map(naturalytelse => (
                  <React.Fragment key={naturalytelse.indexKey}>
                    <li>
                      <FormattedMessage id="InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom" />{' '}
                      <DateLabel dateString={naturalytelse.periode.fomDato} />
                    </li>
                    {naturalytelse.periode.tomDato !== TIDENES_ENDE && (
                      <li>
                        <FormattedMessage id="InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom" />{' '}
                        <DateLabel dateString={naturalytelse.periode.tomDato} />
                      </li>
                    )}
                    <li>
                      <FormattedMessage id="InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi" />:{' '}
                      {formatCurrencyNoKr(naturalytelse.beloepPerMnd.verdi)}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </VStack>
          ))}
        </VStack>
      )}
    </InntektsmeldingInfoBlokk>
  );
};

import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Spacer, VStack } from '@navikt/ds-react';
import { formatCurrencyNoKr, formatCurrencyWithKr, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@navikt/fp-types';

import { ExpandableContent } from './ExpandableContent';
import { InntektsmeldingerPanel } from './InntektsmeldingerPanel';

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
};

const behandleInntektsposter = (
  skjæringspunktDato: string,
  inntektsposter: Inntektspost[],
): ForenkletInntektspost[] => {
  const skjæringstidspunkt = dayjs(skjæringspunktDato);
  const månedenFørSkjæringspunktet = skjæringstidspunkt.subtract(1, 'month').startOf('month');
  const tolvMånederFørSkjæringspunktet = månedenFørSkjæringspunktet.subtract(12, 'month');

  const poster = [];
  for (
    let måned = månedenFørSkjæringspunktet;
    måned.isAfter(tolvMånederFørSkjæringspunktet);
    måned = måned.subtract(1, 'month')
  ) {
    const månedString = måned.format(ISO_DATE_FORMAT);
    const inntekt = inntektsposter.find(inn => dayjs(inn.fom).startOf('month').format(ISO_DATE_FORMAT) === månedString);
    poster.push({
      beløp: inntekt?.beløp || 0,
      fom: månedString,
    });
  }

  return poster;
};

interface Props {
  saksnummer: string;
  skjæringspunktDato: string;
  inntektsposter?: Inntektspost[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsmeldingerForRad?: Inntektsmelding[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
}

export const ArbeidsforholdInformasjonPanel = ({
  saksnummer,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforholdForRad,
  inntektsmeldingerForRad = [],
  alleKodeverk,
  arbeidsgiverFødselsdato,
  arbeidsgiverNavn,
}: Props) => {
  const sorterteInntektsposter = useMemo(
    () => behandleInntektsposter(skjæringspunktDato, inntektsposter),
    [inntektsposter],
  );

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const visInntektsposter = inntektsposter.length > 0 && inntektsposter.some(i => i.beløp > 0);

  return (
    <>
      <InntektsmeldingerPanel
        saksnummer={saksnummer}
        arbeidsforholdForRad={arbeidsforholdForRad}
        inntektsmeldingerForRad={inntektsmeldingerForRad}
        alleKodeverk={alleKodeverk}
        arbeidsgiverNavn={arbeidsgiverNavn}
        arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
      />

      {!visInntektsposter && (
        <Label size="small">
          <FormattedMessage id="ArbeidsforholdInformasjonPanel.IngenInntekt" />
        </Label>
      )}

      {visInntektsposter && (
        <VStack gap="2">
          <Label size="small">
            <FormattedMessage
              id={
                harEttArbeidsforhold
                  ? 'ArbeidsforholdInformasjonPanel.Inntekter'
                  : 'ArbeidsforholdInformasjonPanel.TotaltInntekter'
              }
            />
          </Label>

          <ExpandableContent
            linkTextExpanded={<FormattedMessage id="ArbeidsforholdInformasjonPanel.FaerreManeder" />}
            linkTextClosed={<FormattedMessage id="ArbeidsforholdInformasjonPanel.TidligereManeder" />}
            renderContent={isExpanded => (
              <VStack maxWidth="250px" paddingBlock="2">
                {sorterteInntektsposter
                  .filter((_inntekt, index) => (isExpanded ? true : index < 3))
                  .map(inntekt => (
                    <HStack gap="2" key={inntekt.fom} style={{ borderBottom: '1px solid var(--a-border-default)' }}>
                      <BodyShort style={{ width: '40px' }}>
                        <FormattedMessage id={`ArbeidsforholdInformasjonPanel.${dayjs(inntekt.fom).month() + 1}`} />
                      </BodyShort>
                      <BodyShort>{dayjs(inntekt.fom).format('YY')}</BodyShort>
                      <Spacer />
                      <BodyShort>{formatCurrencyWithKr(inntekt.beløp)}</BodyShort>
                    </HStack>
                  ))}
              </VStack>
            )}
          />
        </VStack>
      )}
    </>
  );
};

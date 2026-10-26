import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Link, VStack } from '@navikt/ds-react';
import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { AlleKodeverk, Inntektspost } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';
import { InntektsmeldingerPanel } from './InntektsmeldingerPanel';

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
};

interface Props {
  saksnummer: string;
  skjæringstidspunkt: string;
  alleKodeverk: AlleKodeverk;
  radData: ArbeidsforholdOgInntektRadData;
}

const MÅNED_IDER = [
  'ArbeidsforholdInformasjonPanel.1',
  'ArbeidsforholdInformasjonPanel.2',
  'ArbeidsforholdInformasjonPanel.3',
  'ArbeidsforholdInformasjonPanel.4',
  'ArbeidsforholdInformasjonPanel.5',
  'ArbeidsforholdInformasjonPanel.6',
  'ArbeidsforholdInformasjonPanel.7',
  'ArbeidsforholdInformasjonPanel.8',
  'ArbeidsforholdInformasjonPanel.9',
  'ArbeidsforholdInformasjonPanel.10',
  'ArbeidsforholdInformasjonPanel.11',
  'ArbeidsforholdInformasjonPanel.12',
] as const;

export const ArbeidsforholdInformasjonPanel = ({ saksnummer, skjæringstidspunkt, alleKodeverk, radData }: Props) => {
  const [visAlleMåneder, setVisAlleMåneder] = useState(false);

  const { inntektsposter, arbeidsforholdForRad } = radData;
  const sorterteInntektsposter = behandleInntektsposter(skjæringstidspunkt, inntektsposter);

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  return (
    <VStack gap="space-32">
      <InntektsmeldingerPanel saksnummer={saksnummer} alleKodeverk={alleKodeverk} radData={radData} />

      <LabeledValue
        size="small"
        fieldType="component"
        label={
          <FormattedMessage
            id={
              harEttArbeidsforhold
                ? 'ArbeidsforholdInformasjonPanel.Inntekter'
                : 'ArbeidsforholdInformasjonPanel.TotaltInntekter'
            }
          />
        }
        value={
          inntektsposter.length > 0 ? (
            <VStack gap="space-4">
              {sorterteInntektsposter
                .filter((_inntekt, index) => (visAlleMåneder ? true : index < 3))
                .map(inntekt => (
                  <HStack justify="space-between" asChild key={inntekt.fom} className="w-40">
                    <BodyShort size="small">
                      <HStack gap="space-4" justify="space-between" className="w-18" as="span">
                        <FormattedMessage tagName="span" id={MÅNED_IDER[dayjs(inntekt.fom).month()]} />
                        <span>{dayjs(inntekt.fom).year()}</span>
                      </HStack>
                      <BeløpLabel beløp={inntekt.beløp} kr />
                    </BodyShort>
                  </HStack>
                ))}

              <BodyShort size="small">
                <Link
                  onClick={e => {
                    e.preventDefault();
                    setVisAlleMåneder(!visAlleMåneder);
                  }}
                  href=""
                >
                  {visAlleMåneder ? (
                    <span>
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.FaerreManeder" />
                      <ChevronUpIcon aria-hidden className="inline" />
                    </span>
                  ) : (
                    <span>
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.TidligereManeder" />
                      <ChevronDownIcon aria-hidden className="inline" />
                    </span>
                  )}
                </Link>
              </BodyShort>
            </VStack>
          ) : (
            <BodyShort size="small" textColor="subtle">
              <FormattedMessage id="ArbeidsforholdInformasjonPanel.IngenInntekt" />
            </BodyShort>
          )
        }
      />
    </VStack>
  );
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

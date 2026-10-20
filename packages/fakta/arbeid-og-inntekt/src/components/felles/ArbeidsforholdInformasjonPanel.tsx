import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, Link, Spacer, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { AlleKodeverk, Inntektspost } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';
import { InntektsmeldingerPanel } from './InntektsmeldingerPanel';

import styles from './arbeidsforholdInformasjonPanel.module.css';

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

export const ArbeidsforholdInformasjonPanel = ({ saksnummer, skjæringstidspunkt, alleKodeverk, radData }: Props) => {
  const [visAlleMåneder, setVisAlleMåneder] = useState(false);

  const { inntektsposter, arbeidsforholdForRad } = radData;
  const sorterteInntektsposter = behandleInntektsposter(skjæringstidspunkt, inntektsposter);

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  return (
    <VStack gap="space-32">
      <InntektsmeldingerPanel saksnummer={saksnummer} alleKodeverk={alleKodeverk} radData={radData} />
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage
            id={
              harEttArbeidsforhold
                ? 'ArbeidsforholdInformasjonPanel.Inntekter'
                : 'ArbeidsforholdInformasjonPanel.TotaltInntekter'
            }
          />
        </Label>
        {inntektsposter.length === 0 && (
          <BodyShort size="small" textColor="subtle">
            <FormattedMessage id="ArbeidsforholdInformasjonPanel.IngenInntekt" />
          </BodyShort>
        )}
        {inntektsposter.length > 0 && (
          <VStack gap="space-4">
            {sorterteInntektsposter
              .filter((_inntekt, index) => (visAlleMåneder ? true : index < 3))
              .map(inntekt => (
                <HStack gap="space-8" className={styles['bredde']} key={inntekt.fom}>
                  <BodyShort size="small">
                    <FormattedMessage id={`ArbeidsforholdInformasjonPanel.${dayjs(inntekt.fom).month() + 1}`} />
                  </BodyShort>
                  <BodyShort size="small">{dayjs(inntekt.fom).year()}</BodyShort>
                  <Spacer />
                  <BodyShort size="small">
                    <BeløpLabel beløp={inntekt.beløp} />
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
                <FormattedMessage
                  tagName="span"
                  id={
                    visAlleMåneder
                      ? 'ArbeidsforholdInformasjonPanel.FaerreManeder'
                      : 'ArbeidsforholdInformasjonPanel.TidligereManeder'
                  }
                />
                {visAlleMåneder ? (
                  <ChevronUpIcon fontSize="1.5rem" aria-hidden />
                ) : (
                  <ChevronDownIcon fontSize="1.5rem" aria-hidden />
                )}
              </Link>
            </BodyShort>
          </VStack>
        )}
      </VStack>
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

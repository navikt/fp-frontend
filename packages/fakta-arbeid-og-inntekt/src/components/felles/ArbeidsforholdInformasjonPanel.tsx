import React, { FunctionComponent, useState, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { Label, BodyShort, Link, VStack, HStack, Spacer } from '@navikt/ds-react';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import InntektsmeldingerPanel from './InntektsmeldingerPanel';

import styles from './arbeidsforholdInformasjonPanel.module.css';

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
};

const EMPTY_ARRAY = [] as Inntektsmelding[];

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

interface OwnProps {
  saksnummer: string;
  skjæringspunktDato: string;
  inntektsposter?: Inntektspost[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsmeldingerForRad?: Inntektsmelding[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverFødselsdato?: string;
}

const ArbeidsforholdInformasjonPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforholdForRad,
  inntektsmeldingerForRad = EMPTY_ARRAY,
  alleKodeverk,
  arbeidsgiverFødselsdato,
}) => {
  const [visAlleMåneder, toggleMånedvisning] = useState(false);

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
        arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
      />
      <VerticalSpacer thirtyTwoPx />
      {visInntektsposter && (
        <>
          <Label size="small">
            <FormattedMessage
              id={
                harEttArbeidsforhold
                  ? 'ArbeidsforholdInformasjonPanel.Inntekter'
                  : 'ArbeidsforholdInformasjonPanel.TotaltInntekter'
              }
            />
          </Label>
          <VerticalSpacer fourPx />
          <VStack>
            {sorterteInntektsposter
              .filter((_inntekt, index) => (visAlleMåneder ? true : index < 3))
              .map(inntekt => (
                <HStack gap="2" className={styles.bredde} key={inntekt.fom}>
                  <BodyShort size="small">
                    <FormattedMessage id={`ArbeidsforholdInformasjonPanel.${dayjs(inntekt.fom).month() + 1}`} />
                  </BodyShort>
                  <BodyShort size="small">{dayjs(inntekt.fom).year()}</BodyShort>
                  <Spacer />
                  <BodyShort size="small">{formatCurrencyNoKr(inntekt.beløp)}</BodyShort>
                </HStack>
              ))}
          </VStack>
          <VerticalSpacer fourPx />
          <Link
            onClick={e => {
              e.preventDefault();
              toggleMånedvisning(!visAlleMåneder);
            }}
            href=""
          >
            <span>
              <BodyShort size="small" className={styles.inline}>
                <FormattedMessage
                  id={
                    visAlleMåneder
                      ? 'ArbeidsforholdInformasjonPanel.FaerreManeder'
                      : 'ArbeidsforholdInformasjonPanel.TidligereManeder'
                  }
                />
              </BodyShort>
            </span>
            {visAlleMåneder ? <ChevronUpIcon className={styles.arrow} /> : <ChevronDownIcon className={styles.arrow} />}
          </Link>
        </>
      )}
      {!visInntektsposter && (
        <Label size="small">
          <FormattedMessage id="ArbeidsforholdInformasjonPanel.IngenInntekt" />
        </Label>
      )}
      <VerticalSpacer thirtyTwoPx />
    </>
  );
};

export default ArbeidsforholdInformasjonPanel;

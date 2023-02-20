import React, {
  FunctionComponent, useState, useMemo,
} from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { Label, BodyShort, Link } from '@navikt/ds-react';

import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  AlleKodeverk, AoIArbeidsforhold, Inntektsmelding, Inntektspost,
} from '@navikt/fp-types';
import {
  Image, FlexColumn, FlexContainer, FlexRow, VerticalSpacer, FloatRight,
} from '@navikt/ft-ui-komponenter';

import pilOppIkonUrl from '../../images/pil_opp.svg';
import pilNedIkonUrl from '../../images/pil_ned.svg';
import InntektsmeldingerPanel from './InntektsmeldingerPanel';

import styles from './arbeidsforholdInformasjonPanel.less';

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
}

const EMPTY_ARRAY = [];

const behandleInntektsposter = (
  skjæringspunktDato: string,
  inntektsposter: Inntektspost[],
): ForenkletInntektspost[] => {
  const skjæringstidspunkt = dayjs(skjæringspunktDato);
  const månedenFørSkjæringspunktet = skjæringstidspunkt.subtract(1, 'month').startOf('month');
  const tolvMånederFørSkjæringspunktet = månedenFørSkjæringspunktet.subtract(12, 'month');

  const poster = [];
  for (let måned = månedenFørSkjæringspunktet; måned.isAfter(tolvMånederFørSkjæringspunktet); måned = måned.subtract(1, 'month')) {
    const månedString = måned.format(ISO_DATE_FORMAT);
    const inntekt = inntektsposter.find((inn) => dayjs(inn.fom).startOf('month').format(ISO_DATE_FORMAT) === månedString);
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
}

const ArbeidsforholdInformasjonPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforholdForRad,
  inntektsmeldingerForRad = EMPTY_ARRAY,
  alleKodeverk,
}) => {
  const [visAlleMåneder, toggleMånedvisning] = useState(false);

  const sorterteInntektsposter = useMemo(() => behandleInntektsposter(skjæringspunktDato, inntektsposter), [inntektsposter]);

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const visInntektsposter = inntektsposter.length > 0 && inntektsposter.some((i) => i.beløp > 0);

  return (
    <>
      <InntektsmeldingerPanel
        saksnummer={saksnummer}
        arbeidsforholdForRad={arbeidsforholdForRad}
        inntektsmeldingerForRad={inntektsmeldingerForRad}
        alleKodeverk={alleKodeverk}
      />
      <VerticalSpacer thirtyTwoPx />
      {visInntektsposter && (
        <>
          <Label size="small">
            <FormattedMessage id={harEttArbeidsforhold ? 'ArbeidsforholdInformasjonPanel.Inntekter' : 'ArbeidsforholdInformasjonPanel.TotaltInntekter'} />
          </Label>
          <VerticalSpacer fourPx />
          <FlexContainer>
            {sorterteInntektsposter.filter((_inntekt, index) => (visAlleMåneder ? true : index < 3)).map((inntekt) => (
              <FlexRow key={inntekt.fom}>
                <FlexColumn className={styles.maanedBredde}>
                  <BodyShort size="small">
                    <FormattedMessage id={`ArbeidsforholdInformasjonPanel.${dayjs(inntekt.fom).month() + 1}`} />
                  </BodyShort>
                </FlexColumn>
                <FlexColumn className={styles.aarBredde}>
                  <BodyShort size="small">
                    {dayjs(inntekt.fom).year()}
                  </BodyShort>
                </FlexColumn>
                <FlexColumn className={styles.belopBredde}>
                  <FloatRight>
                    <BodyShort size="small">
                      {formatCurrencyNoKr(inntekt.beløp)}
                    </BodyShort>
                  </FloatRight>
                </FlexColumn>
              </FlexRow>
            ))}
          </FlexContainer>
          <VerticalSpacer fourPx />
          <Link
            onClick={(e) => {
              e.preventDefault();
              toggleMånedvisning(!visAlleMåneder);
            }}
            href=""
          >
            <span>
              <BodyShort size="small" className={styles.inline}>
                <FormattedMessage id={visAlleMåneder ? 'ArbeidsforholdInformasjonPanel.FaerreManeder' : 'ArbeidsforholdInformasjonPanel.TidligereManeder'} />
              </BodyShort>
            </span>
            <Image className={styles.arrow} src={visAlleMåneder ? pilOppIkonUrl : pilNedIkonUrl} />
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

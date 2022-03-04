import React, {
  FunctionComponent, useState, useMemo,
} from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import Lenke from 'nav-frontend-lenker';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import {
  Image, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/fp-react-components';

import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import { AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@fpsak-frontend/types';
import { VerticalSpacer, FloatRight } from '@fpsak-frontend/shared-components';

import styles from './arbeidsforholdInformasjonPanel.less';
import InntektsmeldingerTest from './InntektsmeldingerTest';

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
  const sluttPeriode = skjæringstidspunkt.startOf('month');
  const startPeriode = sluttPeriode.subtract(12, 'month');

  const poster = [];
  for (let måned = sluttPeriode; måned.isAfter(startPeriode); måned = måned.subtract(1, 'month')) {
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
}

const ArbeidsforholdInformasjonPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforholdForRad,
  inntektsmeldingerForRad = EMPTY_ARRAY,
}) => {
  const [visAlleMåneder, toggleMånedvisning] = useState(false);

  const sorterteInntektsposter = useMemo(() => behandleInntektsposter(skjæringspunktDato, inntektsposter), [inntektsposter]);

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  return (
    <>
      <InntektsmeldingerTest
        saksnummer={saksnummer}
        arbeidsforholdForRad={arbeidsforholdForRad}
        inntektsmeldingerForRad={inntektsmeldingerForRad}
      />
      <VerticalSpacer thirtyTwoPx />
      {inntektsposter.length > 0 && (
        <>
          <Element>
            <FormattedMessage id={harEttArbeidsforhold ? 'ArbeidsforholdInformasjonPanel.Inntekter' : 'ArbeidsforholdInformasjonPanel.TotaltInntekter'} />
          </Element>
          <VerticalSpacer fourPx />
          <FlexContainer>
            {sorterteInntektsposter.filter((_inntekt, index) => (visAlleMåneder ? true : index < 3)).map((inntekt) => (
              <FlexRow key={inntekt.fom}>
                <FlexColumn className={styles.maanedBredde}>
                  <Normaltekst>
                    <FormattedMessage id={`ArbeidsforholdInformasjonPanel.${dayjs(inntekt.fom).month() + 1}`} />
                  </Normaltekst>
                </FlexColumn>
                <FlexColumn className={styles.aarBredde}>
                  <Normaltekst>
                    {dayjs(inntekt.fom).year()}
                  </Normaltekst>
                </FlexColumn>
                <FlexColumn className={styles.belopBredde}>
                  <FloatRight>
                    <Normaltekst>
                      {formatCurrencyNoKr(inntekt.beløp)}
                    </Normaltekst>
                  </FloatRight>
                </FlexColumn>
              </FlexRow>
            ))}
          </FlexContainer>
          <VerticalSpacer fourPx />
          <Lenke
            onClick={(e) => {
              e.preventDefault();
              toggleMånedvisning(!visAlleMåneder);
            }}
            href=""
          >
            <span>
              <Normaltekst className={styles.inline}>
                <FormattedMessage id={visAlleMåneder ? 'ArbeidsforholdInformasjonPanel.FaerreManeder' : 'ArbeidsforholdInformasjonPanel.TidligereManeder'} />
              </Normaltekst>
            </span>
            <Image className={styles.arrow} src={visAlleMåneder ? pilOppIkonUrl : pilNedIkonUrl} />
          </Lenke>
        </>
      )}
      {inntektsposter.length === 0 && (
        <Element>
          <FormattedMessage id="ArbeidsforholdInformasjonPanel.IngenInntekt" />
        </Element>
      )}
      <VerticalSpacer thirtyTwoPx />
    </>
  );
};

export default ArbeidsforholdInformasjonPanel;

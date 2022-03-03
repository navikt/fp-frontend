import React, {
  FunctionComponent, useState, useMemo, Fragment,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import Lenke from 'nav-frontend-lenker';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import {
  Image, FlexColumn, FlexContainer, FlexRow, Tooltip,
} from '@navikt/fp-react-components';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import { hentDokumentLenke } from '@fpsak-frontend/konstanter';
import dokumentSvg from '@fpsak-frontend/assets/images/dokument_filled.svg';
import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import { formatCurrencyNoKr, ISO_DATE_FORMAT, TIDENES_ENDE } from '@fpsak-frontend/utils';
import { AoIArbeidsforhold, Inntektsmelding, Inntektspost } from '@fpsak-frontend/types';
import {
  VerticalSpacer, FloatRight, PeriodLabel, AvsnittSkiller, DateTimeLabel,
} from '@fpsak-frontend/shared-components';

import { Column, Row } from 'nav-frontend-grid';
import styles from './arbeidsforholdInformasjonPanel.less';

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
}

const erMatch = (
  arbeidsforhold: AoIArbeidsforhold,
  inntektsmelding: Inntektsmelding,
): boolean => inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
  && (!inntektsmelding.internArbeidsforholdId || inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const delOppAId = (eksternArbeidsforholdId: string) => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, (i * 25) + 25));
  return <p>{oppdeltId.join('-')}</p>;
};

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
  inntektsmeldingerForRad: Inntektsmelding[];
}

const ArbeidsforholdInformasjonPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforholdForRad,
  inntektsmeldingerForRad,
}) => {
  const intl = useIntl();
  const [visAlleMåneder, toggleMånedvisning] = useState(false);

  const sorterteInntektsposter = useMemo(() => behandleInntektsposter(skjæringspunktDato, inntektsposter), [inntektsposter]);

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  return (
    <>
      {!harEttArbeidsforhold && (
        <>
          <VerticalSpacer eightPx />
          <AvsnittSkiller dividerParagraf />
          <VerticalSpacer sixteenPx />
          {arbeidsforholdForRad.map((a) => {
            const inntektsmelding = inntektsmeldingerForRad.find((i) => erMatch(a, i));
            return (
              <React.Fragment key={`${a.arbeidsgiverIdent}${a.internArbeidsforholdId}`}>
                <Row>
                  <Column xs="8">
                    <FlexRow>
                      <FlexColumn>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" /></Element>
                      </FlexColumn>
                      <FlexColumn>
                        {a.eksternArbeidsforholdId.length < 50 && (
                          <Normaltekst>{a.eksternArbeidsforholdId}</Normaltekst>
                        )}
                        {a.eksternArbeidsforholdId.length >= 50 && (
                          <Tooltip
                            content={delOppAId(a.eksternArbeidsforholdId)}
                            alignTop
                          >
                            <Normaltekst>{`${a.eksternArbeidsforholdId.substring(0, 50)}...`}</Normaltekst>
                          </Tooltip>
                        )}
                      </FlexColumn>
                    </FlexRow>
                    <VerticalSpacer fourPx />
                    <FlexRow>
                      <FlexColumn>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" /></Element>
                      </FlexColumn>
                      <FlexColumn>
                        <Normaltekst>
                          <PeriodLabel dateStringFom={a.fom} dateStringTom={a.tom !== TIDENES_ENDE ? a.tom : undefined} />
                        </Normaltekst>
                      </FlexColumn>
                    </FlexRow>
                    <VerticalSpacer fourPx />
                    <FlexRow>
                      <FlexColumn>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" /></Element>
                      </FlexColumn>
                      <FlexColumn>
                        <Normaltekst>{`${a.stillingsprosent}%`}</Normaltekst>
                      </FlexColumn>
                    </FlexRow>
                  </Column>
                  {inntektsmelding && (
                    <Column xs="4">
                      <FloatRight>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.ImMottatt" /></Element>
                      </FloatRight>
                      <FloatRight>
                        <Normaltekst><DateTimeLabel dateTimeString={inntektsmelding.motattDato} useNewFormat /></Normaltekst>
                      </FloatRight>
                      <FloatRight>
                        <VerticalSpacer eightPx />
                        <Lenke href={hentDokumentLenke(saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId)} target="_blank">
                          <span>
                            <Normaltekst className={styles.inline}>
                              <FormattedMessage id="ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding" />
                            </Normaltekst>
                          </span>
                          <Image src={dokumentSvg} />
                        </Lenke>
                      </FloatRight>
                    </Column>
                  )}
                  {!inntektsmelding && (
                    <Column xs="4">
                      <FloatRight>
                        <Image className={styles.aksjonpunktImage} alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={advarselIkonUrl} />
                        <div className={styles.ikkeMottatt}>
                          <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.ImIkkeMottatt" /></Element>
                        </div>
                      </FloatRight>
                    </Column>
                  )}
                </Row>
                <VerticalSpacer sixteenPx />
                <AvsnittSkiller dividerParagraf />
                <VerticalSpacer sixteenPx />
              </React.Fragment>
            );
          })}
        </>
      )}
      <VerticalSpacer eightPx />
      {harEttArbeidsforhold && (
        <FlexRow>
          <FlexColumn>
            <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" /></Element>
          </FlexColumn>
          <FlexColumn>
            <Normaltekst>{`${arbeidsforholdForRad[0].stillingsprosent}%`}</Normaltekst>
          </FlexColumn>
        </FlexRow>
      )}
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

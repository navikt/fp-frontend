import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import {
  HorizontalRectSeries, FlexibleWidthXYPlot,
} from 'react-vis';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexRow, VerticalSpacer, AvsnittSkiller,
} from '@fpsak-frontend/shared-components';
import moment from 'moment';

import {
  Inntektsgrunnlag,
  InntektsgrunnlagInntekt,
  InntektsgrunnlagMåned,
} from '@fpsak-frontend/types';
import inntektAktivitetType from '@fpsak-frontend/kodeverk/src/inntektAktivitetType';
import styles from './sammenligningsgrunnlagAOrdningen.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import Lesmerpanel from '../redesign/LesmerPanel';

const grafFargeAT = '#99bdcd';
const grafFargeFL = '#c1b5d0';
const grafFargeYtelse = '#C6C2BF';
const grafBorderFarge = '#0c5472';

const finnAntallStatuser = (statuser: Inntektstyper): number => Object.values(statuser).reduce((a, status) => a + (status === true ? 1 : 0), 0);

type InntektKolonneBredde = '1' | '2' | '3';

const arbeidsinntektBredde = (statuser: Inntektstyper): InntektKolonneBredde => {
  const unikeStatuser = finnAntallStatuser(statuser);
  if (unikeStatuser === 1) {
    return '3';
  }
  if (unikeStatuser === 2) {
    return '2';
  }
  return '1';
};

const frilansInntektBredde = (statuser: Inntektstyper): InntektKolonneBredde => {
  const unikeStatuser = finnAntallStatuser(statuser);
  if (unikeStatuser === 1) {
    return '3';
  }
  if (unikeStatuser === 3) {
    return '1';
  }
  return statuser.harArbeidsinntekt ? '1' : '2';
};

const ytelseInntektBredde = (statuser: Inntektstyper): InntektKolonneBredde => {
  const unikeStatuser = finnAntallStatuser(statuser);
  if (unikeStatuser === 1) {
    return '3';
  }
  return '1';
};

const finnInntektForStatus = (andeler: InntektsgrunnlagInntekt[], status?: string): number => {
  if (!andeler || andeler.length === 0) {
    return 0;
  }
  if (status) {
    return andeler.filter((andel) => andel.inntektAktivitetType.kode === status).reduce((acc, atAndel) => acc + atAndel.beløp, 0);
  }
  return andeler.reduce((acc, atAndel) => acc + atAndel.beløp, 0);
};

const finnMaksVerdien = (andeler: InntektsgrunnlagMåned[],
  skjeringstidspunktDato: string): number => {
  if (andeler) {
    let radMax = 0;
    for (let step = 12; step > 0; step -= 1) {
      const yearMont = moment(skjeringstidspunktDato, ISO_DATE_FORMAT).subtract(step, 'M').format('YYYYMM');
      const korrektMåned = andeler.find((andel) => moment(andel.fom, ISO_DATE_FORMAT).format('YYYYMM') === yearMont);
      const sumMåned = korrektMåned ? finnInntektForStatus(korrektMåned.inntekter) : 0;
      radMax = radMax < sumMåned ? sumMåned : radMax;
    }
    return radMax;
  }
  return null;
};

const lagSumRad = (månederMedInntekter: InntektsgrunnlagMåned[], relevanteStatuser: Inntektstyper): ReactElement => {
  const sumATAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektAktivitetType.kode === inntektAktivitetType.ARBEID)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  const sumFLAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektAktivitetType.kode === inntektAktivitetType.FRILANS)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  const sumYtelseAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektAktivitetType.kode === inntektAktivitetType.YTELSE)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  return (
    <>
      <Row>
        <Column xs="12" className={styles.aarDevider} />
      </Row>
      <Row>
        <Column xs="8">
          <Normaltekst className={beregningStyles.semiBoldText}>
            <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel" />
          </Normaltekst>
        </Column>
        {relevanteStatuser.harArbeidsinntekt && (
          <Column xs={arbeidsinntektBredde(relevanteStatuser)} className={beregningStyles.colMaanedText}>
            <Element className={beregningStyles.semiBoldText}>{formatCurrencyNoKr(sumATAndeler)}</Element>
          </Column>
        )}
        {relevanteStatuser.harFrilansinntekt && (
          <Column xs={frilansInntektBredde(relevanteStatuser)} className={beregningStyles.colMaanedText}>
            <Element>{formatCurrencyNoKr(sumFLAndeler)}</Element>
          </Column>
        )}
        {relevanteStatuser.harYtelseinntekt && (
          <Column xs={ytelseInntektBredde(relevanteStatuser)} className={beregningStyles.colMaanedText}>
            <Element>{formatCurrencyNoKr(sumYtelseAndeler)}</Element>
          </Column>
        )}
        <Column xs="1" className={beregningStyles.rightAlignElementNoWrap} />
      </Row>
    </>
  );
};
const lagRad = (relevanteStatuser: Inntektstyper, månedMedInntekter: InntektsgrunnlagMåned, maksVerdi: number, aarMaaned: string): ReactElement => {
  const dato = `${aarMaaned}01`;
  const maanedNavn = moment(dato, ISO_DATE_FORMAT).format('MMM');
  const formattedMaaned = maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1, 3);
  const maaned = moment(dato, ISO_DATE_FORMAT).format('MM');
  const aar = moment(dato, ISO_DATE_FORMAT).format('YYYY');
  const atBeløp = finnInntektForStatus(månedMedInntekter?.inntekter, inntektAktivitetType.ARBEID);
  const flBeløp = finnInntektForStatus(månedMedInntekter?.inntekter, inntektAktivitetType.FRILANS);
  const ytelseBeløp = finnInntektForStatus(månedMedInntekter?.inntekter, inntektAktivitetType.YTELSE);
  const rest = Math.max(maksVerdi - atBeløp - flBeløp - ytelseBeløp, 0);
  return (
    <React.Fragment key={`${dato}wrapper`}>
      { maaned === '01' && (
        <Row>
          <Column xs="12" className={styles.aarDevider} />
        </Row>
      )}
      <Row>
        <Column xs="1" className={styles.maanedColumn}>
          <Undertekst>{formattedMaaned}</Undertekst>
        </Column>
        <Column xs="7" className={styles.chartColumn}>
          <FlexibleWidthXYPlot height={10} stackBy="x" yDomain={[1, 1]}>
            {relevanteStatuser.harArbeidsinntekt && (
              <HorizontalRectSeries
                data={[{ y0: 0.5, y: 1, x: atBeløp }]}
                fill={grafFargeAT}
                stroke={grafBorderFarge}
              />
            )}
            {relevanteStatuser.harFrilansinntekt && (
              <HorizontalRectSeries
                data={[{ y0: 0.5, y: 1, x: flBeløp }]}
                fill={grafFargeFL}
                stroke={grafBorderFarge}
              />
            )}
            {relevanteStatuser.harYtelseinntekt && (
              <HorizontalRectSeries
                data={[{ y0: 0.5, y: 1, x: ytelseBeløp }]}
                fill={grafFargeYtelse}
                stroke={grafBorderFarge}
              />
            )}
            <HorizontalRectSeries
              data={[{ y0: 0.5, y: 1, x: rest }]}
              fill="transparent"
              stroke="transparent"
            />
          </FlexibleWidthXYPlot>

        </Column>
        {relevanteStatuser.harArbeidsinntekt && (
          <Column xs={arbeidsinntektBredde(relevanteStatuser)} className={beregningStyles.colMaanedText}>
            <Undertekst>{formatCurrencyNoKr(atBeløp)}</Undertekst>
          </Column>
        )}
        {relevanteStatuser.harFrilansinntekt && (
          <Column
            xs={frilansInntektBredde(relevanteStatuser)}
            className={relevanteStatuser.harArbeidsinntekt ? beregningStyles.colAarText : beregningStyles.colMaanedText}
          >
            <Undertekst>{formatCurrencyNoKr(flBeløp)}</Undertekst>
          </Column>
        )}
        {relevanteStatuser.harYtelseinntekt && (
          <Column
            xs={ytelseInntektBredde(relevanteStatuser)}
            className={relevanteStatuser.harArbeidsinntekt ? beregningStyles.colAarText : beregningStyles.colMaanedText}
          >
            <Undertekst>{formatCurrencyNoKr(ytelseBeløp)}</Undertekst>
          </Column>
        )}
        <Column xs="1" className={beregningStyles.rightAlignElementNoWrap}>
          { (maaned === '12' || maaned === '01') && (
            <Undertekst>{aar}</Undertekst>
          )}
        </Column>
      </Row>
    </React.Fragment>
  );
};
const lagRader = (andeler: InntektsgrunnlagMåned[], relevanteStatuser: Inntektstyper, skjeringstidspunktDato: string): ReactElement[] => {
  const rows = [];
  const maksVerdi = finnMaksVerdien(andeler, skjeringstidspunktDato);
  for (let step = 12; step > 0; step -= 1) {
    const yearMont = moment(skjeringstidspunktDato, ISO_DATE_FORMAT).subtract(step, 'M').format('YYYYMM');
    const månedMedInntekter = andeler.find((andel) => moment(andel.fom, ISO_DATE_FORMAT).format('YYYYMM') === yearMont);
    rows.push(lagRad(relevanteStatuser, månedMedInntekter, maksVerdi, yearMont));
  }
  return rows;
};

const lagOverskrift = (): ReactElement => (
  <>
    <FlexRow key="SamenenligningsGrunnlagOverskrift">
      <FlexColumn>
        <Element className={beregningStyles.avsnittOverskrift}>
          <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel" />
        </Element>
      </FlexColumn>
    </FlexRow>
    <VerticalSpacer eightPx />
    <FlexRow>
      <FlexColumn>
        <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress" />
      </FlexColumn>
    </FlexRow>
  </>
);

const finnesInntektAvType = (måneder: InntektsgrunnlagMåned[], status: string): boolean => måneder.flatMap(((p) => p.inntekter))
  .some((innt) => innt.inntektAktivitetType.kode === status);

type OwnProps = {
  sammenligningsGrunnlagInntekter: Inntektsgrunnlag;
  skjeringstidspunktDato: string;
};

type Inntektstyper = {
  harFrilansinntekt: boolean;
  harArbeidsinntekt: boolean;
  harYtelseinntekt: boolean;
}

export const SammenligningsgrunnlagAOrdningenImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  sammenligningsGrunnlagInntekter, skjeringstidspunktDato, intl,
}) => {
  const måneder = sammenligningsGrunnlagInntekter?.måneder;
  if (!måneder || måneder.length === 0 || !skjeringstidspunktDato) {
    return null;
  }
  const relevanteStatuser = {
    harFrilansinntekt: useMemo(() => finnesInntektAvType(måneder, inntektAktivitetType.FRILANS), [måneder]),
    harArbeidsinntekt: useMemo(() => finnesInntektAvType(måneder, inntektAktivitetType.ARBEID), [måneder]),
    harYtelseinntekt: useMemo(() => finnesInntektAvType(måneder, inntektAktivitetType.YTELSE), [måneder]),
  } as Inntektstyper;
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder />
      <Lesmerpanel
        className={styles.lesMer}
        intro={lagOverskrift()}
        lukkTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SkjulMaaneder' })}
        apneTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.VisMaaneder' })}
        defaultApen
      >
        <Row>
          <Column xs="1" className={styles.maanedColumn} />
          <Column xs="7" />
          {relevanteStatuser.harArbeidsinntekt
          && (
            <Column xs={arbeidsinntektBredde(relevanteStatuser)} className={beregningStyles.colMaanedText}>
              <Undertekst className={beregningStyles.semiBoldText}>
                <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid" />
              </Undertekst>
            </Column>
          )}
          {relevanteStatuser.harFrilansinntekt
          && (
            <Column xs={frilansInntektBredde(relevanteStatuser)} className={beregningStyles.colAarText}>
              <Undertekst className={beregningStyles.semiBoldText}>
                <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans" />
              </Undertekst>
            </Column>
          )}
          {relevanteStatuser.harYtelseinntekt
          && (
            <Column xs={ytelseInntektBredde(relevanteStatuser)} className={beregningStyles.colMaanedText}>
              <Undertekst className={beregningStyles.semiBoldText}>
                <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse" />
              </Undertekst>
            </Column>
          )}
          <Column xs="1" />
        </Row>
        {lagRader(måneder, relevanteStatuser, skjeringstidspunktDato)}

      </Lesmerpanel>
      {lagSumRad(måneder, relevanteStatuser)}
    </>
  );
};

export default injectIntl(SammenligningsgrunnlagAOrdningenImpl);

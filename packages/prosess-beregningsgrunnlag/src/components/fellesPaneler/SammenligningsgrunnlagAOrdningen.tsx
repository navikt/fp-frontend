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
import inntektTyper from '@fpsak-frontend/kodeverk/src/inntektTyper';
import LinkTilEksterntSystem from '../redesign/LinkTilEksterntSystem';
import styles from './sammenligningsgrunnlagAOrdningen.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import Lesmerpanel from '../redesign/LesmerPanel';

const grafFargeAT = '#99bdcd';
const grafFargeFL = '#c1b5d0';
const grafFargeYtelse = '#C6C2BF';
const grafBorderFarge = '#0c5472';

const finnInntektForStatus = (andeler: InntektsgrunnlagInntekt[], status?: string): number => {
  if (!andeler || andeler.length === 0) {
    return 0;
  }
  if (status) {
    return andeler.filter((andel) => andel.inntektType.kode === status).reduce((acc, atAndel) => acc + atAndel.beløp, 0);
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
const finnRestVerdienFraRelevanteAndeler = (relevanteStatuser: Inntektstyper, maks: number, atBelop: number, flBelop: number): number => {
  if (relevanteStatuser.harFrilansinntekt && relevanteStatuser.harArbeidsinntekt) {
    return maks - (atBelop) - (flBelop);
  }
  if (relevanteStatuser.harArbeidsinntekt) return maks - atBelop;
  if (relevanteStatuser.harFrilansinntekt) return maks - flBelop;
  return null;
};

const lagSumRad = (månederMedInntekter: InntektsgrunnlagMåned[], relevanteStatuser: Inntektstyper): ReactElement => {
  const sumATAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektType.kode === inntektTyper.ARBEID)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  const sumFLAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektType.kode === inntektTyper.FRILANS)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  const sumYtelseAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektType.kode === inntektTyper.YTELSE)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);

  return (
    <>
      <Row>
        <Column
          xs={relevanteStatuser.harArbeidsinntekt && relevanteStatuser.harFrilansinntekt ? '11' : '9'}
          className={beregningStyles.noPaddingRight}
        >
          <div className={beregningStyles.colDevider} />
        </Column>
      </Row>
      <Row>
        <Column xs="8">
          <Normaltekst className={beregningStyles.semiBoldText}>
            <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel" />
          </Normaltekst>
        </Column>
        {relevanteStatuser.harArbeidsinntekt && (
          <Column xs="1" className={beregningStyles.colMaanedText}>
            <Element className={beregningStyles.semiBoldText}>{formatCurrencyNoKr(sumATAndeler)}</Element>
          </Column>
        )}
        {relevanteStatuser.harFrilansinntekt && (
          <Column xs="1" className={beregningStyles.colMaanedText}>
            <Element>{formatCurrencyNoKr(sumFLAndeler)}</Element>
          </Column>
        )}
        {relevanteStatuser.harYtelseinntekt && (
          <Column xs="1" className={beregningStyles.colMaanedText}>
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
  const atBeløp = finnInntektForStatus(månedMedInntekter?.inntekter, inntektTyper.ARBEID);
  const flBeløp = finnInntektForStatus(månedMedInntekter?.inntekter, inntektTyper.FRILANS);
  const ytelseBeløp = finnInntektForStatus(månedMedInntekter?.inntekter, inntektTyper.YTELSE);
  const rest = finnRestVerdienFraRelevanteAndeler(relevanteStatuser, maksVerdi, atBeløp, flBeløp);
  return (
    <React.Fragment key={`${dato}wrapper`}>
      { maaned === '01' && (
        <Row className={styles.aarDeviderRow}>
          <Column xs={relevanteStatuser.harArbeidsinntekt && relevanteStatuser.harFrilansinntekt ? '12' : '10'} className={styles.aarDevider} />
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
          <Column xs="1" className={beregningStyles.colMaanedText}>
            <Undertekst>{formatCurrencyNoKr(atBeløp)}</Undertekst>
          </Column>
        )}
        {relevanteStatuser.harFrilansinntekt && (
          <Column xs="1" className={relevanteStatuser.harArbeidsinntekt ? beregningStyles.colAarText : beregningStyles.colMaanedText}>
            <Undertekst>{formatCurrencyNoKr(flBeløp)}</Undertekst>
          </Column>
        )}
        {relevanteStatuser.harYtelseinntekt && (
          <Column xs="1" className={relevanteStatuser.harArbeidsinntekt ? beregningStyles.colAarText : beregningStyles.colMaanedText}>
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

const lagOverskrift = (userIdent?: string): ReactElement => (
  <>
    <FlexRow key="SamenenligningsGrunnlagOverskrift">
      <FlexColumn>
        <Element className={beregningStyles.avsnittOverskrift}>
          <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel" />
        </Element>
      </FlexColumn>
      <FlexColumn>
        <LinkTilEksterntSystem linkText="AI" userIdent={userIdent} type="AI" />
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
  .some((innt) => innt.inntektType.kode === status);

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
  const inntektstyper = {
    harFrilansinntekt: useMemo(() => finnesInntektAvType(måneder, inntektTyper.FRILANS), [måneder]),
    harArbeidsinntekt: useMemo(() => finnesInntektAvType(måneder, inntektTyper.ARBEID), [måneder]),
    harYtelseinntekt: useMemo(() => finnesInntektAvType(måneder, inntektTyper.YTELSE), [måneder]),
  } as Inntektstyper;

  const userIdent = null; // TODO denne må hentes fra brukerID enten fra brukerObjectet eller på beregningsgrunnlag må avklares
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder />
      <Lesmerpanel
        intro={lagOverskrift(userIdent)}
        lukkTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SkjulMaaneder' })}
        apneTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.VisMaaneder' })}
        defaultApen
      >
        <Row>
          <Column xs="1" className={styles.maanedColumn} />
          <Column xs="7" />
          {inntektstyper.harArbeidsinntekt
          && (
          <Column xs="1" className={beregningStyles.colMaanedText}>
            <Undertekst className={beregningStyles.semiBoldText}>Arbeid</Undertekst>
          </Column>
          )}
          {inntektstyper.harFrilansinntekt
          && (
            <Column xs="1" className={beregningStyles.colAarText}>
              <Undertekst className={beregningStyles.semiBoldText}>Frilans</Undertekst>
            </Column>
          )}
          {inntektstyper.harYtelseinntekt
          && (
            <Column xs="1" className={beregningStyles.colMaanedText}>
              <Undertekst className={beregningStyles.semiBoldText}>Ytelse</Undertekst>
            </Column>
          )}
          <Column xs="1" />
        </Row>
        {lagRader(måneder, inntektstyper, skjeringstidspunktDato)}

      </Lesmerpanel>
      {lagSumRad(måneder, inntektstyper)}
    </>
  );
};

export default injectIntl(SammenligningsgrunnlagAOrdningenImpl);

import React, { FunctionComponent, ReactElement } from 'react';
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
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';

import {
  Inntektsgrunnlag,
  InntektsgrunnlagInntekt,
  InntektsgrunnlagMåned,
  RelevanteStatuserProp,
} from '@fpsak-frontend/types';
import LinkTilEksterntSystem from '../redesign/LinkTilEksterntSystem';
import styles from './sammenligningsgrunnlagAOrdningen.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import Lesmerpanel from '../redesign/LesmerPanel';

const grafFargeAT = '#99bdcd';
const grafFargeFL = '#c1b5d0';
const grafBorderFarge = '#0c5472';

const finnAndelerStatus = (relevanteStatuser: RelevanteStatuserProp): string => {
  if (relevanteStatuser.isFrilanser && relevanteStatuser.isArbeidstaker) return aktivitetStatus.KOMBINERT_AT_FL;
  if (relevanteStatuser.isFrilanser) return aktivitetStatus.FRILANSER;
  if (relevanteStatuser.isArbeidstaker) return aktivitetStatus.ARBEIDSTAKER;
  return null;
};

const finnInntektForStatus = (andeler: InntektsgrunnlagInntekt[], status?: string): number => {
  if (!andeler || andeler.length === 0) {
    return 0;
  }
  if (status) {
    return andeler.filter((andel) => andel.aktivitetStatus.kode === status).reduce((acc, atAndel) => acc + atAndel.beløp, 0);
  }
  return andeler.reduce((acc, atAndel) => acc + atAndel.beløp, 0);
};

const finnMaksVerdienFraRelevanteAndeler = (andeler: InntektsgrunnlagMåned[],
  relevanteStatuser: RelevanteStatuserProp,
  skjeringstidspunktDato: string): number => {
  if (andeler && (relevanteStatuser.isFrilanser || relevanteStatuser.isArbeidstaker)) {
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
const finnRestVerdienFraRelevanteAndeler = (relevanteStatuser: RelevanteStatuserProp, maks: number, atBelop: number, flBelop: number): number => {
  if (relevanteStatuser.isFrilanser && relevanteStatuser.isArbeidstaker) {
    return maks - (atBelop) - (flBelop);
  }
  if (relevanteStatuser.isArbeidstaker) return maks - atBelop;
  if (relevanteStatuser.isFrilanser) return maks - flBelop;
  return null;
};

const lagSumRad = (månederMedInntekter: InntektsgrunnlagMåned[], relevanteStatuser: RelevanteStatuserProp): ReactElement => {
  const sumATAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  const sumFLAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.aktivitetStatus.kode === aktivitetStatus.FRILANSER)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  return (
    <>
      <Row>
        <Column
          xs={relevanteStatuser.isArbeidstaker && relevanteStatuser.isFrilanser ? '11' : '9'}
          className={beregningStyles.noPaddingRight}
        >
          <div className={beregningStyles.colDevider} />
        </Column>
      </Row>
      <Row>
        <Column xs="7">
          <Normaltekst className={beregningStyles.semiBoldText}>
            <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel" />
          </Normaltekst>
        </Column>
        {relevanteStatuser.isArbeidstaker && (
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Element className={beregningStyles.semiBoldText}>{formatCurrencyNoKr(sumATAndeler)}</Element>
          </Column>
        )}
        {relevanteStatuser.isFrilanser && (
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Element>{formatCurrencyNoKr(sumFLAndeler)}</Element>
          </Column>
        )}
        <Column xs="1" className={beregningStyles.rightAlignElementNoWrap} />
      </Row>
    </>
  );
};

const lagRad = (relevanteStatuser: RelevanteStatuserProp, månedMedInntekter: InntektsgrunnlagMåned, maksVerdi: number, aarMaaned: string): ReactElement => {
  const dato = `${aarMaaned}01`;
  const maanedNavn = moment(dato, ISO_DATE_FORMAT).format('MMM');
  const formattedMaaned = maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1, 3);
  const maaned = moment(dato, ISO_DATE_FORMAT).format('MM');
  const aar = moment(dato, ISO_DATE_FORMAT).format('YYYY');
  const atBelop = finnInntektForStatus(månedMedInntekter?.inntekter, aktivitetStatus.ARBEIDSTAKER);
  const flBelop = finnInntektForStatus(månedMedInntekter?.inntekter, aktivitetStatus.FRILANSER);
  const rest = finnRestVerdienFraRelevanteAndeler(relevanteStatuser, maksVerdi, atBelop, flBelop);
  return (
    <React.Fragment key={`${dato}wrapper`}>
      { maaned === '01' && (
        <Row className={styles.aarDeviderRow}>
          <Column xs={relevanteStatuser.isArbeidstaker && relevanteStatuser.isFrilanser ? '12' : '10'} className={styles.aarDevider} />
        </Row>
      )}
      <Row>
        <Column xs="1" className={styles.maanedColumn}>
          <Undertekst>{formattedMaaned}</Undertekst>
        </Column>
        <Column xs="6" className={styles.chartColumn}>
          <FlexibleWidthXYPlot height={10} stackBy="x" yDomain={[1, 1]}>
            {relevanteStatuser.isArbeidstaker && (
              <HorizontalRectSeries
                data={[{ y0: 0.5, y: 1, x: atBelop }]}
                fill={grafFargeAT}
                stroke={grafBorderFarge}
              />
            )}
            {relevanteStatuser.isFrilanser && (
              <HorizontalRectSeries
                data={[{ y0: 0.5, y: 1, x: flBelop }]}
                fill={grafFargeFL}
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
        {relevanteStatuser.isArbeidstaker && (
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Undertekst>{formatCurrencyNoKr(atBelop)}</Undertekst>
          </Column>
        )}
        {relevanteStatuser.isFrilanser && (
          <Column xs="2" className={relevanteStatuser.isArbeidstaker ? beregningStyles.colAarText : beregningStyles.colMaanedText}>
            <Undertekst>{formatCurrencyNoKr(flBelop)}</Undertekst>
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
const lagRader = (andeler: InntektsgrunnlagMåned[], relevanteStatuser: RelevanteStatuserProp, skjeringstidspunktDato: string): ReactElement[] => {
  const rows = [];
  const maksVerdi = finnMaksVerdienFraRelevanteAndeler(andeler, relevanteStatuser, skjeringstidspunktDato);
  for (let step = 12; step > 0; step -= 1) {
    const yearMont = moment(skjeringstidspunktDato, ISO_DATE_FORMAT).subtract(step, 'M').format('YYYYMM');
    const månedMedInntekter = andeler.find((andel) => moment(andel.fom, ISO_DATE_FORMAT).format('YYYYMM') === yearMont);
    rows.push(lagRad(relevanteStatuser, månedMedInntekter, maksVerdi, yearMont));
  }
  return rows;
};

const lagOverskrift = (andelStatus, userIdent) => (
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
        <FormattedMessage id={`Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress.${andelStatus}`} />
      </FlexColumn>
    </FlexRow>
  </>
);

type OwnProps = {
    sammenligningsGrunnlagInntekter: Inntektsgrunnlag;
    relevanteStatuser: RelevanteStatuserProp;
    skjeringstidspunktDato: string;
};

export const SammenligningsgrunnlagAOrdningenImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  sammenligningsGrunnlagInntekter, relevanteStatuser, skjeringstidspunktDato, intl,
}) => {
  const måneder = sammenligningsGrunnlagInntekter?.måneder;
  if (!måneder || måneder.length === 0 || !skjeringstidspunktDato || relevanteStatuser.isSelvstendigNaeringsdrivende) {
    return null;
  }
  const andelStatus = finnAndelerStatus(relevanteStatuser);
  const userIdent = null; // TODO denne må hentes fra brukerID enten fra brukerObjectet eller på beregningsgrunnlag må avklares
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder />
      <Lesmerpanel
        className={styles.lesMer}
        intro={lagOverskrift(andelStatus, userIdent)}
        lukkTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SkjulMaaneder' })}
        apneTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.VisMaaneder' })}
        defaultApen
      >
        {relevanteStatuser.isArbeidstaker && relevanteStatuser.isFrilanser && (
        <Row>
          <Column xs="1" className={styles.maanedColumn} />
          <Column xs="6" />
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Undertekst className={beregningStyles.semiBoldText}>Arbeid</Undertekst>
          </Column>
          <Column xs="2" className={beregningStyles.colAarText}>
            <Undertekst className={beregningStyles.semiBoldText}>Frilans</Undertekst>
          </Column>
          <Column xs="1" />
        </Row>
        )}
        {lagRader(måneder, relevanteStatuser, skjeringstidspunktDato)}

      </Lesmerpanel>
      {lagSumRad(måneder, relevanteStatuser)}
    </>
  );
};

export default injectIntl(SammenligningsgrunnlagAOrdningenImpl);

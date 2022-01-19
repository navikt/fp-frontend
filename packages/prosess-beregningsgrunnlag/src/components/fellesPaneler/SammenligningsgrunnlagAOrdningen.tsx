import React, {
  FunctionComponent, ReactElement, useMemo, useCallback,
} from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexRow, VerticalSpacer, AvsnittSkiller, ReactECharts,
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

const GRAF_FARGE_AT = '#99bdcd';
const GRAF_FARGE_FL = '#c1b5d0';
const GRAF_FARGE_YTELSE = '#C6C2BF';

const lagSumRad = (månederMedInntekter: InntektsgrunnlagMåned[], relevanteStatuser: Inntektstyper): ReactElement => {
  const sumATAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektAktivitetType === inntektAktivitetType.ARBEID)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  const sumFLAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektAktivitetType === inntektAktivitetType.FRILANS)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  const sumYtelseAndeler = månederMedInntekter.flatMap((måned) => måned.inntekter)
    .filter((innt) => innt.inntektAktivitetType === inntektAktivitetType.YTELSE)
    .map(({ beløp }) => beløp).reduce((i1, i2) => i1 + i2, 0);
  return (
    <>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="12">
          <Normaltekst className={beregningStyles.semiBoldText}>
            <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel" />
          </Normaltekst>
        </Column>
      </Row>
      {relevanteStatuser.harArbeidsinntekt && (
        <Row>
          <Column xs="1">
            <Normaltekst>
              <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid" />
            </Normaltekst>
          </Column>
          <Column xs="3">
            <Normaltekst className={styles.rightAlign}>
              {formatCurrencyNoKr(sumATAndeler)}
            </Normaltekst>
          </Column>
        </Row>
      )}
      {relevanteStatuser.harFrilansinntekt && (
        <Row>
          <Column xs="1">
            <Normaltekst>
              <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans" />
            </Normaltekst>
          </Column>
          <Column xs="3">
            <Normaltekst className={styles.rightAlign}>
              {formatCurrencyNoKr(sumFLAndeler)}
            </Normaltekst>
          </Column>
        </Row>
      )}
      {relevanteStatuser.harYtelseinntekt && (
        <Row>
          <Column xs="1">
            <Normaltekst>
              <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse" />
            </Normaltekst>
          </Column>
          <Column xs="3">
            <Normaltekst className={styles.rightAlign}>
              {formatCurrencyNoKr(sumYtelseAndeler)}
            </Normaltekst>
          </Column>
        </Row>
      )}
    </>
  );
};

const finnInntektForStatus = (andeler: InntektsgrunnlagInntekt[], status?: string): number => {
  if (!andeler || andeler.length === 0) {
    return 0;
  }
  if (status) {
    return andeler.filter((andel) => andel.inntektAktivitetType === status).reduce((acc, atAndel) => acc + atAndel.beløp, 0);
  }
  return andeler.reduce((acc, atAndel) => acc + atAndel.beløp, 0);
};

const finnDataForIAT = (andeler: InntektsgrunnlagMåned[], skjeringstidspunktDato: string, inntektAType?: string) => {
  const data = [];
  for (let step = 1; step <= 12; step += 1) {
    const dato = moment(skjeringstidspunktDato, ISO_DATE_FORMAT).subtract(step, 'M');
    const aarMaaned = dato.format('YYYYMM');
    const månedMedInntekter = andeler.find((andel) => moment(andel.fom, ISO_DATE_FORMAT).format('YYYYMM') === aarMaaned);
    const beløp = finnInntektForStatus(månedMedInntekter?.inntekter, inntektAType);
    data.push([beløp, dato.toDate()]);
  }
  return data;
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
  .some((innt) => innt.inntektAktivitetType === status);

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
    harFrilansinntekt: finnesInntektAvType(måneder, inntektAktivitetType.FRILANS),
    harArbeidsinntekt: finnesInntektAvType(måneder, inntektAktivitetType.ARBEID),
    harYtelseinntekt: finnesInntektAvType(måneder, inntektAktivitetType.YTELSE),
  } as Inntektstyper;

  const arbeidTekst = intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid' });
  const frilansTekst = intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans' });
  const ytelseTekst = intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse' });

  const dataForArbeid = useMemo(() => (relevanteStatuser.harArbeidsinntekt ? finnDataForIAT(måneder, skjeringstidspunktDato, inntektAktivitetType.ARBEID) : []),
    [relevanteStatuser.harArbeidsinntekt, måneder, skjeringstidspunktDato]);
  const dataForFrilans = useMemo(() => (relevanteStatuser.harFrilansinntekt
    ? finnDataForIAT(måneder, skjeringstidspunktDato, inntektAktivitetType.FRILANS) : []),
  [relevanteStatuser.harArbeidsinntekt, måneder, skjeringstidspunktDato]);
  const dataForYtelse = useMemo(() => (relevanteStatuser.harYtelseinntekt ? finnDataForIAT(måneder, skjeringstidspunktDato, inntektAktivitetType.YTELSE) : []),
    [relevanteStatuser.harArbeidsinntekt, måneder, skjeringstidspunktDato]);

  const barFormatter = useCallback((params) => {
    if (params.value[0] > 5000) {
      return formatCurrencyNoKr(params.value[0]);
    }
    return params.value[0] === 0 ? '' : '..';
  }, []);

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
        <ReactECharts
          height={350}
          option={{
            tooltip: {
              trigger: 'axis',
              formatter: (series) => {
                const date = moment(series[0].data[1]);
                const maanedNavn = date.format('MMM');
                const aar = date.format('YYYY');
                const formattedMaaned = maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1);
                const overskrift = `${formattedMaaned} ${aar}`;

                const seriesData = series
                  .reduce((acc, sData) => acc.concat(`${sData.marker + sData.seriesName}: ${formatCurrencyNoKr(sData.data[0])}`), [])
                  .join('<br/>');
                return `${overskrift}<br />${seriesData}`;
              },
              axisPointer: {
                type: 'shadow',
              },
            },
            toolbox: {
              feature: {
                saveAsImage: {
                  title: 'Lagre ',
                  name: 'inntekt_og_ytelse',
                },
              },
            },
            legend: {
              data: [arbeidTekst, frilansTekst, ytelseTekst],
            },
            grid: {
              left: '1%',
              right: '5%',
              bottom: '0%',
              containLabel: true,
            },
            xAxis: {
              type: 'value',
              axisLabel: {
                formatter: (value: any) => formatCurrencyNoKr(value),
                margin: 12,
              },
            },
            yAxis: {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                formatter: (value: any) => {
                  const date = moment(value);
                  const erIJanuar = date.format('MM') === '01' || date.format('MM') === '12';
                  const maanedNavn = date.format('MMM');
                  const aar = date.format('YYYY');
                  const formattedMaaned = maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1, 3);
                  return erIJanuar ? `${formattedMaaned}\n${aar}` : formattedMaaned;
                },
              },
            },
            series: [
              {
                name: arbeidTekst,
                type: 'bar',
                stack: 'total',
                label: {
                  show: true,
                  fontSize: '11',
                  formatter: barFormatter,
                },
                emphasis: {
                  focus: 'series',
                },
                data: dataForArbeid,
              },
              {
                name: frilansTekst,
                type: 'bar',
                stack: 'total',
                label: {
                  show: true,
                  fontSize: '11',
                  formatter: barFormatter,
                },
                emphasis: {
                  focus: 'series',
                },
                data: dataForFrilans,
              },
              {
                name: ytelseTekst,
                type: 'bar',
                stack: 'total',
                label: {
                  show: true,
                  fontSize: '11',
                  formatter: barFormatter,
                },
                emphasis: {
                  focus: 'series',
                },
                data: dataForYtelse,
              },
            ],
            color: [GRAF_FARGE_AT, GRAF_FARGE_FL, GRAF_FARGE_YTELSE],
          }}
        />
      </Lesmerpanel>
      {lagSumRad(måneder, relevanteStatuser)}
    </>
  );
};

export default injectIntl(SammenligningsgrunnlagAOrdningenImpl);

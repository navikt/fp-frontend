import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FieldArray } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
import { Element } from 'nav-frontend-typografi';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';
import {
  DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT,
  formatCurrencyNoKr,
} from '@fpsak-frontend/utils';
import {
  BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  Kodeverk,
  KodeverkMedNavn,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import RenderFordelBGFieldArray, { RenderFordelBGFieldArrayImpl } from './RenderFordelBGFieldArray';
import {
  settAndelIArbeid, setGenerellAndelsinfo, setArbeidsforholdInitialValues, settFastsattBelop, starterPaaEllerEtterStp, finnFastsattPrAar,
} from '../BgFordelingUtils';

import styles from './fordelBeregningsgrunnlagPeriodePanel.less';

const classNames = classnames.bind(styles);

const formatDate = (date) => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const renderDateHeading = (fom, tom) => {
  if (!tom) {
    return (
      <Element>
        <FormattedMessage
          id="BeregningInfoPanel.FordelBG.PeriodeFom"
          values={{ fom: formatDate(fom) }}
        />
      </Element>
    );
  }
  return (
    <Element>
      <FormattedMessage
        id="BeregningInfoPanel.FordelBG.PeriodeFomOgTom"
        values={{ fom: formatDate(fom), tom: formatDate(tom) }}
      />
    </Element>
  );
};

type OwnProps = {
    readOnly: boolean;
    fordelBGFieldArrayName: string;
    fom: string;
    tom?: string;
    open?: boolean;
    skalRedigereInntekt: boolean;
    isAksjonspunktClosed: boolean;
    showPanel: (...args: any[]) => any;
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    behandlingType: Kodeverk;
};

interface StaticFunctions {
  validate: (values: any,
             sumIPeriode: number,
             skalValidereMotBeregningsgrunnlagPrAar: (andel: BeregningsgrunnlagAndel) => boolean,
             getKodeverknavn: (kodeverk: Kodeverk) => string,
             grunnbeløp: number,
             periodeDato: {
              fom: string;
              tom: string;
             },
             skalValidereRefusjon: boolean) => any;
  buildInitialValues: (periode: FordelBeregningsgrunnlagPeriode,
                       bgPeriode: BeregningsgrunnlagPeriodeProp,
                       skjaeringstidspunktBeregning: string,
                       harKunYtelse: boolean,
                       getKodeverknavn: (kodeverk: Kodeverk) => string) => any;
}

/**
 * FordelBeregningsgrunnlagPeriodePanel
 *
 * Presentasjonskomponent. Viser ekspanderbart panel for perioder i nytt/endret beregningsgrunnlag
 */

const FordelBeregningsgrunnlagPeriodePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  fordelBGFieldArrayName,
  fom,
  tom,
  skalRedigereInntekt,
  isAksjonspunktClosed,
  open,
  showPanel,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
}) => (
  <EkspanderbartpanelBase
    className={readOnly ? styles.statusOk : classNames(`fordelBeregningsgrunnlagPeriode--${fom}`)}
    tittel={renderDateHeading(fom, tom)}
    apen={open}
    onClick={() => showPanel(fom)}
  >
    <FieldArray
      name={fordelBGFieldArrayName}
      component={RenderFordelBGFieldArray}
      readOnly={readOnly}
      periodeUtenAarsak={!skalRedigereInntekt}
      isAksjonspunktClosed={isAksjonspunktClosed}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag}
      behandlingType={behandlingType}
    />
  </EkspanderbartpanelBase>
);

FordelBeregningsgrunnlagPeriodePanel.defaultProps = {
  open: null,
  tom: null,
};

FordelBeregningsgrunnlagPeriodePanel.validate = (values, sumIPeriode, skalValidereMotRapportert,
  getKodeverknavn, grunnbeløp, periodeDato, skalValidereRefusjon) => RenderFordelBGFieldArrayImpl
  .validate(values, sumIPeriode, skalValidereMotRapportert, getKodeverknavn, grunnbeløp, periodeDato, skalValidereRefusjon);

const finnRiktigAndel = (andel, bgPeriode) => bgPeriode.beregningsgrunnlagPrStatusOgAndel.find((a) => a.andelsnr === andel.andelsnr);

const finnBeregningsgrunnlagPrAar = (bgAndel) => {
  if (!bgAndel) {
    return null;
  }
  const bortfaltNaturalytelse = bgAndel.bortfaltNaturalytelse === null || bgAndel.bortfaltNaturalytelse === undefined ? 0 : bgAndel.bortfaltNaturalytelse;
  const tilkommetNaturalytelse = bgAndel.tilkommetNaturalytelse === null || bgAndel.tilkommetNaturalytelse === undefined ? 0 : bgAndel.tilkommetNaturalytelse;
  if (bgAndel.overstyrtPrAar || bgAndel.overstyrtPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.overstyrtPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  if (bgAndel.beregnetPrAar || bgAndel.beregnetPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.beregnetPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  return null;
};

FordelBeregningsgrunnlagPeriodePanel.buildInitialValues = (periode, bgPeriode, skjaeringstidspunktBeregning, harKunYtelse, getKodeverknavn) => {
  if (!periode || !periode.fordelBeregningsgrunnlagAndeler) {
    return {};
  }
  return (
    periode.fordelBeregningsgrunnlagAndeler
      .map((andel) => {
        const bgAndel = finnRiktigAndel(andel, bgPeriode);
        return ({
          ...setGenerellAndelsinfo(andel, harKunYtelse, getKodeverknavn),
          ...setArbeidsforholdInitialValues(andel),
          andelIArbeid: settAndelIArbeid(andel.andelIArbeid),
          fordelingForrigeBehandling: andel.fordelingForrigeBehandlingPrAar || andel.fordelingForrigeBehandlingPrAar === 0
            ? formatCurrencyNoKr(andel.fordelingForrigeBehandlingPrAar) : '',
          fastsattBelop: settFastsattBelop(andel.fordeltPrAar, bgAndel.bruttoPrAar, periode.skalPreutfyllesMedBeregningsgrunnlag),
          readOnlyBelop: finnBeregningsgrunnlagPrAar(bgAndel),
          refusjonskrav: andel.refusjonskravPrAar !== null && andel.refusjonskravPrAar !== undefined ? formatCurrencyNoKr(andel.refusjonskravPrAar) : '',
          skalKunneEndreRefusjon: periode.skalKunneEndreRefusjon && !andel.lagtTilAvSaksbehandler
      && andel.refusjonskravFraInntektsmeldingPrAar ? periode.skalKunneEndreRefusjon : false,
          belopFraInntektsmelding: andel.belopFraInntektsmeldingPrAar,
          skalRedigereInntekt: periode.skalRedigereInntekt,
          refusjonskravFraInntektsmelding: andel.refusjonskravFraInntektsmeldingPrAar,
          nyttArbeidsforhold: andel.nyttArbeidsforhold || starterPaaEllerEtterStp(bgAndel, skjaeringstidspunktBeregning),
          beregningsgrunnlagPrAar: finnBeregningsgrunnlagPrAar(bgAndel),
          forrigeRefusjonPrAar: andel.refusjonskravPrAar,
          forrigeArbeidsinntektPrAar: finnFastsattPrAar(andel.fordeltPrAar),
          beregningsperiodeFom: bgAndel.beregningsperiodeFom,
          beregningsperiodeTom: bgAndel.beregningsperiodeTom,
        });
      })
  );
};

export default FordelBeregningsgrunnlagPeriodePanel;

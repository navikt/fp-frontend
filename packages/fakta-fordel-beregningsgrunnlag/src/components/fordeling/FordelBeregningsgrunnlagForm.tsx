import React, { Component } from 'react';
import moment from 'moment';
import { removeSpacesFromNumber } from '@fpsak-frontend/utils';
import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { BeregningsgrunnlagPeriodeProp, FordelBeregningsgrunnlagPeriode, KodeverkMedNavn } from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import { IntlShape } from 'react-intl';
import FordelBeregningsgrunnlagPeriodePanel from './FordelBeregningsgrunnlagPeriodePanel';

import styles from './fordelBeregningsgrunnlagForm.less';

const fordelBGFieldArrayNamePrefix = 'fordelBGPeriode';

export const getFieldNameKey = (index) => (fordelBGFieldArrayNamePrefix + index);

export const mapTilFastsatteVerdier = (aktivitet, skalHaBesteberegning) => ({
  refusjonPrÅr: aktivitet.skalKunneEndreRefusjon ? removeSpacesFromNumber(aktivitet.refusjonskrav) : null,
  fastsattÅrsbeløp: removeSpacesFromNumber(aktivitet.fastsattBelop),
  fastsattÅrsbeløpInklNaturalytelse: removeSpacesFromNumber(aktivitet.fastsattBelop),
  inntektskategori: aktivitet.inntektskategori,
  skalHaBesteberegning,
});

const finnRiktigBgPeriode = (periode, bgPerioder) => bgPerioder.find((p) => p.beregningsgrunnlagPeriodeFom === periode.fom);

const getAndelsnr = (aktivitet) => {
  if (aktivitet.nyAndel === true) {
    return aktivitet.andel;
  }
  return aktivitet.andelsnr;
};

export const mapAndel = (aktivitet) => ({
  andel: aktivitet.andel,
  andelsnr: getAndelsnr(aktivitet),
  aktivitetStatus: aktivitet.aktivitetStatus,
  arbeidsgiverId: aktivitet.arbeidsgiverId !== '' ? aktivitet.arbeidsgiverId : null,
  arbeidsforholdId: aktivitet.arbeidsforholdId !== '' ? aktivitet.arbeidsforholdId : null,
  nyAndel: aktivitet.nyAndel,
  kilde: aktivitet.kilde,
  lagtTilAvSaksbehandler: aktivitet.lagtTilAvSaksbehandler,
  arbeidsforholdType: aktivitet.arbeidsforholdType,
  beregningsperiodeTom: aktivitet.beregningsperiodeTom,
  beregningsperiodeFom: aktivitet.beregningsperiodeFom,
  forrigeArbeidsinntektPrÅr: aktivitet.forrigeArbeidsinntektPrAar,
  forrigeRefusjonPrÅr: aktivitet.forrigeRefusjonPrAar,
  forrigeInntektskategori: aktivitet.forrigeInntektskategori,
  // @ts-ignore FIXME: Denne forventer også skalHaBesteberegning, hvorfor er denne blitt borte?
  fastsatteVerdier: mapTilFastsatteVerdier(aktivitet),
});

const harPeriodeSomKanKombineresMedForrige = (periode, bgPerioder, fordelPeriode, periodeList) => {
  const forrigeEndringPeriode = periodeList[periodeList.length - 1];
  if (fordelPeriode.skalRedigereInntekt !== forrigeEndringPeriode.skalRedigereInntekt) {
    return false;
  }
  if (periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.ENDRING_I_REFUSJONSKRAV)
  || periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.REFUSJON_OPPHOERER)
  || periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.GRADERING)
  || periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.GRADERING_OPPHOERER)) {
    return false;
  }
  if (periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET)) {
    const periodeIndex = bgPerioder.indexOf(periode);
    const forrigePeriode = bgPerioder[periodeIndex - 1];
    return forrigePeriode.bruttoPrAar === periode.bruttoPrAar;
  }
  return true;
};

const oppdaterTomDatoForSistePeriode = (liste, periode) => {
  const forrigePeriode = liste.pop();
  forrigePeriode.tom = periode.tom;
  liste.push(forrigePeriode);
};

const sjekkOmPeriodeSkalLeggesTil = (bgPerioder) => (aggregatedPeriodList, periode) => {
  if (aggregatedPeriodList.length === 0) {
    aggregatedPeriodList.push({ ...periode });
    return aggregatedPeriodList;
  }
  const matchendeBgPeriode = bgPerioder.find((p) => p.beregningsgrunnlagPeriodeFom === periode.fom);
  if (matchendeBgPeriode) {
    if (harPeriodeSomKanKombineresMedForrige(matchendeBgPeriode, bgPerioder, periode, aggregatedPeriodList)) {
      oppdaterTomDatoForSistePeriode(aggregatedPeriodList, periode);
      return aggregatedPeriodList;
    }
    aggregatedPeriodList.push({ ...periode });
  }
  return aggregatedPeriodList;
};

const inkludererPeriode = (periode) => (p) => moment(p.fom).isSameOrAfter(moment(periode.fom))
    && (periode.tom === null || moment(p.tom).isSameOrBefore(moment(periode.tom)));

export const lagPerioderForSubmit = (values, index, kombinertPeriode, fordelBGPerioder) => fordelBGPerioder
  .filter(inkludererPeriode(kombinertPeriode))
  .map((p) => ({
    andeler: values[getFieldNameKey(index)].map(mapAndel),
    fom: p.fom,
    tom: p.tom,
  }));

export const finnSumIPeriode = (bgPerioder, fom) => {
  const periode = bgPerioder.find((p) => p.beregningsgrunnlagPeriodeFom === fom);
  return periode.bruttoInkludertBortfaltNaturalytelsePrAar;
};

export const slaaSammenPerioder = (perioder, bgPerioder) => perioder.reduce(sjekkOmPeriodeSkalLeggesTil(bgPerioder), []);

export const transformPerioder = (fordelBGPerioder, values, bgPerioder) => {
  const fordelBeregningsgrunnlagPerioder = [];
  const kombinertePerioder = slaaSammenPerioder(fordelBGPerioder, bgPerioder);
  for (let index = 0; index < kombinertePerioder.length; index += 1) {
    const { skalRedigereInntekt } = kombinertePerioder[index];
    if (skalRedigereInntekt) {
      lagPerioderForSubmit(values, index, kombinertePerioder[index], fordelBGPerioder)
        .forEach((p) => fordelBeregningsgrunnlagPerioder.push(p));
    }
  }
  return fordelBeregningsgrunnlagPerioder;
};

type OwnProps = {
    readOnly: boolean;
    perioder: FordelBeregningsgrunnlagPeriode[];
    isAksjonspunktClosed: boolean;
    bgPerioder: BeregningsgrunnlagPeriodeProp[];
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    behandlingType: Kodeverk;
};

interface OwnState {
  openPanels: string[];
}

/**
 * FordelBeregningsgrunnlagForm
 *
 * Container komponent.. Behandling av aksjonspunktet for fasetting av nytt/endret beregningsgrunnlag.
 */

export class FordelBeregningsgrunnlagForm extends Component<OwnProps, OwnState> {
  static validate = (
    intl: IntlShape,
    values: any,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    beregningsgrunnlag: Beregningsgrunnlag,
    getKodeverknavn: (kodeverk: Kodeverk) => string,
  ) => {
    const errors = {};
    if (fordelBGPerioder && fordelBGPerioder.length > 0) {
      const perioderSlattSammen = slaaSammenPerioder(fordelBGPerioder, beregningsgrunnlag.beregningsgrunnlagPeriode);
      const grunnbeløp = Number(beregningsgrunnlag.grunnbeløp);
      for (let i = 0; i < perioderSlattSammen.length; i += 1) {
        const sumIPeriode = finnSumIPeriode(beregningsgrunnlag.beregningsgrunnlagPeriode, perioderSlattSammen[i].fom);
        const periode = values[getFieldNameKey(i)];
        const fordelPeriode = perioderSlattSammen[i];
        const skalValidereRefusjon = fordelPeriode && fordelPeriode.skalKunneEndreRefusjon;
        const periodeDato = { fom: fordelPeriode.fom, tom: fordelPeriode.tom };
        errors[getFieldNameKey(i)] = FordelBeregningsgrunnlagPeriodePanel.validate(intl, periode, sumIPeriode,
          getKodeverknavn, grunnbeløp, periodeDato, skalValidereRefusjon);
      }
    }
    return errors;
  };

  static transformValues = (values: any,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bgPerioder: BeregningsgrunnlagPeriodeProp[]) => ({
    endretBeregningsgrunnlagPerioder: transformPerioder(fordelBGPerioder, values, bgPerioder),
  });

  static buildInitialValues = (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bg: Beregningsgrunnlag,
    getKodeverknavn: (kodeverk: Kodeverk) => string) => {
    const initialValues = {};
    if (!fordelBGPerioder) {
      return initialValues;
    }
    const harKunYtelse = bg.aktivitetStatus.some((status) => status.kode === aktivitetStatuser.KUN_YTELSE);
    const bgPerioder = bg.beregningsgrunnlagPeriode;
    slaaSammenPerioder(fordelBGPerioder, bgPerioder).forEach((periode, index) => {
      const bgPeriode = finnRiktigBgPeriode(periode, bgPerioder);
      initialValues[getFieldNameKey(index)] = FordelBeregningsgrunnlagPeriodePanel
        .buildInitialValues(periode, bgPeriode, bg.skjaeringstidspunktBeregning, harKunYtelse, getKodeverknavn);
    });
    return initialValues;
  };

  constructor(props: OwnProps) {
    super(props);
    this.state = {
      openPanels: props.perioder.map((periode) => periode.fom),
    };
    this.showPanel = this.showPanel.bind(this);
  }

  showPanel(fom) {
    const { openPanels } = this.state;
    if (openPanels.includes(fom)) {
      this.setState({ openPanels: openPanels.filter((panel) => panel !== fom) });
    } else {
      openPanels.push(fom);
      this.setState({ openPanels });
    }
  }

  render() {
    const {
      readOnly,
      perioder,
      isAksjonspunktClosed,
      bgPerioder,
      beregningsgrunnlag,
      alleKodeverk,
      behandlingType,
    } = this.props;
    const { openPanels } = this.state;
    return (
      <BorderBox className={styles.lessPadding}>
        {slaaSammenPerioder(perioder, bgPerioder).map((periode, index) => (
          <React.Fragment key={fordelBGFieldArrayNamePrefix + periode.fom}>
            <VerticalSpacer eightPx />
            <FordelBeregningsgrunnlagPeriodePanel
              readOnly={readOnly}
              fordelBGFieldArrayName={getFieldNameKey(index)}
              fom={periode.fom}
              tom={periode.tom}
              open={openPanels ? openPanels.filter((panel) => panel === periode.fom).length > 0 : false}
              skalRedigereInntekt={periode.skalRedigereInntekt}
              isAksjonspunktClosed={isAksjonspunktClosed}
              showPanel={this.showPanel}
              beregningsgrunnlag={beregningsgrunnlag}
              alleKodeverk={alleKodeverk}
              behandlingType={behandlingType}
            />
            <VerticalSpacer eightPx />
          </React.Fragment>
        ))}
      </BorderBox>
    );
  }
}

export default FordelBeregningsgrunnlagForm;

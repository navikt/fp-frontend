import React, { Component } from 'react';
import moment from 'moment';
import { removeSpacesFromNumber } from '@fpsak-frontend/utils';
import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  KodeverkMedNavn,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import { IntlShape } from 'react-intl';
import { FordelBeregningsgrunnlagPerioderTransformedValues,
  FordelBeregningsgrunnlagAndelTransformedValues,
  FordelBeregningsgrunnlagFastsatteVerdierTransformedValues,
  FordelBeregningsgrunnlagPeriodeTransformedValues,
}
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/tilbakekreving/FordelBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagPeriodePanel from './FordelBeregningsgrunnlagPeriodePanel';

import styles from './fordelBeregningsgrunnlagForm.less';
import FordelBeregningsgrunnlagMedAksjonspunktValues, {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagValues,
} from '../../types/FordelingTsType';

const fordelBGFieldArrayNamePrefix = 'fordelBGPeriode';

export const getFieldNameKey = (index: number): string => (fordelBGFieldArrayNamePrefix + index);

export const mapTilFastsatteVerdier = (aktivitet: FordelBeregningsgrunnlagAndelValues): FordelBeregningsgrunnlagFastsatteVerdierTransformedValues => ({
  refusjonPrÅr: aktivitet.skalKunneEndreRefusjon ? removeSpacesFromNumber(aktivitet.refusjonskrav) : null,
  fastsattÅrsbeløpInklNaturalytelse: removeSpacesFromNumber(aktivitet.fastsattBelop),
  inntektskategori: aktivitet.inntektskategori,
});

const finnRiktigBgPeriode = (periode: FordelBeregningsgrunnlagPeriode,
  bgPerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagPeriodeProp => bgPerioder.find((p) => p.beregningsgrunnlagPeriodeFom === periode.fom);

const getAndelsnr = (aktivitet: FordelBeregningsgrunnlagAndelValues): number | string => {
  if (aktivitet.nyAndel === true) {
    return aktivitet.andel;
  }
  return aktivitet.andelsnr;
};

export const mapAndel = (aktivitet: FordelBeregningsgrunnlagAndelValues): FordelBeregningsgrunnlagAndelTransformedValues => ({
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
  fastsatteVerdier: mapTilFastsatteVerdier(aktivitet),
});

const harPeriodeSomKanKombineresMedForrige = (periode: BeregningsgrunnlagPeriodeProp,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  fordelPeriode: FordelBeregningsgrunnlagPeriode,
  periodeList: FordelBeregningsgrunnlagPeriode[]): boolean => {
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

const oppdaterTomDatoForSistePeriode = (liste: FordelBeregningsgrunnlagPeriode[], periode: FordelBeregningsgrunnlagPeriode) => {
  const forrigePeriode = liste.pop();
  // @ts-ignore Fiks denne
  forrigePeriode.tom = periode.tom;
  liste.push(forrigePeriode);
};

const sjekkOmPeriodeSkalLeggesTil = (bgPerioder: BeregningsgrunnlagPeriodeProp[]) => (aggregatedPeriodList: FordelBeregningsgrunnlagPeriode[],
  periode: FordelBeregningsgrunnlagPeriode): FordelBeregningsgrunnlagPeriode[] => {
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

const inkludererPeriode = (periode: FordelBeregningsgrunnlagPeriode) => (p: FordelBeregningsgrunnlagPeriode): boolean => moment(p.fom)
  .isSameOrAfter(moment(periode.fom))
    && (periode.tom === null || moment(p.tom).isSameOrBefore(moment(periode.tom)));

export const lagPerioderForSubmit = (values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  index: number,
  kombinertPeriode: FordelBeregningsgrunnlagPeriode,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[]): FordelBeregningsgrunnlagPeriodeTransformedValues[] => fordelBGPerioder
  .filter(inkludererPeriode(kombinertPeriode))
  .map((p: FordelBeregningsgrunnlagPeriode) => ({
    andeler: values[getFieldNameKey(index)].map(mapAndel),
    fom: p.fom,
    tom: p.tom,
  }));

export const finnSumIPeriode = (bgPerioder: BeregningsgrunnlagPeriodeProp[], fom: string): number => {
  const periode = bgPerioder.find((p) => p.beregningsgrunnlagPeriodeFom === fom);
  return periode.bruttoInkludertBortfaltNaturalytelsePrAar;
};

export const slaaSammenPerioder = (perioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[]): FordelBeregningsgrunnlagPeriode[] => perioder.reduce(sjekkOmPeriodeSkalLeggesTil(bgPerioder), []);

export const transformPerioder = (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  bgPerioder: BeregningsgrunnlagPeriodeProp[]): FordelBeregningsgrunnlagPeriodeTransformedValues[] => {
  const fordelBeregningsgrunnlagPerioder = [];
  const kombinertePerioder = slaaSammenPerioder(fordelBGPerioder, bgPerioder);
  for (let index = 0; index < kombinertePerioder.length; index += 1) {
    const { skalRedigereInntekt } = kombinertePerioder[index];
    if (skalRedigereInntekt) {
      lagPerioderForSubmit(values, index, kombinertePerioder[index], fordelBGPerioder)
        .forEach((p: FordelBeregningsgrunnlagPeriodeTransformedValues) => fordelBeregningsgrunnlagPerioder.push(p));
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
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
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
    values: FordelBeregningsgrunnlagMedAksjonspunktValues,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    beregningsgrunnlag: Beregningsgrunnlag,
    getKodeverknavn: (kodeverk: Kodeverk) => string,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
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
          getKodeverknavn, grunnbeløp, periodeDato, skalValidereRefusjon, arbeidsgiverOpplysningerPerId);
      }
    }
    return errors;
  };

  static transformValues = (values: FordelBeregningsgrunnlagMedAksjonspunktValues,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bgPerioder: BeregningsgrunnlagPeriodeProp[]): FordelBeregningsgrunnlagPerioderTransformedValues => ({
    endretBeregningsgrunnlagPerioder: transformPerioder(fordelBGPerioder, values, bgPerioder),
  });

  static buildInitialValues = (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bg: Beregningsgrunnlag,
    getKodeverknavn: (kodeverk: Kodeverk) => string,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): FordelBeregningsgrunnlagValues => {
    const initialValues = {} as FordelBeregningsgrunnlagValues;
    if (!fordelBGPerioder) {
      return initialValues;
    }
    const harKunYtelse = bg.aktivitetStatus.some((status) => status.kode === aktivitetStatuser.KUN_YTELSE);
    const bgPerioder = bg.beregningsgrunnlagPeriode;
    slaaSammenPerioder(fordelBGPerioder, bgPerioder).forEach((periode, index) => {
      const bgPeriode = finnRiktigBgPeriode(periode, bgPerioder);
      initialValues[getFieldNameKey(index)] = FordelBeregningsgrunnlagPeriodePanel
        .buildInitialValues(periode, bgPeriode, bg.skjaeringstidspunktBeregning, harKunYtelse, getKodeverknavn, arbeidsgiverOpplysningerPerId);
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

  showPanel(fom: string): void {
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
      arbeidsgiverOpplysningerPerId,
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
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
            <VerticalSpacer eightPx />
          </React.Fragment>
        ))}
      </BorderBox>
    );
  }
}

export default FordelBeregningsgrunnlagForm;

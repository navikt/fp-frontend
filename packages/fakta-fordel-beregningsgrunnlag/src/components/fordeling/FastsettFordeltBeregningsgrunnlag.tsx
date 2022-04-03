import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  AlleKodeverk,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { FordelBeregningsgrunnlagPerioderTransformedValues }
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/FordelBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagForm from './FordelBeregningsgrunnlagForm';

import FordelBeregningsgrunnlagMedAksjonspunktValues, { FordelBeregningsgrunnlagValues } from '../../types/FordelBeregningsgrunnlagPanelValues';

const getFordelPerioder = (beregningsgrunnlag: Beregningsgrunnlag): FordelBeregningsgrunnlagPeriode[] => {
  if (beregningsgrunnlag && beregningsgrunnlag.faktaOmFordeling
    && beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag) {
    return beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  }
  return [];
};

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: AlleKodeverk;
    behandlingType: string;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  buildInitialValues: (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
                       bg: Beregningsgrunnlag,
                       getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
                       arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => FordelBeregningsgrunnlagValues;
  transformValues: (values: FordelBeregningsgrunnlagMedAksjonspunktValues,
                    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
                    bgPerioder: BeregningsgrunnlagPeriodeProp[]) => FordelBeregningsgrunnlagPerioderTransformedValues;
  validate: (intl: IntlShape,
             values: FordelBeregningsgrunnlagMedAksjonspunktValues,
             fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
             beregningsgrunnlag: Beregningsgrunnlag,
             getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
             arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => any;
}

const FastsettFordeltBeregningsgrunnlag: FunctionComponent<OwnProps> & StaticFunctions = ({
  isAksjonspunktClosed,
  readOnly,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  arbeidsgiverOpplysningerPerId,
}) => {
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const perioder = getFordelPerioder(beregningsgrunnlag);
  return (
    <FordelBeregningsgrunnlagForm
      perioder={perioder}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      bgPerioder={bgPerioder}
      beregningsgrunnlag={beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      behandlingType={behandlingType}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  );
};

FastsettFordeltBeregningsgrunnlag.buildInitialValues = (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bg: Beregningsgrunnlag,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): FordelBeregningsgrunnlagValues => (FordelBeregningsgrunnlagForm
  .buildInitialValues(fordelBGPerioder, bg, getKodeverknavn, arbeidsgiverOpplysningerPerId));

FastsettFordeltBeregningsgrunnlag.transformValues = (values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[]): FordelBeregningsgrunnlagPerioderTransformedValues => FordelBeregningsgrunnlagForm.transformValues(values,
  fordelBGPerioder, bgPerioder);

FastsettFordeltBeregningsgrunnlag.validate = (intl: IntlShape,
  values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  beregningsgrunnlag: Beregningsgrunnlag,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => (
  FordelBeregningsgrunnlagForm
    .validate(intl, values, fordelBGPerioder, beregningsgrunnlag, getKodeverknavn, arbeidsgiverOpplysningerPerId));

const emptyArray = [];

export default FastsettFordeltBeregningsgrunnlag;

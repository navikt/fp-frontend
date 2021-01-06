import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IntlShape } from 'react-intl';

import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  KodeverkMedNavn,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';

import FordelBeregningsgrunnlagForm from './FordelBeregningsgrunnlagForm';

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

interface StaticFunctions {
  buildInitialValues: (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
                       bg: Beregningsgrunnlag,
                       getKodeverknavn: (kodeverk: Kodeverk) => string,
                       arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => any;
  transformValues: (values: any, fordelBGPerioder: FordelBeregningsgrunnlagPeriode[], bgPerioder: BeregningsgrunnlagPeriodeProp[]) => any;
  validate: (intl: IntlShape,
             values: any,
             fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
             beregningsgrunnlag: Beregningsgrunnlag,
             getKodeverknavn: (kodeverk: Kodeverk) => string,
             arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => any;
}

export const FastsettFordeltBeregningsgrunnlagImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  isAksjonspunktClosed,
  readOnly,
  perioder, bgPerioder,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  arbeidsgiverOpplysningerPerId,
}) => (
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

FastsettFordeltBeregningsgrunnlagImpl.buildInitialValues = (fordelBGPerioder,
  bg,
  getKodeverknavn,
  arbeidsgiverOpplysningerPerId) => (FordelBeregningsgrunnlagForm
  .buildInitialValues(fordelBGPerioder, bg, getKodeverknavn, arbeidsgiverOpplysningerPerId));

FastsettFordeltBeregningsgrunnlagImpl.transformValues = (values, fordelBGPerioder, bgPerioder) => FordelBeregningsgrunnlagForm.transformValues(values,
  fordelBGPerioder, bgPerioder);

FastsettFordeltBeregningsgrunnlagImpl.validate = (intl,
  values,
  fordelBGPerioder,
  beregningsgrunnlag,
  getKodeverknavn,
  arbeidsgiverOpplysningerPerId) => (
  FordelBeregningsgrunnlagForm
    .validate(intl, values, fordelBGPerioder, beregningsgrunnlag, getKodeverknavn, arbeidsgiverOpplysningerPerId));

const emptyArray = [];

const getFordelPerioder = (beregningsgrunnlag) => {
  if (beregningsgrunnlag && beregningsgrunnlag.faktaOmFordeling
    && beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag) {
    return beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  }
  return undefined;
};

const mapStateToProps = (state, ownProps) => {
  const bgPerioder = ownProps.beregningsgrunnlag.beregningsgrunnlagPeriode;
  const perioder = getFordelPerioder(ownProps.beregningsgrunnlag);
  return ({
    perioder: perioder || emptyArray,
    bgPerioder,
  });
};

export default connect(mapStateToProps)(FastsettFordeltBeregningsgrunnlagImpl);

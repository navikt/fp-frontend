import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import { behandlingForm } from '@fpsak-frontend/form';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn } from '@fpsak-frontend/types';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';

import FordelingHelpText from './FordelingHelpText';
import FastsettFordeltBeregningsgrunnlag, { FastsettFordeltBeregningsgrunnlagImpl } from './fordeling/FastsettFordeltBeregningsgrunnlag';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
} = aksjonspunktCodes;

const FORM_NAME_FORDEL_BEREGNING = 'fordelBeregningsgrunnlagForm';

const findAksjonspunktMedBegrunnelse = (aksjonspunkter) => aksjonspunkter
  .find((ap) => ap.definisjon.kode === FORDEL_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelseFordeling';

interface PureOwnProps {
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  submittable: boolean;
  submitEnabled: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  behandlingType: Kodeverk;
  aksjonspunkter: Aksjonspunkt[];
  intl: IntlShape;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  hasBegrunnelse: boolean;
  isAksjonspunktClosed: boolean;
  initialValues: any;
  validate: any;
  onSubmit: any;
}

/**
 * FordelingForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
const FordelingFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  readOnly,
  submittable,
  isAksjonspunktClosed,
  hasBegrunnelse,
  submitEnabled,
  behandlingId,
  behandlingVersjon,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  aksjonspunkter,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <FordelingHelpText
      isAksjonspunktClosed={isAksjonspunktClosed}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      beregningsgrunnlag={beregningsgrunnlag}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
    <VerticalSpacer twentyPx />
    <FastsettFordeltBeregningsgrunnlag
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      beregningsgrunnlag={beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      behandlingType={behandlingType}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
    <VerticalSpacer twentyPx />
    <FaktaBegrunnelseTextField
      name={BEGRUNNELSE_FORDELING_NAME}
      isSubmittable={submittable}
      isReadOnly={readOnly}
      hasBegrunnelse={hasBegrunnelse}
    />
    <>
      <VerticalSpacer twentyPx />
      <FaktaSubmitButton
        formName={formProps.form}
        isSubmittable={submittable && submitEnabled}
        isReadOnly={readOnly}
        hasOpenAksjonspunkter={!isAksjonspunktClosed}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
      />
    </>
  </form>
);

export const transformValuesFordelBeregning = createSelector(
  [(ownProps: PureOwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag, aksjonspunkter) => (values) => {
    const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      const faktaBeregningValues = values;
      const begrunnelse = faktaBeregningValues[BEGRUNNELSE_FORDELING_NAME];
      return [{
        begrunnelse,
        kode: FORDEL_BEREGNINGSGRUNNLAG,
        ...FastsettFordeltBeregningsgrunnlagImpl.transformValues(values, fordelBGPerioder, bgPerioder),
      }];
    }
    return {};
  },
);

export const buildInitialValuesFordelBeregning = createSelector(
  [(ownProps: PureOwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
    (ownProps: PureOwnProps) => ownProps.alleKodeverk,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag, arbeidsgiverOpplysningerPerId, alleKodeverk, aksjonspunkter) => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (!hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      return {};
    }
    return ({
      ...FaktaBegrunnelseTextField.buildInitialValues(findAksjonspunktMedBegrunnelse(aksjonspunkter), BEGRUNNELSE_FORDELING_NAME),
      ...FastsettFordeltBeregningsgrunnlagImpl.buildInitialValues(fordelBGPerioder,
        beregningsgrunnlag,
        getKodeverknavnFn(alleKodeverk, kodeverkTyper),
        arbeidsgiverOpplysningerPerId),
    });
  },
);

export const getValidationFordelBeregning = createSelector(
  [(ownProps: PureOwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
    (ownProps: PureOwnProps) => ownProps.alleKodeverk,
    (ownProps: PureOwnProps) => ownProps.intl,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag,
    arbeidsgiverOpplysningerPerId,
    alleKodeverk,
    intl,
    aksjonspunkter) => (values) => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      return {
        ...FastsettFordeltBeregningsgrunnlagImpl.validate(intl, values, fordelBGPerioder,
          beregningsgrunnlag, getKodeverknavnFn(alleKodeverk, kodeverkTyper), arbeidsgiverOpplysningerPerId),
      };
    }
    return null;
  },
);

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, transformValuesFordelBeregning],
(submitCallback, transformValuesFordelBeregningFn) => (values) => submitCallback(transformValuesFordelBeregningFn(values)));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => {
  const relevantAp = ownProps.aksjonspunkter.find((ap) => ap.definisjon.kode === FORDEL_BEREGNINGSGRUNNLAG);
  const isAksjonspunktClosed = !isAksjonspunktOpen(relevantAp.status.kode);
  const initialValues = buildInitialValuesFordelBeregning(ownProps);
  const hasBegrunnelse = initialValues && !!initialValues[BEGRUNNELSE_FORDELING_NAME];
  return {
    isAksjonspunktClosed,
    hasBegrunnelse,
    initialValues,
    validate: getValidationFordelBeregning(ownProps),
    onSubmit: lagSubmitFn(ownProps),
  };
};

const FordelingForm = connect(mapStateToProps)(behandlingForm({ form: FORM_NAME_FORDEL_BEREGNING })(FordelingFormImpl));

export default FordelingForm;

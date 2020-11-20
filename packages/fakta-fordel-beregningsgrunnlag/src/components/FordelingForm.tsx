import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import { behandlingForm } from '@fpsak-frontend/form';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { InjectedFormProps } from 'redux-form';
import FordelingHelpText from './FordelingHelpText';
import FastsettFordeltBeregningsgrunnlag, { FastsettFordeltBeregningsgrunnlagImpl } from './fordeling/FastsettFordeltBeregningsgrunnlag';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
} = aksjonspunktCodes;

const FORM_NAME_FORDEL_BEREGNING = 'fordelBeregningsgrunnlagForm';

const findAksjonspunktMedBegrunnelse = (aksjonspunkter) => aksjonspunkter
  .find((ap) => ap.definisjon.kode === FORDEL_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelseFordeling';

type OwnProps = {
    submitCallback: (...args: any[]) => any;
    readOnly: boolean;
    submittable: boolean;
    submitEnabled: boolean;
    hasBegrunnelse: boolean;
    isAksjonspunktClosed: boolean;
    behandlingId: number;
    behandlingVersjon: number;
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    behandlingType: Kodeverk;
    aksjonspunkter: Aksjonspunkt[];
};

/**
 * FordelingForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
const FordelingFormImpl: FunctionComponent<OwnProps & InjectedFormProps> = ({
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
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <FordelingHelpText
      isAksjonspunktClosed={isAksjonspunktClosed}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      beregningsgrunnlag={beregningsgrunnlag}
    />
    <VerticalSpacer twentyPx />
    <FastsettFordeltBeregningsgrunnlag
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      beregningsgrunnlag={beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      behandlingType={behandlingType}
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
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: OwnProps) => ownProps.aksjonspunkter],
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
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: OwnProps) => ownProps.alleKodeverk,
    (ownProps: OwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag, alleKodeverk, aksjonspunkter) => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (!hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      return {};
    }
    return ({
      ...FaktaBegrunnelseTextField.buildInitialValues(findAksjonspunktMedBegrunnelse(aksjonspunkter), BEGRUNNELSE_FORDELING_NAME),
      ...FastsettFordeltBeregningsgrunnlagImpl.buildInitialValues(fordelBGPerioder, beregningsgrunnlag, getKodeverknavnFn(alleKodeverk, kodeverkTyper)),
    });
  },
);

export const getValidationFordelBeregning = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: OwnProps) => ownProps.alleKodeverk,
    (ownProps: OwnProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag, alleKodeverk, aksjonspunkter) => (values) => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
      return {
        ...FastsettFordeltBeregningsgrunnlagImpl.validate(values, fordelBGPerioder,
          beregningsgrunnlag, getKodeverknavnFn(alleKodeverk, kodeverkTyper)),
      };
    }
    return null;
  },
);

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.submitCallback, transformValuesFordelBeregning],
(submitCallback, transformValuesFordelBeregningFn) => (values) => submitCallback(transformValuesFordelBeregningFn(values)));

const mapStateToProps = (state, ownProps) => {
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

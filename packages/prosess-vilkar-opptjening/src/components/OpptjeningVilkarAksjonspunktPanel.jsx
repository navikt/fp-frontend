import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  VilkarResultPicker, ProsessStegBegrunnelseTextField, ProsessPanelTemplate,
} from '@fpsak-frontend/prosess-felles';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';

import { fastsattOpptjeningPropType } from '../propTypes/opptjeningVilkarOpptjeningPropType';
import OpptjeningVilkarView from './OpptjeningVilkarView';

const FORM_NAME = 'OpptjeningVilkarForm';

/**
 * OpptjeningVilkarAksjonspunktPanel
 *
 * Presentasjonskomponent. Viser panel for å løse aksjonspunkt for avslått opptjeningsvilkår
 */
export const OpptjeningVilkarAksjonspunktPanelImpl = ({
  isApOpen,
  erVilkarOk,
  originalErVilkarOk,
  readOnlySubmitButton,
  readOnly,
  lovReferanse,
  behandlingId,
  behandlingVersjon,
  fastsattOpptjening,
  ...formProps
}) => (
  <ProsessPanelTemplate
    titleCode="OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"
    isAksjonspunktOpen={isApOpen}
    formName={formProps.form}
    handleSubmit={formProps.handleSubmit}
    isDirty={formProps.dirty}
    readOnlySubmitButton={readOnlySubmitButton}
    readOnly={readOnly}
    lovReferanse={lovReferanse}
    behandlingId={behandlingId}
    behandlingVersjon={behandlingVersjon}
    originalErVilkarOk={originalErVilkarOk}
    rendreFakta={() => (
      <>
        <VerticalSpacer sixteenPx />
        <OpptjeningVilkarView
          months={fastsattOpptjening.opptjeningperiode.måneder}
          days={fastsattOpptjening.opptjeningperiode.dager}
          fastsattOpptjeningActivities={fastsattOpptjening.fastsattOpptjeningAktivitetList}
          opptjeningFomDate={fastsattOpptjening.opptjeningFom}
          opptjeningTomDate={fastsattOpptjening.opptjeningTom}
        />
      </>
    )}
  >
    <Element><FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger" /></Element>
    <VilkarResultPicker
      erVilkarOk={erVilkarOk}
      readOnly={readOnly}
      hasAksjonspunkt
      customVilkarOppfyltText={{ id: 'OpptjeningVilkarAksjonspunktPanel.ErOppfylt' }}
      customVilkarIkkeOppfyltText={{ id: 'OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt' }}
    />
    <VerticalSpacer sixteenPx />
    <ProsessStegBegrunnelseTextField readOnly={readOnly} />
  </ProsessPanelTemplate>
);

OpptjeningVilkarAksjonspunktPanelImpl.propTypes = {
  fastsattOpptjening: fastsattOpptjeningPropType.isRequired,
  isApOpen: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
  readOnlySubmitButton: PropTypes.bool.isRequired,
  behandlingId: PropTypes.number.isRequired,
  behandlingVersjon: PropTypes.number.isRequired,
  erVilkarOk: PropTypes.bool,
  originalErVilkarOk: PropTypes.bool,
  lovReferanse: PropTypes.string,
};

OpptjeningVilkarAksjonspunktPanelImpl.defaultProps = {
  erVilkarOk: undefined,
  originalErVilkarOk: undefined,
  lovReferanse: undefined,
};

export const buildInitialValues = createSelector(
  [(ownProps) => ownProps.behandlingsresultat,
    (ownProps) => ownProps.aksjonspunkter,
    (ownProps) => ownProps.status],
  (behandlingsresultat, aksjonspunkter, status) => ({
    ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
    ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
  }),
);

const transformValues = (values, aksjonspunkter) => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  ...{ kode: aksjonspunkter[0].definisjon.kode },
});

const lagSubmitFn = createSelector([
  (ownProps) => ownProps.submitCallback, (ownProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values) => submitCallback([transformValues(values, aksjonspunkter)]));

const mapStateToPropsFactory = (initialState, initialOwnProps) => {
  const isOpenAksjonspunkt = initialOwnProps.aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === initialOwnProps.status;

  return (state, ownProps) => ({
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitialValues(ownProps),
    originalErVilkarOk: erVilkarOk,
    erVilkarOk: behandlingFormValueSelector(FORM_NAME, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'erVilkarOk'),
    lovReferanse: ownProps.lovReferanse,
  });
};

const OpptjeningVilkarAksjonspunktPanel = connect(mapStateToPropsFactory)(behandlingForm({
  form: FORM_NAME,
})(OpptjeningVilkarAksjonspunktPanelImpl));

export default OpptjeningVilkarAksjonspunktPanel;

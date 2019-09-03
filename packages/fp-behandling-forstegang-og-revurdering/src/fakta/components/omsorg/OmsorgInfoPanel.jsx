import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formPropTypes } from 'redux-form';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl } from 'react-intl';

import {
  behandlingFormForstegangOgRevurdering,
  behandlingFormValueSelector,
} from 'behandlingForstegangOgRevurdering/src/behandlingFormForstegangOgRevurdering';
import { AksjonspunktHelpText } from '@fpsak-frontend/shared-components';
import { aksjonspunktPropType, personopplysningPropType } from '@fpsak-frontend/prop-types';
import { FaktaBegrunnelseTextField, FaktaEkspandertpanel, withDefaultToggling } from '@fpsak-frontend/fp-behandling-felles';
import { getBehandlingYtelseFordeling, getEktefellePersonopplysning, getPersonopplysning } from 'behandlingForstegangOgRevurdering/src/behandlingSelectors';
import behandlingSelectors from 'behandlingForstegangOgRevurdering/src/selectors/forsteOgRevBehandlingSelectors';
import FaktaSubmitButton from 'behandlingForstegangOgRevurdering/src/fakta/components/FaktaSubmitButton';
import BostedFaktaView from 'behandlingForstegangOgRevurdering/src/fakta/components/omsorg/BostedFaktaView';
import OmsorgFaktaForm from 'behandlingForstegangOgRevurdering/src/fakta/components/omsorg/OmsorgFaktaForm';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import IkkeOmsorgPeriodeField from './IkkeOmsorgPeriodeField';


const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = aksjonspunktCodes;

const OMSORG_IP = 'omsorg';

const getHelpTexts = (aksjonspunkter) => {
  const helpTexts = [];
  const harAleneomsorgAp = aksjonspunkter.filter((ap) => ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG);
  const harOmsorgAp = aksjonspunkter.filter((ap) => ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  if (harAleneomsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderAleneomsorg" id="OmsorgInfoPanel.VurderAleneomsorg" />);
  }
  if (harOmsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderOmsorg" id="OmsorgInfoPanel.VurderOmsorg" />);
  }
  return helpTexts;
};

export const OmsorgInfoPanelImpl = ({
  intl,
  openInfoPanels,
  toggleInfoPanelCallback,
  personopplysning,
  ektefellePersonopplysning,
  readOnly,
  hasOpenAksjonspunkter,
  submittable,
  aksjonspunkter,
  omsorg,
  ...formProps
}) => (
  <FaktaEkspandertpanel
    title={intl.formatMessage({ id: 'OmsorgInfoPanel.Omsorg' })}
    isInfoPanelOpen={openInfoPanels.includes(OMSORG_IP)}
    toggleInfoPanelCallback={toggleInfoPanelCallback}
    faktaId={OMSORG_IP}
    hasOpenAksjonspunkter={hasOpenAksjonspunkter}
    readOnly={readOnly}
  >
    {!readOnly
    && (
    <AksjonspunktHelpText isAksjonspunktOpen={hasOpenAksjonspunkter}>
      {getHelpTexts(aksjonspunkter)}
    </AksjonspunktHelpText>
    )}
    <BostedFaktaView personopplysning={personopplysning} ektefellePersonopplysning={ektefellePersonopplysning} />
    <form onSubmit={formProps.handleSubmit}>
      <FaktaBegrunnelseTextField isDirty={formProps.dirty} isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse hasVurderingText />
      <OmsorgFaktaForm readOnly={readOnly} omsorg={omsorg} aksjonspunkter={aksjonspunkter} />
      <FaktaSubmitButton formName={formProps.form} isSubmittable={submittable} isReadOnly={readOnly} hasOpenAksjonspunkter={hasOpenAksjonspunkter} />
    </form>

  </FaktaEkspandertpanel>
);

OmsorgInfoPanelImpl.propTypes = {
  aksjonspunkter: PropTypes.arrayOf(aksjonspunktPropType.isRequired).isRequired,
  openInfoPanels: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleInfoPanelCallback: PropTypes.func.isRequired,
  personopplysning: personopplysningPropType.isRequired,
  annenPartPersonopplysning: personopplysningPropType,
  readOnly: PropTypes.bool.isRequired,
  hasOpenAksjonspunkter: PropTypes.bool.isRequired,
  submittable: PropTypes.bool.isRequired,
  omsorg: PropTypes.bool,
  intl: PropTypes.shape().isRequired,
  ...formPropTypes,
};

OmsorgInfoPanelImpl.defaultProps = {
  annenPartPersonopplysning: undefined,
  omsorg: undefined,
};

const buildInitialValues = createSelector([getBehandlingYtelseFordeling, behandlingSelectors.getAksjonspunkter], (ytelsefordeling, aksjonspunkter) => {
  const omsorgAp = aksjonspunkter.filter((ap) => ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG
    || ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  return {
    ...OmsorgFaktaForm.buildInitialValues(ytelsefordeling, omsorgAp),
    ...FaktaBegrunnelseTextField.buildInitialValues(omsorgAp),
  };
});

const transformValues = (values, submitCallback, aksjonspunkter) => {
  const aksjonspunkterArray = [];
  if (hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunkter)) {
    aksjonspunkterArray.push(OmsorgFaktaForm.transformAleneomsorgValues(values));
  }
  if (hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter)) {
    aksjonspunkterArray.push(OmsorgFaktaForm.transformOmsorgValues(values));
  }
  const aksjonspunkterMedBegrunnelse = aksjonspunkterArray.map((ap) => ({
    ...ap,
    ...{ begrunnelse: values.begrunnelse },
  }));

  return submitCallback(aksjonspunkterMedBegrunnelse);
};

const mapStateToPropsFactory = (initialState, ownProps) => {
  const onSubmit = (values) => transformValues(values, ownProps.submitCallback, ownProps.aksjonspunkter);
  return (state) => ({
    initialValues: buildInitialValues(state),
    personopplysning: getPersonopplysning(state),
    ektefellePersonopplysning: getEktefellePersonopplysning(state),
    omsorg: behandlingFormValueSelector('OmsorgInfoPanel')(state, 'omsorg'),
    onSubmit,
  });
};

const omsorgAksjonspunkter = [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG];

const OmsorgInfoPanel = withDefaultToggling(OMSORG_IP, omsorgAksjonspunkter)(connect(mapStateToPropsFactory)(behandlingFormForstegangOgRevurdering({
  form: 'OmsorgInfoPanel',
  validate: IkkeOmsorgPeriodeField.validate,
})(injectIntl(OmsorgInfoPanelImpl))));

OmsorgInfoPanel.supports = (aksjonspunkter) => aksjonspunkter.some((ap) => omsorgAksjonspunkter.includes(ap.definisjon.kode));

export default OmsorgInfoPanel;

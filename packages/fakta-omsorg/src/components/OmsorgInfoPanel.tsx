import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps, WrappedReduxFormContext } from 'redux-form';

import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  Aksjonspunkt, KodeverkMedNavn, Personopplysninger, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';

import OmsorgFaktaForm from './OmsorgFaktaForm';
import BostedFaktaView from './BostedFaktaView';
import IkkeOmsorgPeriodeField from './IkkeOmsorgPeriodeField';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = aksjonspunktCodes;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]) => {
  const helpTexts = [];
  const harAleneomsorgAp = aksjonspunkter.filter((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG);
  const harOmsorgAp = aksjonspunkter.filter((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  if (harAleneomsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderAleneomsorg" id="OmsorgInfoPanel.VurderAleneomsorg" />);
  }
  if (harOmsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderOmsorg" id="OmsorgInfoPanel.VurderOmsorg" />);
  }
  return helpTexts;
};

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  omsorg?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingId: number;
  behandlingVersjon: number;
  personopplysninger: Personopplysninger;
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
}

export const OmsorgInfoPanel: FunctionComponent<OwnProps & WrappedReduxFormContext & InjectedFormProps> = ({
  personopplysninger,
  readOnly,
  hasOpenAksjonspunkter,
  submittable,
  aksjonspunkter,
  omsorg,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  ytelsefordeling,
  soknad,
  alleMerknaderFraBeslutter,
  ...formProps
}) => (
  <>
    {!readOnly && (
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {getHelpTexts(aksjonspunkter)}
      </AksjonspunktHelpTextTemp>
    )}
    <BostedFaktaView personopplysning={personopplysninger} ektefellePersonopplysning={personopplysninger.ektefelle} alleKodeverk={alleKodeverk} />
    <form onSubmit={formProps.handleSubmit}>
      <FaktaBegrunnelseTextField isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse hasVurderingText />
      <OmsorgFaktaForm
        readOnly={readOnly}
        omsorg={omsorg}
        aksjonspunkter={aksjonspunkter}
        ytelsefordeling={ytelsefordeling}
        soknad={soknad}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      />
      <FaktaSubmitButton
        formName={formProps.form}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasOpenAksjonspunkter={hasOpenAksjonspunkter}
      />
    </form>

  </>
);

interface PureOwnProps {
  ytelsefordeling: Ytelsefordeling;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (...args: any[]) => any;
  behandlingId: number;
  behandlingVersjon: number;
}

const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.ytelsefordeling,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(ytelsefordeling, aksjonspunkter) => {
  const omsorgAp = aksjonspunkter.filter((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG
    || ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  return {
    ...OmsorgFaktaForm.buildInitialValues(ytelsefordeling, omsorgAp),
    ...FaktaBegrunnelseTextField.buildInitialValues(omsorgAp),
  };
});

const transformValues = (values: any, submitCallback: (...args: any[]) => any, aksjonspunkter: Aksjonspunkt[]) => {
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

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: any) => transformValues(values, submitCallback, aksjonspunkter));

const mapStateToPropsFactory = (state: any, ownProps: PureOwnProps) => ({
  initialValues: buildInitialValues(ownProps),
  omsorg: behandlingFormValueSelector('OmsorgInfoPanel', ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'omsorg'),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: 'OmsorgInfoPanel',
  validate: IkkeOmsorgPeriodeField.validate,
})(OmsorgInfoPanel));

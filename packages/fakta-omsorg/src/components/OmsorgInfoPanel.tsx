import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';

import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@navikt/ft-ui-komponenter';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, AlleKodeverk, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { BekreftAleneomsorgVurderingAp, BekreftOmsorgVurderingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OmsorgFaktaForm, { FormValues as OmsorgFormValues } from './OmsorgFaktaForm';
import BostedFaktaView from './BostedFaktaView';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = aksjonspunktCodes;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts = [];
  const harAleneomsorgAp = aksjonspunkter.filter((ap) => ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG);
  const harOmsorgAp = aksjonspunkter.filter((ap) => ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  if (harAleneomsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderAleneomsorg" id="OmsorgInfoPanel.VurderAleneomsorg" />);
  }
  if (harOmsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderOmsorg" id="OmsorgInfoPanel.VurderOmsorg" />);
  }
  return helpTexts;
};

type AksjonspunktData = Array<BekreftAleneomsorgVurderingAp | BekreftOmsorgVurderingAp>;

type FormValues = OmsorgFormValues & {
  begrunnelse?: string;
}

interface PureOwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
  submitCallback: (data: AksjonspunktData) => Promise<void>;
}

interface MappedOwnProps {
  omsorg?: boolean;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

export const OmsorgInfoPanel: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  personoversikt,
  readOnly,
  hasOpenAksjonspunkter,
  submittable,
  aksjonspunkter,
  omsorg,
  alleKodeverk,
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
    <BostedFaktaView personoversikt={personoversikt} alleKodeverk={alleKodeverk} />
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
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasOpenAksjonspunkter={hasOpenAksjonspunkter}
      />
    </form>

  </>
);

const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.ytelsefordeling,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(ytelsefordeling, aksjonspunkter): FormValues => {
  const omsorgAp = aksjonspunkter.filter((ap) => ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG
    || ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  return {
    ...OmsorgFaktaForm.buildInitialValues(ytelsefordeling, omsorgAp),
    ...FaktaBegrunnelseTextField.buildInitialValues(omsorgAp),
  };
});

const transformValues = (
  values: FormValues,
  aksjonspunkter: Aksjonspunkt[],
): AksjonspunktData => {
  const aksjonspunkterArray = [] as AksjonspunktData;
  if (hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunkter)) {
    aksjonspunkterArray.push(OmsorgFaktaForm.transformAleneomsorgValues(values));
  }
  if (hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter)) {
    aksjonspunkterArray.push(OmsorgFaktaForm.transformOmsorgValues(values));
  }
  return aksjonspunkterArray.map((ap) => ({
    ...ap,
    ...{ begrunnelse: values.begrunnelse },
  }));
};

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback(transformValues(values, aksjonspunkter)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps),
  omsorg: formValueSelector('OmsorgInfoPanel')(state, 'omsorg'),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'OmsorgInfoPanel',
  validate: OmsorgFaktaForm.validate,
  destroyOnUnmount: false,
})(OmsorgInfoPanel));

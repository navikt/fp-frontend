import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { createSelector } from 'reselect';

import {
  Aksjonspunkt, KodeverkMedNavn, Verge, AlleKodeverk,
} from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { AvklarVergeAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import RegistrereVergeFaktaForm, { FormValues as RegistrereFormValues } from './RegistrereVergeFaktaForm';

type FormValues = RegistrereFormValues & {
  begrunnelse?: string,
}

interface PureOwnProps {
  submitCallback: (aksjonspunktData: AvklarVergeAp) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk;
  verge: Verge;
  hasOpenAksjonspunkter: boolean;
  submittable?: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  valgtVergeType?: string;
  initialValues?: FormValues;
  vergetyper: KodeverkMedNavn[];
  onSubmit: (formValues: FormValues) => any;
}

/**
 * RegistrereVergeInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.
 */
export const RegistrereVergeInfoPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  initialValues,
  vergetyper,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  valgtVergeType,
  ...formProps
}) => {
  if (aksjonspunkter.length === 0) {
    return null;
  }
  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {[intl.formatMessage({ id: 'RegistrereVergeInfoPanel.CheckInformation' })]}
      </AksjonspunktHelpTextTemp>
      <form onSubmit={formProps.handleSubmit}>
        <RegistrereVergeFaktaForm
          readOnly={readOnly}
          intl={intl}
          vergetyper={vergetyper}
          valgtVergeType={valgtVergeType}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
        <VerticalSpacer twentyPx />
        <FaktaBegrunnelseTextField isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!initialValues.begrunnelse} />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButton
          formName={formProps.form}
          isSubmittable={submittable && !!valgtVergeType}
          isReadOnly={readOnly}
          hasOpenAksjonspunkter={hasOpenAksjonspunkter}
          doNotCheckForRequiredFields
        />
      </form>
    </>
  );
};

RegistrereVergeInfoPanelImpl.defaultProps = {
  initialValues: {},
  submittable: true,
};

const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.verge,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter], (verge, aksjonspunkter): FormValues => ({
  begrunnelse: FaktaBegrunnelseTextField.buildInitialValues(aksjonspunkter
    .filter((ap) => ap.definisjon.kode === aksjonspunktCodes.AVKLAR_VERGE)[0]).begrunnelse,
  ...RegistrereVergeFaktaForm.buildInitialValues(verge || {}),
}));

const transformValues = (values: FormValues): AvklarVergeAp => ({
  ...RegistrereVergeFaktaForm.transformValues(values),
  ...{ begrunnelse: values.begrunnelse },
});

const FORM_NAVN = 'RegistrereVergeInfoPanel';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  valgtVergeType: formValueSelector(FORM_NAVN)(state, 'vergeType'),
  initialValues: buildInitialValues(ownProps),
  vergetyper: ownProps.alleKodeverk[kodeverkTyper.VERGE_TYPE],
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(reduxForm({
  form: FORM_NAVN,
  destroyOnUnmount: false,
})(injectIntl(RegistrereVergeInfoPanelImpl)));

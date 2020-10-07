import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { createSelector } from 'reselect';

import { Aksjonspunkt, KodeverkMedNavn } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import RegistrereVergeFaktaForm from './RegistrereVergeFaktaForm';
import Verge from '../types/VergeTsType';

type OwnProps = {
    hasOpenAksjonspunkter: boolean;
    submittable?: boolean;
    readOnly: boolean;
    aksjonspunkt: Aksjonspunkt;
    vergetyper: KodeverkMedNavn[];
    initialValues?: {
      begrunnelse?: string,
    };
    alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
    behandlingId: number;
    behandlingVersjon: number;
    valgtVergeType?: string;
};

/**
 * RegistrereVergeInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.
 */
export const RegistrereVergeInfoPanelImpl: FunctionComponent<OwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  initialValues,
  vergetyper,
  aksjonspunkt,
  behandlingId,
  behandlingVersjon,
  alleMerknaderFraBeslutter,
  valgtVergeType,
  ...formProps
}) => {
  if (!aksjonspunkt) {
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
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
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
  valgtVergeType: undefined,
};

interface PureOwnProps {
  submitCallback: (...args: any[]) => any;
  behandlingId: number;
  behandlingVersjon: number;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  verge: Verge;
}

const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.verge,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter], (verge, aksjonspunkter) => ({
  begrunnelse: verge && verge.begrunnelse ? decodeHtmlEntity(verge.begrunnelse) : FaktaBegrunnelseTextField
    .buildInitialValues(aksjonspunkter.filter((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.AVKLAR_VERGE)[0]).begrunnelse,
  ...RegistrereVergeFaktaForm.buildInitialValues(verge || {}),
}));

const transformValues = (values: { begrunnelse: string }) => ({
  ...RegistrereVergeFaktaForm.transformValues(values),
  ...{ begrunnelse: values.begrunnelse },
});

const FORM_NAVN = 'RegistrereVergeInfoPanel';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: any) => submitCallback([transformValues(values)]));

const mapStateToProps = (state: any, ownProps: PureOwnProps) => ({
  valgtVergeType: behandlingFormValueSelector(FORM_NAVN, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'vergeType'),
  aksjonspunkt: ownProps.aksjonspunkter[0],
  initialValues: buildInitialValues(ownProps),
  vergetyper: ownProps.alleKodeverk[kodeverkTyper.VERGE_TYPE],
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(behandlingForm({
  form: FORM_NAVN,
})(injectIntl(RegistrereVergeInfoPanelImpl)));

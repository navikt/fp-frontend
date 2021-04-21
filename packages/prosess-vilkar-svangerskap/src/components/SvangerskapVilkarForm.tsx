import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ProsessStegBegrunnelseTextField, VilkarResultPicker, ProsessPanelTemplate,
} from '@fpsak-frontend/prosess-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, Vilkar,
} from '@fpsak-frontend/types';
import { BekreftSvangerskapspengervilkarAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

type FormValues = {
  erVilkarOk: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  vilkar: Vilkar[];
  submitCallback: (aksjonspunktData: BekreftSvangerskapspengervilkarAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  erVilkarOk?: boolean;
  originalErVilkarOk: boolean;
  avslagsarsaker: KodeverkMedNavn[];
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * SvangerskapsvilkårForm
 *
 * Presentasjonskomponent.
 */
export const SvangerskapVilkarFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps<FormValues> & WrappedComponentProps> = ({
  intl,
  avslagsarsaker,
  readOnly,
  readOnlySubmitButton,
  erVilkarOk,
  isApOpen,
  originalErVilkarOk,
  ...formProps
}) => (
  <ProsessPanelTemplate
    title={intl.formatMessage({ id: 'SvangerskapVilkarForm.Svangerskap' })}
    isAksjonspunktOpen={isApOpen}
    formName={formProps.form}
    handleSubmit={formProps.handleSubmit}
    readOnlySubmitButton={readOnlySubmitButton}
    readOnly={readOnly}
    originalErVilkarOk={originalErVilkarOk}
  >
    <Element><FormattedMessage id="SvangerskapVilkarForm.RettTilSvp" /></Element>
    <VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={erVilkarOk}
      readOnly={readOnly}
      customVilkarOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.Oppfylt" />}
      customVilkarIkkeOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.IkkeOppfylt" values={{ b: (chunks) => <b>{chunks}</b> }} />}
    />
    {erVilkarOk === false
      && <ProsessStegBegrunnelseTextField readOnly={readOnly} />}
  </ProsessPanelTemplate>
);

const validate = ({
  erVilkarOk,
  avslagCode,
}: FormValues): any => VilkarResultPicker.validate(erVilkarOk, avslagCode);

export const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.status],
  (behandlingsresultat, aksjonspunkter, status): FormValues => ({
    ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
    ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
  }),
);

const transformValues = (values: FormValues): BekreftSvangerskapspengervilkarAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  kode: AksjonspunktKode.SVANGERSKAPSVILKARET,
});

const formName = 'SvangerskapVilkarForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const { status, alleKodeverk, aksjonspunkter } = ownProps;
  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  return {
    originalErVilkarOk: erVilkarOk,
    initialValues: buildInitialValues(ownProps),
    erVilkarOk: formValueSelector(formName)(state, 'erVilkarOk'),
    avslagsarsaker: alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.SVANGERSKAPVILKARET],
    onSubmit: lagSubmitFn(ownProps),
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: formName,
  validate,
  destroyOnUnmount: false,
})(injectIntl(SvangerskapVilkarFormImpl)));

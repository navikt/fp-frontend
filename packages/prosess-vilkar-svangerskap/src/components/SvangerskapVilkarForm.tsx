import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ProsessStegBegrunnelseTextField, VilkarResultPicker, ProsessPanelTemplate,
} from '@fpsak-frontend/prosess-felles';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, Vilkar,
} from '@fpsak-frontend/types';

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  vilkar: Vilkar[];
  submitCallback: (aksjonspunktData: { kode: string }[]) => Promise<any>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  erVilkarOk?: boolean;
  originalErVilkarOk: boolean;
  avslagsarsaker: KodeverkMedNavn[];
}

/**
 * SvangerskapsvilkårForm
 *
 * Presentasjonskomponent.
 */
export const SvangerskapVilkarFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  avslagsarsaker,
  readOnly,
  readOnlySubmitButton,
  erVilkarOk,
  isApOpen,
  behandlingId,
  behandlingVersjon,
  originalErVilkarOk,
  ...formProps
}) => (
  <ProsessPanelTemplate
    titleCode="SvangerskapVilkarForm.Svangerskap"
    isAksjonspunktOpen={isApOpen}
    formName={formProps.form}
    handleSubmit={formProps.handleSubmit}
    readOnlySubmitButton={readOnlySubmitButton}
    readOnly={readOnly}
    behandlingId={behandlingId}
    behandlingVersjon={behandlingVersjon}
    originalErVilkarOk={originalErVilkarOk}
  >
    <Element><FormattedMessage id="SvangerskapVilkarForm.RettTilSvp" /></Element>
    <VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={erVilkarOk}
      readOnly={readOnly}
      customVilkarOppfyltText={{ id: 'SvangerskapVilkarForm.Oppfylt' }}
      customVilkarIkkeOppfyltText={{ id: 'SvangerskapVilkarForm.IkkeOppfylt' }}
    />
    {erVilkarOk === false
      && <ProsessStegBegrunnelseTextField readOnly={readOnly} />}
  </ProsessPanelTemplate>
);

interface FormValues {
  erVilkarOk: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

const validate = ({
  erVilkarOk,
  avslagCode,
}: FormValues) => VilkarResultPicker.validate(erVilkarOk, avslagCode);

export const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.status],
  (behandlingsresultat, aksjonspunkter, status): FormValues => ({
    ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
    ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
  }),
);

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]) => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  ...{ kode: aksjonspunkter[0].definisjon.kode },
});

const formName = 'SvangerskapVilkarForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunkter)]));

const mapStateToProps = (state: any, ownProps: PureOwnProps) => {
  const {
    behandlingId, behandlingVersjon, status, alleKodeverk, aksjonspunkter,
  } = ownProps;
  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  return {
    originalErVilkarOk: erVilkarOk,
    initialValues: buildInitialValues(ownProps),
    erVilkarOk: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'erVilkarOk'),
    avslagsarsaker: alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.SVANGERSKAPVILKARET],
    onSubmit: lagSubmitFn(ownProps),
  };
};

export default connect(mapStateToProps)(behandlingForm({
  form: formName,
  validate,
})(SvangerskapVilkarFormImpl));

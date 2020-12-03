import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  VilkarResultPicker, ProsessStegBegrunnelseTextField, ProsessPanelTemplate,
} from '@fpsak-frontend/prosess-felles';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Aksjonspunkt, Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';
import { InjectedFormProps } from 'redux-form';

type FormValues = {
  erVilkarOk: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: { kode: string }[]) => Promise<any>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  originalErVilkarOk: boolean;
  erVilkarOk?: boolean;
  avslagsarsaker: KodeverkMedNavn[];
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * ErOmsorgVilkaarOppfyltForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunkter for avklaring av omsorgsvilkåret.
 */
export const ErOmsorgVilkaarOppfyltFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  avslagsarsaker,
  readOnly,
  readOnlySubmitButton,
  erVilkarOk,
  originalErVilkarOk,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => (
  <ProsessPanelTemplate
    handleSubmit={formProps.handleSubmit}
    titleCode="ErOmsorgVilkaarOppfyltForm.Omsorg"
    isAksjonspunktOpen={!readOnlySubmitButton}
    formName={formProps.form}
    readOnlySubmitButton={readOnlySubmitButton}
    readOnly={readOnly}
    behandlingId={behandlingId}
    behandlingVersjon={behandlingVersjon}
    originalErVilkarOk={originalErVilkarOk}
  >
    <Element><FormattedMessage id="ErOmsorgVilkaarOppfyltForm.VilkaretOppfylt" /></Element>
    <VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={erVilkarOk}
      readOnly={readOnly}
      customVilkarOppfyltText={{ id: 'ErOmsorgVilkaarOppfyltForm.Oppfylt' }}
      customVilkarIkkeOppfyltText={{ id: 'ErOmsorgVilkaarOppfyltForm.IkkeOppfylt' }}
    />
    <ProsessStegBegrunnelseTextField readOnly={readOnly} />
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

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): any => aksjonspunkter.map((ap) => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  ...{ kode: ap.definisjon.kode },
}));

const formName = 'ErOmsorgVilkaarOppfyltForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback(transformValues(values, aksjonspunkter)));

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const {
    aksjonspunkter, status, alleKodeverk,
  } = initialOwnProps;
  const avslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.OMSORGSVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const { behandlingId, behandlingVersjon } = ownProps;
    return {
      avslagsarsaker,
      onSubmit: lagSubmitFn(ownProps),
      originalErVilkarOk: erVilkarOk,
      initialValues: buildInitialValues(ownProps),
      erVilkarOk: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'erVilkarOk'),
    };
  };
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: formName,
  validate,
})(ErOmsorgVilkaarOppfyltFormImpl));

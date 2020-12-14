import React, { FunctionComponent } from 'react';
import { InjectedFormProps } from 'redux-form';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, Vilkar,
} from '@fpsak-frontend/types';
import {
  ProsessStegBegrunnelseTextField, VilkarResultPicker, ProsessPanelTemplate,
} from '@fpsak-frontend/prosess-felles';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';

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
  vilkar: Vilkar[];
  submitCallback: (aksjonspunktData: { kode: string }[]) => Promise<any>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  originalErVilkarOk: boolean;
  erVilkarOk?: boolean;
  lovReferanse: string;
  avslagsarsaker: KodeverkMedNavn[];
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * AdopsjonVilkarForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av Adopsjonsvilkåret.
 */
export const AdopsjonVilkarFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  avslagsarsaker,
  lovReferanse,
  readOnly,
  readOnlySubmitButton,
  erVilkarOk,
  originalErVilkarOk,
  isApOpen,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => (
  <ProsessPanelTemplate
    title={intl.formatMessage({ id: 'AdopsjonVilkarForm.Adopsjon' })}
    isAksjonspunktOpen={isApOpen}
    formName={formProps.form}
    handleSubmit={formProps.handleSubmit}
    readOnlySubmitButton={readOnlySubmitButton}
    readOnly={readOnly}
    lovReferanse={lovReferanse}
    behandlingId={behandlingId}
    behandlingVersjon={behandlingVersjon}
    originalErVilkarOk={originalErVilkarOk}
  >
    <Element><FormattedMessage id="AdopsjonVilkarForm.TidligereUtbetaltStonad" /></Element>
    <VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={erVilkarOk}
      readOnly={readOnly}
      customVilkarOppfyltText={<FormattedMessage id="AdopsjonVilkarForm.Oppfylt" />}
      customVilkarIkkeOppfyltText={<FormattedMessage id="AdopsjonVilkarForm.IkkeOppfylt" values={{ b: (chunks) => <b>{chunks}</b> }} />}
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

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): any => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  ...{ kode: aksjonspunkter[0].definisjon.kode },
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunkter)]));

const formName = 'AdopsjonVilkarForm';

const mapStateToPropsFactory = (_initialState, staticOwnProps: PureOwnProps) => {
  const { aksjonspunkter, status, alleKodeverk } = staticOwnProps;
  const avslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.ADOPSJONSVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const { behandlingId, behandlingVersjon, vilkar } = ownProps;
    return {
      originalErVilkarOk: erVilkarOk,
      initialValues: buildInitialValues(ownProps),
      erVilkarOk: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'erVilkarOk'),
      lovReferanse: vilkar[0].lovReferanse,
      avslagsarsaker,
      onSubmit: lagSubmitFn(ownProps),
    };
  };
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: formName,
  validate,
})(injectIntl(AdopsjonVilkarFormImpl)));

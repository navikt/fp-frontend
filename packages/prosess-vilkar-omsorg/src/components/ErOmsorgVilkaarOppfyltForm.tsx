import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  VilkarResultPicker, ProsessStegBegrunnelseTextField, ProsessPanelTemplate, validerApKodeOgHentApEnum,
} from '@fpsak-frontend/prosess-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Aksjonspunkt, Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';
import { OmsorgsvilkarAp, VurdereYtelseSammeBarnAnnenForelderAp, VurdereYtelseSammeBarnSokerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

type AksjonspunktData = Array<OmsorgsvilkarAp | VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp>;

interface PureOwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: AksjonspunktData) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  originalErVilkarOk?: boolean;
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
export const ErOmsorgVilkaarOppfyltFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps<FormValues> & WrappedComponentProps> = ({
  intl,
  avslagsarsaker,
  readOnly,
  readOnlySubmitButton,
  erVilkarOk,
  originalErVilkarOk,
  ...formProps
}) => (
  <ProsessPanelTemplate
    title={intl.formatMessage({ id: 'ErOmsorgVilkaarOppfyltForm.Omsorg' })}
    handleSubmit={formProps.handleSubmit}
    isAksjonspunktOpen={!readOnlySubmitButton}
    formName={formProps.form}
    readOnlySubmitButton={readOnlySubmitButton}
    readOnly={readOnly}
    originalErVilkarOk={originalErVilkarOk}
  >
    <Element><FormattedMessage id="ErOmsorgVilkaarOppfyltForm.VilkaretOppfylt" /></Element>
    <VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={erVilkarOk}
      readOnly={readOnly}
      customVilkarOppfyltText={<FormattedMessage id="ErOmsorgVilkaarOppfyltForm.Oppfylt" />}
      customVilkarIkkeOppfyltText={<FormattedMessage id="ErOmsorgVilkaarOppfyltForm.IkkeOppfylt" values={{ b: (chunks) => <b>{chunks}</b> }} />}
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

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData => aksjonspunkter.map((ap) => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  kode: validerApKodeOgHentApEnum(ap.definisjon.kode, AksjonspunktCode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
    AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
    AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN),
}));

const formName = 'ErOmsorgVilkaarOppfyltForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback(transformValues(values, aksjonspunkter)));

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const {
    aksjonspunkter, status, alleKodeverk,
  } = initialOwnProps;
  const avslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.OMSORGSVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    avslagsarsaker,
    onSubmit: lagSubmitFn(ownProps),
    originalErVilkarOk: erVilkarOk,
    initialValues: buildInitialValues(ownProps),
    erVilkarOk: formValueSelector(formName)(state, 'erVilkarOk'),
  });
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  validate,
  destroyOnUnmount: false,
})(injectIntl(ErOmsorgVilkaarOppfyltFormImpl)));

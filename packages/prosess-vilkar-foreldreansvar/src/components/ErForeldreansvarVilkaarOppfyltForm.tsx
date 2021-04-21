import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ProsessStegBegrunnelseTextField, VilkarResultPicker, ProsessPanelTemplate, validerApKodeOgHentApEnum,
} from '@fpsak-frontend/prosess-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Aksjonspunkt, Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Foreldreansvarsvilkar1Ap, Foreldreansvarsvilkar2Ap, VurdereYtelseSammeBarnAnnenForelderAp, VurdereYtelseSammeBarnSokerAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

type FormValues = {
  erVilkarOk: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

type AksjonspunktData = Array<Foreldreansvarsvilkar1Ap
  | Foreldreansvarsvilkar2Ap
  | VurdereYtelseSammeBarnSokerAp
  | VurdereYtelseSammeBarnAnnenForelderAp>;

interface PureOwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  isForeldreansvar2Ledd: boolean;
  isEngangsstonad: boolean;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: AksjonspunktData) => Promise<void>;
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
 * ErForeldreansvarVilkaarOppfyltForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunkter for avklaring av foreldreansvarvilkåret 2 eller 4 ledd.
 */
export const ErForeldreansvarVilkaarOppfyltForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps<FormValues> & WrappedComponentProps> = ({
  intl,
  avslagsarsaker,
  readOnly,
  readOnlySubmitButton,
  erVilkarOk,
  originalErVilkarOk,
  isEngangsstonad,
  ...formProps
}) => (
  <ProsessPanelTemplate
    title={intl.formatMessage({ id: 'ErForeldreansvarVilkaarOppfyltForm.Foreldreansvar' })}
    isAksjonspunktOpen={!readOnlySubmitButton}
    formName={formProps.form}
    handleSubmit={formProps.handleSubmit}
    readOnlySubmitButton={readOnlySubmitButton}
    readOnly={readOnly}
    originalErVilkarOk={originalErVilkarOk}
  >
    <Element><FormattedMessage id="ErForeldreansvarVilkaarOppfyltForm.RettTilStonad" /></Element>
    <VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={erVilkarOk}
      readOnly={readOnly}
      customVilkarOppfyltText={<FormattedMessage id={isEngangsstonad ? 'FodselVilkarForm.OppfyltEs' : 'FodselVilkarForm.OppfyltFp'} />}
      customVilkarIkkeOppfyltText={(
        <FormattedMessage
          id={isEngangsstonad
            ? 'FodselVilkarForm.IkkeOppfyltEs' : 'FodselVilkarForm.IkkeOppfyltFp'}
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
)}
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
  kode: validerApKodeOgHentApEnum(ap.definisjon.kode,
    AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
    AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
    AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
    AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN),
}));

const formName = 'ErForeldreansvarVilkaarOppfyltForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback(transformValues(values, aksjonspunkter)));

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const {
    aksjonspunkter, isForeldreansvar2Ledd, alleKodeverk, status,
  } = initialOwnProps;
  const vilkarTypeKode = isForeldreansvar2Ledd ? vilkarType.FORELDREANSVARSVILKARET_2_LEDD : vilkarType.FORELDREANSVARSVILKARET_4_LEDD;
  const avslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarTypeKode];

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    initialValues: buildInitialValues(ownProps),
    erVilkarOk: formValueSelector(formName)(state, 'erVilkarOk'),
    originalErVilkarOk: erVilkarOk,
    onSubmit: lagSubmitFn(ownProps),
    avslagsarsaker,
  });
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  validate,
  destroyOnUnmount: false,
})(injectIntl(ErForeldreansvarVilkaarOppfyltForm)));

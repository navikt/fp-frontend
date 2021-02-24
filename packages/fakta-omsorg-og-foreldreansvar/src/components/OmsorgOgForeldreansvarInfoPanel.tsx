import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { IntlShape } from 'react-intl';
import { InjectedFormProps } from 'redux-form';

import { behandlingForm } from '@fpsak-frontend/form';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Aksjonspunkt, FamilieHendelse, KodeverkMedNavn, Personoversikt, RelatertTilgrensedYtelse, Soknad,
} from '@fpsak-frontend/types';

import OmsorgOgForeldreansvarFaktaForm, { FormValues as OmsorgFormValues } from './OmsorgOgForeldreansvarFaktaForm';

type FormValues = OmsorgFormValues & {
  begrunnelse?: string;
}

interface PureOwnProps {
  intl: IntlShape;
  soknad: Soknad;
  personoversikt: Personoversikt;
  gjeldendeFamiliehendelse: FamilieHendelse;
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitCallback: (...args: any[]) => any;
  behandlingId: number;
  behandlingVersjon: number;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  initialValues: FormValues;
  vilkarTypes: KodeverkMedNavn[];
  relatertYtelseTypes: KodeverkMedNavn[];
  erAksjonspunktForeldreansvar: boolean;
  onSubmit: (formValues: FormValues) => any;
  validate: (formValues: FormValues) => any;
}

/**
 * OmsorgOgForeldreansvarInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for faktapenelet til Omsorgsvilkåret.
 */
export const OmsorgOgForeldreansvarInfoPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  intl,
  behandlingId,
  behandlingVersjon,
  erAksjonspunktForeldreansvar,
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  vilkarTypes,
  initialValues,
  relatertYtelseTypes,
  alleMerknaderFraBeslutter,
  soknad,
  gjeldendeFamiliehendelse,
  personoversikt,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <OmsorgOgForeldreansvarFaktaForm
      intl={intl}
      erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
      readOnly={readOnly}
      vilkarTypes={vilkarTypes}
      relatertYtelseTypes={relatertYtelseTypes}
      hasOpenAksjonspunkter={hasOpenAksjonspunkter}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      soknad={soknad}
      gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
      personoversikt={personoversikt}
    />
    <VerticalSpacer twentyPx />
    <FaktaBegrunnelseTextField
      isSubmittable={submittable}
      isReadOnly={readOnly}
      hasBegrunnelse={!!initialValues.begrunnelse}
      label={intl.formatMessage({
        id: erAksjonspunktForeldreansvar ? 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleFp'
          : 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleEs',
      })}
    />
    <VerticalSpacer twentyPx />
    <FaktaSubmitButton
      formName={formProps.form}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      isSubmittable={submittable}
      isReadOnly={readOnly}
      hasOpenAksjonspunkter={hasOpenAksjonspunkter}
    />
  </form>
);

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.soknad,
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
    (ownProps: PureOwnProps) => ownProps.personoversikt,
    (ownProps: PureOwnProps) => ownProps.innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.alleKodeverk],
  (soknad, familiehendelse, personoversikt, innvilgetRelatertTilgrensendeYtelserForAnnenForelder, aksjonspunkter, alleKodeverk): FormValues => {
    const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.OMSORGSOVERTAKELSE
      || ap.definisjon.kode === aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR);
    return {
      ...OmsorgOgForeldreansvarFaktaForm.buildInitialValues(soknad, familiehendelse, personoversikt,
        innvilgetRelatertTilgrensendeYtelserForAnnenForelder, getKodeverknavnFn(alleKodeverk, kodeverkTyper)),
      ...FaktaBegrunnelseTextField.buildInitialValues(aksjonspunkt),
    };
  },
);

const transformValues = (values: FormValues, aksjonspunkt: Aksjonspunkt): any => ({
  ...OmsorgOgForeldreansvarFaktaForm.transformValues(values, aksjonspunkt),
  ...{ begrunnelse: values.begrunnelse },
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunkter[0])]));

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const { aksjonspunkter, alleKodeverk, intl } = initialOwnProps;
  const erAksjonspunktForeldreansvar = aksjonspunkter[0].definisjon.kode === aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR;
  const vilkarTypes = alleKodeverk[kodeverkTyper.OMSORGSOVERTAKELSE_VILKAR_TYPE];
  const relatertYtelseTypes = alleKodeverk[kodeverkTyper.RELATERT_YTELSE_TYPE];
  const validate = (values: FormValues) => OmsorgOgForeldreansvarFaktaForm.validate(intl, values);

  return (_state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    initialValues: buildInitialValues(ownProps),
    vilkarTypes,
    relatertYtelseTypes,
    erAksjonspunktForeldreansvar,
    onSubmit: lagSubmitFn(ownProps),
    validate,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: 'OmsorgOgForeldreansvarInfoPanel',
})(OmsorgOgForeldreansvarInfoPanelImpl));

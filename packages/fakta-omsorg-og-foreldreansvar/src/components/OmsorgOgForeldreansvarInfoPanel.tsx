import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { InjectedFormProps } from 'redux-form';
import { behandlingForm } from '@fpsak-frontend/form';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Aksjonspunkt, FamilieHendelse, KodeverkMedNavn, Personopplysninger, RelatertTilgrensedYtelse, Soknad,
} from '@fpsak-frontend/types';

import useIntl from '../useIntl';

import OmsorgOgForeldreansvarFaktaForm, { FormValues as OmsorgFormValues } from './OmsorgOgForeldreansvarFaktaForm';

type FormValues = OmsorgFormValues & {
  begrunnelse?: string;
}

interface PureOwnProps {
  soknad: Soknad;
  personopplysninger: Personopplysninger;
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
}

/**
 * OmsorgOgForeldreansvarInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for faktapenelet til Omsorgsvilkåret.
 */
export const OmsorgOgForeldreansvarInfoPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
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
  personopplysninger,
  ...formProps
}) => {
  const intl = useIntl();
  return (
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
        personopplysninger={personopplysninger}
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
};

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.soknad,
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
    (ownProps: PureOwnProps) => ownProps.personopplysninger,
    (ownProps: PureOwnProps) => ownProps.innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.alleKodeverk],
  (soknad, familiehendelse, personopplysning, innvilgetRelatertTilgrensendeYtelserForAnnenForelder, aksjonspunkter, alleKodeverk): FormValues => {
    const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.OMSORGSOVERTAKELSE
      || ap.definisjon.kode === aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR);
    return {
      ...OmsorgOgForeldreansvarFaktaForm.buildInitialValues(soknad, familiehendelse, personopplysning,
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
  const { aksjonspunkter, alleKodeverk } = initialOwnProps;
  const erAksjonspunktForeldreansvar = aksjonspunkter[0].definisjon.kode === aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR;
  const vilkarTypes = alleKodeverk[kodeverkTyper.OMSORGSOVERTAKELSE_VILKAR_TYPE];
  const relatertYtelseTypes = alleKodeverk[kodeverkTyper.RELATERT_YTELSE_TYPE];

  return (_state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    initialValues: buildInitialValues(ownProps),
    vilkarTypes,
    relatertYtelseTypes,
    erAksjonspunktForeldreansvar,
    onSubmit: lagSubmitFn(ownProps),
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: 'OmsorgOgForeldreansvarInfoPanel',
  validate: OmsorgOgForeldreansvarFaktaForm.validate,
})(OmsorgOgForeldreansvarInfoPanelImpl));

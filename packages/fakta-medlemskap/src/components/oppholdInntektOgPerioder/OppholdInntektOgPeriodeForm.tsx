import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { FaktaBegrunnelseTextField } from '@fpsak-frontend/fakta-felles';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, KodeverkMedNavn, MedlemPeriode, Medlemskap,
} from '@fpsak-frontend/types';

import OppholdstillatelseTabell from './OppholdstillatelseTabell';
import OppholdINorgeOgAdresserFaktaPanel, { FormValues as OppholdFormValues } from './OppholdINorgeOgAdresserFaktaPanel';
import PerioderMedMedlemskapFaktaPanel, { FormValues as PerioderFormValues } from './PerioderMedMedlemskapFaktaPanel';
import StatusForBorgerFaktaPanel, { FormValues as StatusFormValues } from './StatusForBorgerFaktaPanel';

const {
  AVKLAR_OPPHOLDSRETT, AVKLAR_LOVLIG_OPPHOLD,
} = aksjonspunktCodes;

const hasAksjonspunkt = (aksjonspunktCode: string, aksjonspunkter: string[]): boolean => aksjonspunkter
  .some((ap: string) => ap === aksjonspunktCode);

export type PeriodeMedId = MedlemPeriode & { id: string; }

export type FormValues = PeriodeMedId & OppholdFormValues & StatusFormValues & PerioderFormValues & {
  begrunnelse?: string;
}

type TransformedValues = {
  begrunnelse?: string;
}

interface PureOwnProps {
  valgtPeriode: PeriodeMedId;
  aksjonspunkter: Aksjonspunkt[];
  medlemskap: Medlemskap;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  updateOppholdInntektPeriode: (values: TransformedValues) => void;
  selectedId?: string;
  readOnly: boolean;
  periodeResetCallback: (...args: any[]) => any;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submittable: boolean;
}

interface MappedOwnProps {
  initialValues: FormValues;
  form: string;
  onSubmit: (values: FormValues) => any;
}

export const OppholdInntektOgPeriodeForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  valgtPeriode,
  readOnly,
  initialValues,
  submittable,
  periodeResetCallback,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  medlemskap,
  ...formProps
}) => (
  <BorderBox>
    <OppholdINorgeOgAdresserFaktaPanel
      readOnly={readOnly}
      id={valgtPeriode.id}
      alleKodeverk={alleKodeverk}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    />
    <VerticalSpacer twentyPx />
    {medlemskap.opphold.length > 0 && (
      <>
        <OppholdstillatelseTabell oppholdstillatelse={medlemskap.opphold} alleKodeverk={alleKodeverk} />
        <VerticalSpacer twentyPx />
      </>
    )}
    <PerioderMedMedlemskapFaktaPanel
      readOnly={readOnly}
      id={valgtPeriode.id}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
    />
    { (hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, valgtPeriode.aksjonspunkter) || hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, valgtPeriode.aksjonspunkter)) && (
      <StatusForBorgerFaktaPanel
        readOnly={readOnly}
        id={valgtPeriode.id}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      />
    )}
    <VerticalSpacer twentyPx />
    { valgtPeriode.aksjonspunkter && valgtPeriode.aksjonspunkter.length > 0 && (
      <FaktaBegrunnelseTextField
        isReadOnly={readOnly}
        isSubmittable={submittable}
        hasBegrunnelse={!!initialValues.begrunnelse}
      />
    )}

    <VerticalSpacer twentyPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Hovedknapp
            mini
            htmlType="button"
            onClick={formProps.handleSubmit}
            disabled={formProps.pristine}
          >
            <FormattedMessage id="OppholdInntektOgPeriode.Oppdater" />
          </Hovedknapp>
        </FlexColumn>
        <FlexColumn>
          <Knapp
            htmlType="button"
            mini
            onClick={periodeResetCallback}
          >
            <FormattedMessage id="OppholdInntektOgPeriode.Avbryt" />
          </Knapp>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </BorderBox>
);

const transformValues = (values: FormValues): TransformedValues => ({
  begrunnelse: values.begrunnelse,
  ...values,
});

const buildInitialValues = createSelector([
  (_state, ownProps: PureOwnProps) => ownProps.valgtPeriode,
  (_state, ownProps: PureOwnProps) => ownProps.aksjonspunkter,
  (state: any) => formValueSelector('OppholdInntektOgPerioderForm')(state, 'soknad'),
  (state: any) => formValueSelector('OppholdInntektOgPerioderForm')(state, 'medlemskapPerioder'),
  (_state, ownProps: PureOwnProps) => ownProps.alleKodeverk,
],
(valgtPeriode, alleAksjonspunkter, soknad, medlemskapPerioder, alleKodeverk): FormValues => {
  const aksjonspunkter = alleAksjonspunkter
    .filter((ap) => valgtPeriode.aksjonspunkter
      .includes(ap.definisjon.kode) || ap.definisjon.kode === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP)
    .filter((ap) => ap.definisjon.kode !== aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN);
  let oppholdValues = {};
  let confirmValues = {};
  if (hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, valgtPeriode.aksjonspunkter) || hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, valgtPeriode.aksjonspunkter)) {
    oppholdValues = StatusForBorgerFaktaPanel.buildInitialValues(valgtPeriode, aksjonspunkter);
  }
  if (valgtPeriode.aksjonspunkter.length > 0) {
    const valgtPeriodeAps = aksjonspunkter.filter((ap) => valgtPeriode.aksjonspunkter.some((vpap) => vpap === ap.definisjon.kode));
    confirmValues = FaktaBegrunnelseTextField.buildInitialValues(valgtPeriodeAps);
  }
  const kodeverkFn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  return {
    ...valgtPeriode,
    ...OppholdINorgeOgAdresserFaktaPanel.buildInitialValues(soknad, valgtPeriode, aksjonspunkter),
    ...PerioderMedMedlemskapFaktaPanel.buildInitialValues(valgtPeriode, medlemskapPerioder, soknad, aksjonspunkter, kodeverkFn),
    ...oppholdValues,
    ...confirmValues,
  };
});

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: FormValues) => initialOwnProps.updateOppholdInntektPeriode(transformValues(values));
  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const { valgtPeriode } = ownProps;
    const formName = `OppholdInntektOgPeriodeForm-${valgtPeriode.id}`;
    return {
      initialValues: buildInitialValues(state, ownProps),
      form: formName,
      onSubmit,
    };
  };
};

// @ts-ignore Dynamisk form-navn
export default connect(mapStateToPropsFactory)(reduxForm({
  enableReinitialize: true,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(OppholdInntektOgPeriodeForm));

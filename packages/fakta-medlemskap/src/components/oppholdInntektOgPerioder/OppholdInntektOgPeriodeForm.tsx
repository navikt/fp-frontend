import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { FaktaBegrunnelseTextField } from '@fpsak-frontend/fakta-felles';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { Aksjonspunkt, KodeverkMedNavn, MedlemPeriode } from '@fpsak-frontend/types';

import OppholdINorgeOgAdresserFaktaPanel from './OppholdINorgeOgAdresserFaktaPanel';
import InntektOgYtelserFaktaPanel from './InntektOgYtelserFaktaPanel';
import PerioderMedMedlemskapFaktaPanel from './PerioderMedMedlemskapFaktaPanel';
import StatusForBorgerFaktaPanel from './StatusForBorgerFaktaPanel';

const {
  AVKLAR_OPPHOLDSRETT, AVKLAR_LOVLIG_OPPHOLD,
} = aksjonspunktCodes;

const hasAksjonspunkt = (aksjonspunktCode: string, aksjonspunkter: string[]) => aksjonspunkter
  .some((ap: string) => ap === aksjonspunktCode);

type PeriodeMedId = MedlemPeriode & { id: number; }

interface OwnProps {
  selectedId?: string;
  readOnly: boolean;
  updateOppholdInntektPeriode: (...args: any[]) => any;
  submittable: boolean;
  valgtPeriode: PeriodeMedId;
  initialValues: {
    begrunnelse?: string;
  };
  periodeResetCallback: (...args: any[]) => any;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingId: number;
  behandlingVersjon: number;
}

export const OppholdInntektOgPeriodeForm: FunctionComponent<OwnProps & InjectedFormProps> = ({
  valgtPeriode,
  readOnly,
  initialValues,
  submittable,
  periodeResetCallback,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => (
  <BorderBox>
    <OppholdINorgeOgAdresserFaktaPanel
      readOnly={readOnly}
      id={valgtPeriode.id}
      alleKodeverk={alleKodeverk}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    />
    <VerticalSpacer twentyPx />
    <InntektOgYtelserFaktaPanel
      id={valgtPeriode.id}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
    />
    { /* @ts-ignore Fiks denne */}
    <PerioderMedMedlemskapFaktaPanel
      readOnly={readOnly}
      id={valgtPeriode.id}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
    />
    { (hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, valgtPeriode.aksjonspunkter) || hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, valgtPeriode.aksjonspunkter)) && (
      <>
        { /* @ts-ignore Fiks denne */}
        <StatusForBorgerFaktaPanel
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          readOnly={readOnly}
          id={valgtPeriode.id}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
      </>
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

OppholdInntektOgPeriodeForm.defaultProps = {
  selectedId: undefined,
};

const transformValues = (values: any) => ({
  begrunnelse: values.begrunnelse,
  ...values,
});

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  valgtPeriode: PeriodeMedId;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submittable: boolean;
  updateOppholdInntektPeriode: (values: any) => void;
}

const buildInitialValues = createSelector([
  (_state, ownProps: PureOwnProps) => ownProps.valgtPeriode,
  (_state, ownProps: PureOwnProps) => ownProps.aksjonspunkter,
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector('OppholdInntektOgPerioderForm',
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'soknad'),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector('OppholdInntektOgPerioderForm',
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'person'),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector('OppholdInntektOgPerioderForm',
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'inntekter'),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector('OppholdInntektOgPerioderForm',
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'medlemskapPerioder'),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector('OppholdInntektOgPerioderForm',
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'gjeldendeFom'),
  (_state, ownProps: PureOwnProps) => ownProps.alleKodeverk,
],
(valgtPeriode, alleAksjonspunkter, soknad, person, inntekter, medlemskapPerioder, gjeldendeFom, alleKodeverk) => {
  const aksjonspunkter = alleAksjonspunkter
    .filter((ap: Aksjonspunkt) => valgtPeriode.aksjonspunkter
      .includes(ap.definisjon.kode) || ap.definisjon.kode === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP)
    .filter((ap: Aksjonspunkt) => ap.definisjon.kode !== aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN);
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
    ...InntektOgYtelserFaktaPanel.buildInitialValues(person, inntekter),
    ...OppholdINorgeOgAdresserFaktaPanel.buildInitialValues(soknad, valgtPeriode, aksjonspunkter),
    ...PerioderMedMedlemskapFaktaPanel.buildInitialValues(valgtPeriode, medlemskapPerioder, soknad, aksjonspunkter, kodeverkFn),
    ...oppholdValues,
    ...confirmValues,
  };
});

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: any) => initialOwnProps.updateOppholdInntektPeriode(transformValues(values));
  return (state: any, ownProps: PureOwnProps) => {
    const { valgtPeriode, submittable } = ownProps;
    const formName = `OppholdInntektOgPeriodeForm-${valgtPeriode.id}`;
    return {
      initialValues: buildInitialValues(state, ownProps),
      form: formName,
      submittable,
      onSubmit,
    };
  };
};

// @ts-ignore Dynamisk form-navn
export default connect(mapStateToPropsFactory)(behandlingForm({
  enableReinitialize: true,
})(OppholdInntektOgPeriodeForm));

import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import moment from 'moment';
import { InjectedFormProps } from 'redux-form';

import { behandlingForm } from '@fpsak-frontend/form';
import { addDaysToDate, omit } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, KodeverkMedNavn, Opptjening, OpptjeningAktivitet,
} from '@fpsak-frontend/types';

import OpptjeningFaktaForm from './OpptjeningFaktaForm';

export const formName = 'OpptjeningInfoPanel';

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  aksjonspunkt?: Aksjonspunkt;
  fastsattOpptjening?: Opptjening['fastsattOpptjening'];
  dokStatus?: string;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/**
 * OpptjeningInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for Opptjeningsvilkåret.
 */
export const OpptjeningInfoPanel: FunctionComponent<OwnProps & InjectedFormProps> = ({
  hasOpenAksjonspunkter,
  readOnly,
  aksjonspunkt,
  behandlingId,
  behandlingVersjon,
  fastsattOpptjening,
  dokStatus,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <OpptjeningFaktaForm
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      opptjeningFomDato={fastsattOpptjening ? fastsattOpptjening.opptjeningFom : undefined}
      opptjeningTomDato={fastsattOpptjening ? fastsattOpptjening.opptjeningTom : undefined}
      dokStatus={dokStatus}
      readOnly={readOnly}
      hasOpenAksjonspunkter={hasOpenAksjonspunkter}
      hasAksjonspunkt={aksjonspunkt !== undefined}
      formName={formName}
      submitting={formProps.submitting}
      isDirty={formProps.dirty}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
    />
  </form>
);

const addDay = (date: string) => addDaysToDate(date, 1);
const getOpptjeningsperiodeIfEqual = (
  activityDate: string, opptjeningsperiodeDate: string,
) => (moment(addDay(activityDate)).isSame(opptjeningsperiodeDate) ? opptjeningsperiodeDate : activityDate);

const buildPeriod = (activity, opptjeningsperiodeFom: string, opptjeningsperiodeTom: string): {
  originalFom: string;
  originalTom: string;
  opptjeningFom: string;
  opptjeningTom: string;
} => {
  const fomDate = moment(activity.opptjeningFom).isBefore(opptjeningsperiodeFom)
    ? opptjeningsperiodeFom
    : getOpptjeningsperiodeIfEqual(activity.opptjeningFom, opptjeningsperiodeTom);
  const tomDate = moment(activity.opptjeningTom).isAfter(opptjeningsperiodeTom)
    ? opptjeningsperiodeTom
    : getOpptjeningsperiodeIfEqual(activity.opptjeningTom, opptjeningsperiodeFom);
  return {
    originalFom: activity.opptjeningFom,
    originalTom: activity.opptjeningTom,
    opptjeningFom: fomDate,
    opptjeningTom: tomDate,
  };
};

interface OwnProps {
  opptjeningAktiviteter: OpptjeningAktivitet[];
  fastsattOpptjening?: Opptjening['fastsattOpptjening'];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => void;
}

export const buildInitialValues = createSelector(
  [(ownProps: OwnProps) => ownProps.opptjeningAktiviteter,
    (ownProps: OwnProps) => ownProps.fastsattOpptjening,
    (ownProps: OwnProps) => ownProps.aksjonspunkter],
  (opptjeningActivities, fastsattOpptjening, aksjonspunkter) => fastsattOpptjening
    && ({
      opptjeningActivities: opptjeningActivities
        .filter((oa) => moment(fastsattOpptjening.opptjeningFom).isBefore(addDay(oa.opptjeningTom)))
        .filter((oa) => moment(oa.opptjeningFom).isBefore(addDay(fastsattOpptjening.opptjeningTom)))
        .map((oa, index: number) => ({
          ...oa,
          ...buildPeriod(oa, fastsattOpptjening.opptjeningFom, fastsattOpptjening.opptjeningTom),
          id: index + 1,
        })),
      aksjonspunkt: aksjonspunkter.filter((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING) || null,
      fastsattOpptjening,
    }),
);

const transformPeriod = (activity: any, opptjeningsperiodeFom: string, opptjeningsperiodeTom: string) => {
  let fomDate = activity.opptjeningFom;
  if (activity.originalFom && moment(activity.originalFom).isBefore(opptjeningsperiodeFom)) {
    fomDate = fomDate === opptjeningsperiodeFom ? activity.originalFom : fomDate;
  }
  let tomDate = activity.opptjeningTom;
  if (activity.originalTom && moment(activity.originalTom).isAfter(opptjeningsperiodeTom)) {
    tomDate = tomDate === opptjeningsperiodeTom ? activity.originalTom : tomDate;
  }

  return {
    ...activity,
    opptjeningFom: fomDate,
    opptjeningTom: tomDate,
  };
};

const transformValues = (values: any) => ({
  opptjeningAktivitetList: values.opptjeningActivities
    .map((oa: any) => transformPeriod(oa, addDay(values.fastsattOpptjening.opptjeningFom), addDay(values.fastsattOpptjening.opptjeningTom)))
    .map((oa: any) => omit(oa, 'id')),

  kode: values.aksjonspunkt[0].definisjon.kode,
});

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.submitCallback],
(submitCallback) => (values: any) => submitCallback([transformValues(values)]));

const mapStateToPropsFactory = (_state: any, ownProps: OwnProps) => ({
  aksjonspunkt: ownProps.aksjonspunkter[0],
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: formName,
})(OpptjeningInfoPanel));

import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import moment from 'moment';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { addDaysToDate, omitMany } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, FastsattOpptjening, KodeverkMedNavn, Opptjening, OpptjeningAktivitet,
} from '@fpsak-frontend/types';
import { AvklarAktivitetsPerioderAp, OpptjeningAktivitetAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OpptjeningFaktaForm from './OpptjeningFaktaForm';
import CustomOpptjeningAktivitet from '../CustomOpptjeningAktivitet';

export const formName = 'OpptjeningInfoPanel';

type FormValues = {
  opptjeningActivities?: CustomOpptjeningAktivitet[];
  aksjonspunkt?: Aksjonspunkt[];
  fastsattOpptjening?: FastsattOpptjening;
}

interface PureOwnProps {
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  fastsattOpptjening?: Opptjening['fastsattOpptjening'];
  dokStatus?: string;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  opptjeningAktiviteter: OpptjeningAktivitet[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AvklarAktivitetsPerioderAp) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  aksjonspunkt?: Aksjonspunkt;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * OpptjeningInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for Opptjeningsvilkåret.
 */
export const OpptjeningInfoPanel: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  hasOpenAksjonspunkter,
  readOnly,
  aksjonspunkt,
  fastsattOpptjening,
  dokStatus,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <OpptjeningFaktaForm
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
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </form>
);

const addDay = (date: string): string => addDaysToDate(date, 1);
const getOpptjeningsperiodeIfEqual = (
  activityDate: string, opptjeningsperiodeDate: string,
): string => (moment(addDay(activityDate)).isSame(opptjeningsperiodeDate) ? opptjeningsperiodeDate : activityDate);

type Periode = {
  originalFom: string;
  originalTom: string;
  opptjeningFom: string;
  opptjeningTom: string;
}

const buildPeriod = (activity: OpptjeningAktivitet, opptjeningsperiodeFom: string, opptjeningsperiodeTom: string): Periode => {
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

export const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.opptjeningAktiviteter,
    (ownProps: PureOwnProps) => ownProps.fastsattOpptjening,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
  (opptjeningActivities, fastsattOpptjening, aksjonspunkter): FormValues => fastsattOpptjening
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

const transformPeriod = (
  activity: CustomOpptjeningAktivitet,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
): OpptjeningAktivitetAp => {
  let fomDate = activity.opptjeningFom;
  if (activity.originalFom && moment(activity.originalFom).isBefore(opptjeningsperiodeFom)) {
    fomDate = fomDate === opptjeningsperiodeFom ? activity.originalFom : fomDate;
  }
  let tomDate = activity.opptjeningTom;
  if (activity.originalTom && moment(activity.originalTom).isAfter(opptjeningsperiodeTom)) {
    tomDate = tomDate === opptjeningsperiodeTom ? activity.originalTom : tomDate;
  }

  const aktivitet = omitMany(activity, ['id', 'erPeriodeEndret']);

  return {
    ...aktivitet,
    opptjeningFom: fomDate,
    opptjeningTom: tomDate,
  };
};

const transformValues = (values: FormValues): AvklarAktivitetsPerioderAp => ({
  opptjeningAktivitetList: values.opptjeningActivities
    .map((oa) => transformPeriod(oa, addDay(values.fastsattOpptjening.opptjeningFom), addDay(values.fastsattOpptjening.opptjeningTom))),
  kode: aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToPropsFactory = (_state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  aksjonspunkt: ownProps.aksjonspunkter[0],
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(OpptjeningInfoPanel));

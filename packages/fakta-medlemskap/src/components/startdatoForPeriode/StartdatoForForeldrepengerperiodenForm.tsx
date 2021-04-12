import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, IntlShape } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Column, Row } from 'nav-frontend-grid';
import { FieldArray, InjectedFormProps } from 'redux-form';

import { AksjonspunktHelpTextTemp, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import {
  hasValidDate, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { DatepickerField, TextAreaField, behandlingForm } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse, Kodeverk, Soknad,
} from '@fpsak-frontend/types';
import { AvklarStartdatoForPeriodenAp, OverstyringAvklarStartdatoForPeriodenAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import ArbeidsgiverInfo from './ArbeidsgiverInfo';

import styles from './startdatoForForeldrepengerperiodenForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  arbeidsgivere?: InntektArbeidYtelse['inntektsmeldinger'];
  startdatoFraSoknad?: string;
  opprinneligDato?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  intl: IntlShape;
  aksjonspunkter: Aksjonspunkt[];
  aksjonspunkt: Aksjonspunkt;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  submitCallback: (data: AvklarStartdatoForPeriodenAp | OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>;
  readOnlyForStartdatoForForeldrepenger: boolean;
  behandlingStatus: Kodeverk;
  hasOpenMedlemskapAksjonspunkter: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingId: number;
  behandlingVersjon: number;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  hasAksjonspunkt: boolean;
  hasOpenAksjonspunkt: boolean;
  overstyringDisabled?: boolean;
  onSubmit: (values: FormValues) => any;
  validate: (values: FormValues) => any;
  initialValues: FormValues;
}

/**
 * StartdatoForForeldrepengerperiodenForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av om startdato for foreldrepengerperioden er korrekt.
 */
export const StartdatoForForeldrepengerperiodenForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  intl,
  hasAksjonspunkt,
  hasOpenAksjonspunkt,
  hasOpenMedlemskapAksjonspunkter,
  submittable,
  overstyringDisabled,
  alleMerknaderFraBeslutter,
  behandlingId,
  behandlingVersjon,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => (
  <div className={hasOpenAksjonspunkt || !hasOpenMedlemskapAksjonspunkter ? undefined : styles.inactiveAksjonspunkt}>
    <form className={hasOpenAksjonspunkt || !hasOpenMedlemskapAksjonspunkter ? undefined : styles.container} onSubmit={formProps.handleSubmit}>
      {hasAksjonspunkt && (
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={submittable && hasOpenAksjonspunkt}>
          {[<FormattedMessage key="PeriodenAvviker" id="StartdatoForForeldrepengerperiodenForm.PeriodenAvviker" />]}
        </AksjonspunktHelpTextTemp>
      )}
      <FaktaGruppe
        title={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN]}
      >
        <div className={styles.explanationTextarea}>
          <TextAreaField
            name="begrunnelse"
            label={<FormattedMessage id="StartdatoForForeldrepengerperiodenForm.Vurdering" />}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={overstyringDisabled}
          />
        </div>
        <VerticalSpacer sixteenPx />
        <Row>
          <Column xs="4">
            <DatepickerField
              name="startdatoFraSoknad"
              isEdited={hasAksjonspunkt && !hasOpenAksjonspunkt}
              label={{ id: 'StartdatoForForeldrepengerperiodenForm.Startdato' }}
              validate={[required, hasValidDate]}
              readOnly={overstyringDisabled}
            />
          </Column>
          <Column xs="6">
            <FieldArray
              component={ArbeidsgiverInfo}
              name="arbeidsgivere"
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          </Column>
        </Row>
      </FaktaGruppe>
      <VerticalSpacer twentyPx />
      <FaktaSubmitButton
        buttonText={!hasOpenAksjonspunkt ? intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.Oppdater' }) : undefined}
        formName={formProps.form}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        isSubmittable={submittable}
        isReadOnly={overstyringDisabled}
        hasOpenAksjonspunkter={hasOpenAksjonspunkt}
      />
    </form>
  </div>
);

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.soknad.oppgittFordeling,
    (ownProps: PureOwnProps) => ownProps.inntektArbeidYtelse],
  (aksjonspunkter, oppgittFordeling = {}, inntektArbeidYtelse = {} as InntektArbeidYtelse): FormValues => {
    const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN);
    const overstyringAp = aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO);
    return {
      opprinneligDato: oppgittFordeling.startDatoForPermisjon,
      startdatoFraSoknad: oppgittFordeling.startDatoForPermisjon,
      arbeidsgivere: inntektArbeidYtelse.inntektsmeldinger,
      begrunnelse: (overstyringAp && overstyringAp.begrunnelse) || (aksjonspunkt && aksjonspunkt.begrunnelse),
    };
  },
);

const transformValues = (values: FormValues, isOverstyring: boolean): AvklarStartdatoForPeriodenAp | OverstyringAvklarStartdatoForPeriodenAp => ({
  kode: isOverstyring ? aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO : aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN,
  opprinneligDato: values.opprinneligDato,
  startdatoFraSoknad: values.startdatoFraSoknad,
  begrunnelse: values.begrunnelse,
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkt],
(submitCallback, aksjonspunkt) => {
  const hasAksjonspunkt = aksjonspunkt !== undefined;
  const isOverstyring = !hasAksjonspunkt || aksjonspunkt.definisjon.kode === aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO;
  return (values: FormValues) => submitCallback(transformValues(values, isOverstyring));
});

const isBefore2019 = (startdato: string): boolean => moment(startdato).isBefore(moment('2019-01-01'));

const validateDates = (values: FormValues, intl: IntlShape): any => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { arbeidsgivere, startdatoFraSoknad } = values;

  const isStartdatoEtterArbeidsgiverdato = arbeidsgivere && arbeidsgivere
    .map((a) => a.arbeidsgiverStartdato)
    .some((datoFraInntektsmelding) => moment(datoFraInntektsmelding).isBefore(moment(startdatoFraSoknad)));

  if (isStartdatoEtterArbeidsgiverdato) {
    return {
      startdatoFraSoknad: intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.StartdatoEtterArbeidsgiverdato' }),
    };
  }
  if (isBefore2019(startdatoFraSoknad)) {
    return {
      startdatoFraSoknad: intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.StartdatoFør2019' }),
    };
  }

  return errors;
};

const lagValidateFn = createSelector([(ownProps: PureOwnProps) => ownProps.intl], (intl) => (values: FormValues) => validateDates(values, intl));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => {
  const { aksjonspunkt } = ownProps;
  const hasAksjonspunkt = aksjonspunkt !== undefined;
  const hasOpenAksjonspunkt = hasAksjonspunkt && isAksjonspunktOpen(aksjonspunkt.status.kode);
  return {
    hasAksjonspunkt,
    hasOpenAksjonspunkt,
    onSubmit: lagSubmitFn(ownProps),
    validate: lagValidateFn(ownProps),
    overstyringDisabled: ownProps.readOnlyForStartdatoForForeldrepenger || ownProps.behandlingStatus.kode !== behandlingStatus.BEHANDLING_UTREDES,
    initialValues: buildInitialValues(ownProps),
  };
};

export default connect(mapStateToProps)(behandlingForm({
  form: 'StartdatoForForeldrepengerperiodenForm',
})(StartdatoForForeldrepengerperiodenForm));

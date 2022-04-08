import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, IntlShape } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Column, Row } from 'nav-frontend-grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import {
  hasValidDate, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { DatepickerField, TextAreaField } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';
import { OverstyringAvklarStartdatoForPeriodenAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './startdatoForForeldrepengerperiodenForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  startdatoFraSoknad?: string;
  opprinneligDato?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  intl: IntlShape;
  aksjonspunkter: Aksjonspunkt[];
  aksjonspunkt: Aksjonspunkt;
  soknad: Soknad;
  submitCallback: (data: OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>;
  readOnlyForStartdatoForForeldrepenger: boolean;
  behandlingStatus: string;
  hasOpenMedlemskapAksjonspunkter: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
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
  ...formProps
}) => (
  <div className={!hasOpenMedlemskapAksjonspunkter ? undefined : styles.inactiveAksjonspunkt}>
    <form className={!hasOpenMedlemskapAksjonspunkter ? undefined : styles.container} onSubmit={formProps.handleSubmit}>
      <FaktaGruppe
        title={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO]}
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
        </Row>
      </FaktaGruppe>
      <VerticalSpacer twentyPx />
      <FaktaSubmitButton
        buttonText={!hasOpenAksjonspunkt ? intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.Oppdater' }) : undefined}
        formName={formProps.form}
        isSubmittable={submittable}
        isReadOnly={overstyringDisabled}
        hasOpenAksjonspunkter={hasOpenAksjonspunkt}
      />
    </form>
  </div>
);

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.soknad.oppgittFordeling],
  (aksjonspunkter, oppgittFordeling = {}): FormValues => {
    const overstyringAp = aksjonspunkter.find((ap) => ap.definisjon === aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO);
    return {
      opprinneligDato: oppgittFordeling.startDatoForPermisjon,
      startdatoFraSoknad: oppgittFordeling.startDatoForPermisjon,
      begrunnelse: (overstyringAp && overstyringAp.begrunnelse) || '',
    };
  },
);

const transformValues = (values: FormValues): OverstyringAvklarStartdatoForPeriodenAp => ({
  kode: aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
  opprinneligDato: values.opprinneligDato,
  startdatoFraSoknad: values.startdatoFraSoknad,
  begrunnelse: values.begrunnelse,
});

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback], (submitCallback) => (
  values: FormValues,
) => submitCallback(transformValues(values)));

const isBefore2019 = (startdato: string): boolean => moment(startdato).isBefore(moment('2019-01-01'));

const validateDates = (values: FormValues, intl: IntlShape): any => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { startdatoFraSoknad } = values;

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
  const hasOpenAksjonspunkt = hasAksjonspunkt && isAksjonspunktOpen(aksjonspunkt.status);
  return {
    hasAksjonspunkt,
    hasOpenAksjonspunkt,
    onSubmit: lagSubmitFn(ownProps),
    validate: lagValidateFn(ownProps),
    overstyringDisabled: ownProps.readOnlyForStartdatoForForeldrepenger || ownProps.behandlingStatus !== behandlingStatus.BEHANDLING_UTREDES,
    initialValues: buildInitialValues(ownProps),
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: 'StartdatoForForeldrepengerperiodenForm',
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(StartdatoForForeldrepengerperiodenForm));

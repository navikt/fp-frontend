import React, { FunctionComponent } from 'react';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import {
  calcDaysAndWeeks, dateAfterOrEqual, dateBeforeOrEqual, DDMMYYYY_DATE_FORMAT, hasValidDate, required,
} from '@fpsak-frontend/utils';
import { FlexColumn, FlexContainer, FlexRow } from '@fpsak-frontend/shared-components';
import { DatepickerField, behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';

import styles from './delOppPeriodeModal.less';
import { PeriodeMedClassName } from './Uttak';

export type DeltPeriodeData = {
  periodeId: number;
  hovedsoker: boolean;
  gradertProsentandelArbeid?: number;
  gradertTrekkdager?: number;
  forstePeriode: {
    fom: string;
    tom: string;
  };
  andrePeriode: {
    fom: string;
    tom: string;
  };
}

interface FormValues {
  ForstePeriodeTomDato?: string;
}

interface PureOwnProps {
  periodeData: PeriodeMedClassName;
  cancelEvent: () => void;
  showModal: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  splitPeriod: (data: DeltPeriodeData) => void;
}

interface MappedOwnProps {
  førstePeriodeTom?: string;
  validate: (formValues: FormValues) => any;
  onSubmit: (formValues: FormValues) => any;
}

export const DelOppPeriodeModal: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  periodeData,
  showModal,
  cancelEvent,
  førstePeriodeTom,
  ...formProps
}) => {
  const numberOfDaysAndWeeks = calcDaysAndWeeks(periodeData.fom, førstePeriodeTom);
  return (
    <Modal
      isOpen={showModal}
      contentLabel={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
      onRequestClose={cancelEvent}
      closeButton={false}
      className={styles.modal}
      shouldCloseOnOverlayClick={false}
    >
      <FlexContainer wrap>
        <FlexRow wrap>
          <FlexColumn>
            <Element className={styles.marginTop}>
              <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
            </Element>
          </FlexColumn>
        </FlexRow>
        <FlexRow wrap className={styles.marginTop}>
          <FlexColumn>
            <Undertekst><FormattedMessage id="DelOppPeriodeModalImpl.Periode" /></Undertekst>
            <Normaltekst>
              {`${moment(periodeData.fom.toString()).format(DDMMYYYY_DATE_FORMAT)} - ${moment(periodeData.tom.toString()).format(DDMMYYYY_DATE_FORMAT)}`}
            </Normaltekst>
          </FlexColumn>
        </FlexRow>
        <FlexRow wrap className={styles.marginTop}>
          <FlexColumn>
            <Undertekst><FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" /></Undertekst>
            <FlexRow alignItemsToBaseline>
              <FlexColumn>
                <DatepickerField
                  name="ForstePeriodeTomDato"
                  className={styles.datePicker}
                  validate={[required, hasValidDate]}
                  initialMonth={new Date(periodeData.fom)}
                  numberOfMonths={2}
                  disabledDays={{ before: moment(periodeData.fom).toDate(), after: moment(periodeData.tom).toDate() }}
                />
              </FlexColumn>
              {førstePeriodeTom && (
                <FlexColumn>
                  <FormattedMessage
                    id={numberOfDaysAndWeeks.id.toString()}
                    values={{
                      weeks: numberOfDaysAndWeeks.weeks.toString(),
                      days: numberOfDaysAndWeeks.days.toString(),
                    }}
                  />

                </FlexColumn>
              )}
            </FlexRow>
          </FlexColumn>
        </FlexRow>
        <FlexRow wrap className={styles.marginTop}>
          <FlexColumn>
            <Hovedknapp
              mini
              htmlType="button"
              className={styles.button}
              onClick={formProps.handleSubmit}
              disabled={formProps.pristine}
            >
              <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
            </Hovedknapp>
            <Knapp
              htmlType="button"
              mini
              onClick={cancelEvent}
              className={styles.cancelButton}
            >
              <FormattedMessage id="DelOppPeriodeModalImpl.Avbryt" />
            </Knapp>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Modal>
  );
};

const validateForm = (value: FormValues, periodeData: PeriodeMedClassName) => {
  if (value.ForstePeriodeTomDato
    && (dateAfterOrEqual(value.ForstePeriodeTomDato)(moment(periodeData.tom.toString()).subtract(1, 'day'))
      || dateBeforeOrEqual(value.ForstePeriodeTomDato)(periodeData.fom))) {
    return {
      ForstePeriodeTomDato: [{ id: 'DelOppPeriodeModalImpl.DatoUtenforPeriode' }],
    };
  }
  return null;
};

const transformValues = (values: FormValues, periodeData: PeriodeMedClassName): DeltPeriodeData => {
  const addDay = moment(values.ForstePeriodeTomDato).add(1, 'days');
  const forstePeriode = {
    fom: periodeData.fom,
    tom: values.ForstePeriodeTomDato,
  };
  const andrePeriode = {
    fom: moment(addDay.toString()).format('YYYY-MM-DD'),
    tom: periodeData.tom,
  };
  return {
    periodeId: periodeData.id,
    hovedsoker: periodeData.hovedsoker,
    gradertProsentandelArbeid: periodeData.gradertAktivitet ? periodeData.gradertAktivitet.prosentArbeid : null,
    gradertTrekkdager: periodeData.gradertAktivitet ? periodeData.gradertAktivitet.trekkdagerDesimaler : null,
    forstePeriode,
    andrePeriode,
  };
};

const mapStateToPropsFactory = (_initialState, ownProps: PureOwnProps) => {
  const { behandlingId, behandlingVersjon } = ownProps;
  const validate = (values: FormValues) => validateForm(values, ownProps.periodeData);
  const onSubmit = (values: FormValues) => ownProps.splitPeriod(transformValues(values, ownProps.periodeData));
  return (state: any): MappedOwnProps => ({
    førstePeriodeTom: behandlingFormValueSelector('DelOppPeriode', behandlingId, behandlingVersjon)(state, 'ForstePeriodeTomDato'),
    validate,
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: 'DelOppPeriode',
})(injectIntl(DelOppPeriodeModal)));

import React, { FunctionComponent } from 'react';
import {
  FormattedMessage, IntlShape,
} from 'react-intl';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import AlertStripe from 'nav-frontend-alertstriper';

import {
  dateAfterOrEqual, dateBeforeOrEqual, DDMMYYYY_DATE_FORMAT, hasValidDate, ISO_DATE_FORMAT, required,
} from '@fpsak-frontend/utils';
import { DatepickerField } from '@fpsak-frontend/form';

import styles from './delOppPeriodeModal.less';

type Periode = {
  fom: string;
  tom: string;
}

export type PerioderData = {
  forstePeriode: Periode;
  andrePeriode: Periode;
}

type FormValues = {
  ForstePeriodeTomDato?: string;
}

interface PureOwnProps {
  periodeData: Periode;
  showModal: boolean;
  finnesBelopMed0Verdi: boolean;
  splitPeriod: (perioder: PerioderData) => void;
  cancelEvent: () => void;
  intl: IntlShape;
}

export const DelOppPeriodeModalImpl: FunctionComponent<PureOwnProps & InjectedFormProps> = ({
  intl,
  periodeData,
  showModal,
  cancelEvent,
  finnesBelopMed0Verdi,
  ...formProps
}) => (
  <Modal
    isOpen={showModal}
    contentLabel={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
    onRequestClose={cancelEvent}
    closeButton={false}
    className={styles.modal}
    shouldCloseOnOverlayClick={false}
  >
    <Element className={styles.marginTop}>
      <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
    </Element>
    <div className={styles.marginTop}>
      <Undertekst><FormattedMessage id="DelOppPeriodeModalImpl.Periode" /></Undertekst>
      <Normaltekst>
        {`${moment(periodeData.fom.toString()).format(DDMMYYYY_DATE_FORMAT)} - ${moment(periodeData.tom.toString()).format(DDMMYYYY_DATE_FORMAT)}`}
      </Normaltekst>
    </div>
    <div className={styles.marginTop}>
      <Undertekst><FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" /></Undertekst>
      <DatepickerField
        name="ForstePeriodeTomDato"
        className={styles.datePicker}
        validate={[required, hasValidDate]}
        disabledDays={{ before: moment(periodeData.fom).toDate(), after: moment(periodeData.tom).toDate() }}
        initialMonth={moment(periodeData.tom).toDate()}
      />
    </div>
    {finnesBelopMed0Verdi && (
      <AlertStripe type="feil">
        <FormattedMessage id="DelOppPeriodeModalImpl.BelopEr0" />
      </AlertStripe>
    )}
    <Row className={styles.marginTop}>
      <Column>
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
      </Column>
    </Row>
  </Modal>
);

const validateForm = (value: FormValues, periodeData: Periode, intl: IntlShape): any => {
  if (value.ForstePeriodeTomDato
    && (dateAfterOrEqual(value.ForstePeriodeTomDato)(moment(periodeData.tom.toString()).subtract(1, 'day'))
      || dateBeforeOrEqual(value.ForstePeriodeTomDato)(periodeData.fom))) {
    return {
      ForstePeriodeTomDato: intl.formatMessage({ id: 'DelOppPeriodeModalImpl.DatoUtenforPeriode' }),
    };
  }
  return null;
};

const transformValues = (values: FormValues, periodeData: Periode): any => {
  const addDay = moment(values.ForstePeriodeTomDato).add(1, 'days');
  const forstePeriode = {
    fom: periodeData.fom,
    tom: values.ForstePeriodeTomDato,
  };
  const andrePeriode = {
    fom: addDay.format(ISO_DATE_FORMAT),
    tom: periodeData.tom,
  };
  return {
    forstePeriode,
    andrePeriode,
  };
};

export const mapStateToPropsFactory = (_initialState, ownProps: PureOwnProps): any => {
  const validate = (values: FormValues) => validateForm(values, ownProps.periodeData, ownProps.intl);
  const onSubmit = (values: FormValues) => ownProps.splitPeriod(transformValues(values, ownProps.periodeData));
  return () => ({
    validate,
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: 'DelOppPeriode',
  destroyOnUnmount: false,
})(DelOppPeriodeModalImpl));

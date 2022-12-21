import React, { FunctionComponent } from 'react';
import {
  FormattedMessage, IntlShape, useIntl,
} from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import {
  Detail, Label, BodyShort, Modal, Button,
} from '@navikt/ds-react';
import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import styles from './splittPeriodeModal.less';

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

const validerInnenforIntervall = (
  fom: string,
  tom: string,
  intl: IntlShape,
) => (dato: string) => {
  if (!dayjs(dato).isBefore(fom) && dayjs(dato).isBefore(tom)) {
    return null;
  }
  return intl.formatMessage({ id: 'DelOppPeriodeModal.UgyldigDato' });
};

interface OwnProps {
  fomDato: string;
  tomDato: string;
  cancel: () => void;
  submit: (dato: string) => void;
}

const DelOppPeriodeModal: FunctionComponent<OwnProps> = ({
  fomDato,
  tomDato,
  submit,
  cancel,
}) => {
  const intl = useIntl();

  const formMethods = useForm<{ dato: string }>();

  const dato = formMethods.watch('dato');

  const numberOfDaysAndWeeks = calcDaysAndWeeks(fomDato, dato);

  return (
    <Modal
      open
      aria-label={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
      onClose={cancel}
      closeButton={false}
      className={styles.modal}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer wrap>
          <FlexRow wrap>
            <FlexColumn>
              <Label size="small" className={styles.marginTop}>
                <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
              </Label>
            </FlexColumn>
          </FlexRow>
          <FlexRow wrap className={styles.marginTop}>
            <FlexColumn>
              <Detail><FormattedMessage id="DelOppPeriodeModalImpl.Periode" /></Detail>
              <BodyShort size="small">
                {`${dayjs(fomDato.toString()).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tomDato.toString()).format(DDMMYYYY_DATE_FORMAT)}`}
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <Form formMethods={formMethods} onSubmit={(values) => submit(values.dato)}>
            <FlexRow wrap className={styles.marginTop}>
              <FlexColumn>
                <Detail size="small"><FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" /></Detail>
                <FlexRow alignItemsToBaseline>
                  <FlexColumn>
                    <Datepicker
                      name="ForstePeriodeTomDato"
                      validate={[required, hasValidDate, validerInnenforIntervall(fomDato, tomDato, intl)]}
                      defaultMonth={new Date(fomDato)}
                      disabledDays={{ fromDate: dayjs(fomDato).toDate(), toDate: dayjs(tomDato).toDate() }}
                      strategy="fixed"
                    />
                  </FlexColumn>
                  {dato && (
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
                <Button
                  size="small"
                  variant="primary"
                >
                  <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button
                  size="small"
                  variant="secondary"
                  onClick={cancel}
                  type="button"
                >
                  <FormattedMessage id="DelOppPeriodeModalImpl.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </Form>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

/*
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
*/

export default DelOppPeriodeModal;

import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Detail, Label, BodyShort, Modal, Button } from '@navikt/ds-react';
import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import styles from './splittPeriodeModal.module.css';

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
};

const validerInnenforIntervall = (fom: string, tom: string, intl: IntlShape) => (dato: string) => {
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

const SplittPeriodeModal: FunctionComponent<OwnProps> = ({ fomDato, tomDato, submit, cancel }) => {
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
              <Detail>
                <FormattedMessage id="DelOppPeriodeModalImpl.Periode" />
              </Detail>
              <BodyShort size="small">
                {`${dayjs(fomDato.toString()).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tomDato.toString()).format(
                  DDMMYYYY_DATE_FORMAT,
                )}`}
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <Form formMethods={formMethods} onSubmit={values => submit(values.dato)}>
            <FlexRow wrap className={styles.marginTop}>
              <FlexColumn>
                <Datepicker
                  name="dato"
                  label={<FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" />}
                  validate={[required, hasValidDate, validerInnenforIntervall(fomDato, tomDato, intl)]}
                  defaultMonth={new Date(fomDato)}
                  disabledDays={{ fromDate: dayjs(fomDato).toDate(), toDate: dayjs(tomDato).toDate() }}
                  strategy="fixed"
                />
              </FlexColumn>
              {dato && <FlexColumn className={styles.dager}>{numberOfDaysAndWeeks.formattedString}</FlexColumn>}
            </FlexRow>
            <VerticalSpacer sixteenPx />
            <FlexRow wrap>
              <FlexColumn>
                <Button size="small" variant="primary">
                  <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button size="small" variant="secondary" onClick={cancel} type="button">
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

export default SplittPeriodeModal;

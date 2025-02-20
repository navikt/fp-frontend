import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, Button, Detail, Heading, HStack, Modal, VStack } from '@navikt/ds-react';
import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

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

interface Props {
  fomDato: string;
  tomDato: string;
  cancel: () => void;
  submit: (dato: string) => void;
}

export const SplittPeriodeModal = ({ fomDato, tomDato, submit, cancel }: Props) => {
  const intl = useIntl();

  const formMethods = useForm<{ dato: string }>();

  const dato = formMethods.watch('dato');

  const numberOfDaysAndWeeks = calcDaysAndWeeks(fomDato, dato);

  return (
    <Form formMethods={formMethods} onSubmit={values => submit(values.dato)}>
      <Modal
        open
        aria-label={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
        onClose={cancel}
        className={styles.modal}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="4">
            <VStack gap="1">
              <Detail>
                <FormattedMessage id="DelOppPeriodeModalImpl.Periode" />
              </Detail>
              <BodyShort size="small">
                {`${dayjs(fomDato.toString()).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tomDato.toString()).format(
                  DDMMYYYY_DATE_FORMAT,
                )}`}
              </BodyShort>
            </VStack>
            <HStack justify="space-between">
              <Datepicker
                name="dato"
                label={<FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" />}
                validate={[required, hasValidDate, validerInnenforIntervall(fomDato, tomDato, intl)]}
                defaultMonth={new Date(fomDato)}
                fromDate={dayjs(fomDato).toDate()}
                toDate={dayjs(tomDato).toDate()}
              />
              {dato && <div className={styles.dager}>{numberOfDaysAndWeeks.formattedString}</div>}
            </HStack>
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary">
            <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={cancel} type="button">
            <FormattedMessage id="DelOppPeriodeModalImpl.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

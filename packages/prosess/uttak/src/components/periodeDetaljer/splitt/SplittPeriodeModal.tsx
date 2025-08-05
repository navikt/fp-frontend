import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, Button, Detail, Heading, HStack, Modal, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import styles from './splittPeriodeModal.module.css';

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
    <RhfForm formMethods={formMethods} onSubmit={values => submit(values.dato)}>
      <Modal
        open
        aria-label={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
        onClose={cancel}
        className={styles.modal}
      >
        <Modal.Header>
          <Heading size="small" level="2">
            <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="space-16">
            <VStack gap="space-4">
              <Detail>
                <FormattedMessage id="DelOppPeriodeModalImpl.Periode" />
              </Detail>
              <BodyShort size="small">
                <PeriodLabel dateStringFom={fomDato} dateStringTom={tomDato} />
              </BodyShort>
            </VStack>
            <HStack justify="space-between">
              <RhfDatepicker
                name="dato"
                control={formMethods.control}
                label={<FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" />}
                validate={[required, hasValidDate, validerInnenforIntervall(fomDato, tomDato, intl)]}
                defaultMonth={new Date(fomDato)}
                fromDate={dayjs(fomDato).toDate()}
                toDate={dayjs(tomDato).toDate()}
              />
              {dato && (
                <BodyShort size="small" className={styles.dager}>
                  {numberOfDaysAndWeeks.formattedString}
                </BodyShort>
              )}
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
    </RhfForm>
  );
};

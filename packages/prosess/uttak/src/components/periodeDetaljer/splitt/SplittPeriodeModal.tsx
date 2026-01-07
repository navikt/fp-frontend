import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, Button, DatePicker, Detail, Dialog, HStack, VStack } from '@navikt/ds-react';
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
      <Dialog open onOpenChange={cancel} size="small">
        <Dialog.Popup width="small" withBackdrop>
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
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
                <DatePicker strategy="fixed">
                  <DatePicker.Input label="Velg dato" />
                </DatePicker>
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
                  <BodyShort size="small" className={styles['dager']}>
                    {numberOfDaysAndWeeks.formattedString}
                  </BodyShort>
                )}
              </HStack>
            </VStack>
          </Dialog.Body>
          <Dialog.Footer>
            <Button size="small" variant="secondary" onClick={cancel} type="button">
              <FormattedMessage id="DelOppPeriodeModalImpl.Avbryt" />
            </Button>
            <Button size="small" variant="primary">
              <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
            </Button>
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog>
    </RhfForm>
  );
};

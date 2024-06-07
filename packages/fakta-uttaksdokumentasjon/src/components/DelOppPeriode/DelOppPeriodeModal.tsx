import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Button, BodyShort, Modal, Heading, Label, VStack, HStack } from '@navikt/ds-react';
import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import styles from './delOppPeriodeModal.module.css';
import { VurderingsBehovPeriode } from '../../types';

const validerInnenforIntervall = (fom: string, tom: string, intl: IntlShape) => (dato: string) => {
  if (!dayjs(dato).isBefore(fom) && dayjs(dato).isBefore(tom)) {
    return null;
  }
  return intl.formatMessage({ id: 'DelOppPeriodeModal.UgyldigDato' });
};

interface OwnProps {
  periode: VurderingsBehovPeriode;
  originalTom: string;
  cancel: () => void;
  submit: (dato: string) => void;
  visSlettEtterfølgendePerioder: boolean;
}

const DelOppPeriodeModal: FunctionComponent<OwnProps> = ({
  periode,
  originalTom,
  visSlettEtterfølgendePerioder,
  cancel,
  submit,
}) => {
  const intl = useIntl();

  const formMethods = useForm<{ dato: string }>();

  return (
    <Form formMethods={formMethods} onSubmit={values => submit(values.dato)}>
      <Modal
        open
        aria-label={intl.formatMessage({ id: 'DelOppPeriodeModal.Periode' })}
        onClose={cancel}
        className={styles.modal}
      >
        <Modal.Header>
          {!visSlettEtterfølgendePerioder && (
            <Heading size="small">
              <FormattedMessage id="DelOppPeriodeModal.RedigerPeriode" />
            </Heading>
          )}
        </Modal.Header>
        <Modal.Body>
          <VStack gap="4">
            {!visSlettEtterfølgendePerioder && (
              <HStack gap="4">
                <ExclamationmarkTriangleFillIcon
                  className={styles.image}
                  title={intl.formatMessage({ id: 'DelOppPeriodeModal.Nullstilles' })}
                />
                <div className={styles.text}>
                  <BodyShort size="small">
                    <FormattedMessage id="DelOppPeriodeModal.Nullstilles" />
                  </BodyShort>
                </div>
              </HStack>
            )}
            <div>
              <Label size="small">
                <FormattedMessage id="DelOppPeriodeModal.Periode" />
              </Label>
              <BodyShort size="small">
                <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom} />
              </BodyShort>
            </div>
            <BodyShort size="small">
              <FormattedMessage id="DelOppPeriodeModal.Splitt" />
            </BodyShort>
            <Datepicker
              name="dato"
              label={<FormattedMessage id="DelOppPeriodeModal.Dato" />}
              validate={[required, hasValidDate, validerInnenforIntervall(periode.fom, originalTom, intl)]}
              disabledDays={{
                fromDate: dayjs(periode.fom, ISO_DATE_FORMAT).toDate(),
                toDate: dayjs(originalTom, ISO_DATE_FORMAT).subtract(1, 'day').toDate(),
              }}
            />
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary">
            <FormattedMessage id="DelOppPeriodeModal.Oppdater" />
          </Button>
          <Button size="small" variant="secondary" onClick={cancel} type="button">
            <FormattedMessage id="DelOppPeriodeModal.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default DelOppPeriodeModal;

import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { ScissorsIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Heading, HStack, Label, Modal, VStack } from '@navikt/ds-react';
import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import styles from './delOppPeriodeModal.module.css';
import { VurderingsBehovPeriode } from '../../../types/FormValues';
import { getFormatertPeriode, splitPeriodePåDato } from '../../utils/periodeUtils';

const validerInnenforIntervall = (fom: string, tom: string, intl: IntlShape) => (dato: string) => {
  if (!dayjs(dato).isBefore(fom) && dayjs(dato).isBefore(tom)) {
    return null;
  }
  return intl.formatMessage({ id: 'DelOppPeriodeModal.UgyldigDato' });
};

interface OwnProps {
  periode: VurderingsBehovPeriode;
  cancel: () => void;
  submit: (dato: string) => void;
}

const DelOppPeriodeModal: FunctionComponent<OwnProps> = ({ periode, cancel, submit }) => {
  const intl = useIntl();

  const formMethods = useForm<{ dato: string }>();

  const splittDato = formMethods.watch('dato');
  const perioder = useMemo(() => (splittDato ? splitPeriodePåDato(periode, splittDato) : null), [splittDato]);

  return (
    <Form formMethods={formMethods} onSubmit={values => submit(values.dato)}>
      <Modal
        open
        aria-label={intl.formatMessage({ id: 'DelOppPeriodeModal.Periode' })}
        onClose={cancel}
        className={styles.modal}
      >
        <Modal.Header>
          <Heading size="medium">
            <HStack gap="1" align="center">
              <ScissorsIcon />
              <FormattedMessage id="DelOppPeriodeModal.Tittel" />
            </HStack>
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="6">
            <BodyShort>
              <FormattedMessage id="DelOppPeriodeModal.Beskrivelse" />
            </BodyShort>
            <VStack>
              <Label>
                <FormattedMessage id="DelOppPeriodeModal.PeriodeLabel" />
              </Label>
              <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom} />
            </VStack>
            <Datepicker
              name="dato"
              size="medium"
              description={intl.formatMessage({ id: 'DelOppPeriodeModal.DatePickerBeskrivelse' })}
              label={<FormattedMessage id="DelOppPeriodeModal.DatePickerTittel" />}
              validate={[required, hasValidDate, validerInnenforIntervall(periode.fom, periode.tom, intl)]}
              disabledDays={{
                fromDate: dayjs(periode.fom, ISO_DATE_FORMAT).toDate(),
                toDate: dayjs(periode.tom, ISO_DATE_FORMAT).subtract(1, 'day').toDate(),
              }}
            />
            {perioder && (
              <Box background="bg-subtle" padding="2" borderRadius="large" style={{ width: 'max-content' }}>
                <VStack gap="1">
                  <Label>
                    <FormattedMessage id="DelOppPeriodeModal.NyePeriodeLabel" />
                  </Label>
                  {perioder &&
                    perioder.map((p, index) => (
                      <BodyShort key={p.fom}>
                        <FormattedMessage
                          id="UttakDokumentasjonFaktaDetailForm.PeriodeMedInnhold"
                          values={{ index: index + 1, periode: getFormatertPeriode(p) }}
                        />
                      </BodyShort>
                    ))}
                </VStack>
              </Box>
            )}
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            <FormattedMessage id="DelOppPeriodeModal.Submit" />
          </Button>
          <Button variant="secondary" onClick={cancel}>
            <FormattedMessage id="DelOppPeriodeModal.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default DelOppPeriodeModal;

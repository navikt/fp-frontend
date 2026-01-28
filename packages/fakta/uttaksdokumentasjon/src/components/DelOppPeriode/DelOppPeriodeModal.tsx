import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { ScissorsIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Dialog, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { VurderingsBehovPeriode } from '../../types/FormValues';
import { getFormatertPeriode, splitPeriodePåDato } from '../../utils/periodeUtils';

const validerInnenforIntervall = (fom: string, tom: string, intl: IntlShape) => (dato: string) => {
  if (!dayjs(dato).isBefore(fom) && dayjs(dato).isBefore(tom)) {
    return null;
  }
  return intl.formatMessage({ id: 'DelOppPeriodeModal.UgyldigDato' });
};

interface Props {
  periode: VurderingsBehovPeriode;
  cancel: () => void;
  submit: (dato: string) => void;
}

export const DelOppPeriodeModal = ({ periode, cancel, submit }: Props) => {
  const intl = useIntl();

  const formMethods = useForm<{ dato: string }>();

  const splittDato = formMethods.watch('dato');
  const perioder = splittDato ? splitPeriodePåDato(periode, splittDato) : null;

  return (
    <Dialog open onOpenChange={cancel} size="small">
      <Dialog.Popup width="small" closeOnOutsideClick={false}>
        <RhfForm formMethods={formMethods} onSubmit={values => submit(values.dato)}>
          <Dialog.Header>
            <Dialog.Title>
              <HStack gap="space-4" align="center">
                <ScissorsIcon />
                <FormattedMessage id="DelOppPeriodeModal.Tittel" />
              </HStack>
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <VStack gap="space-24">
              <BodyShort>
                <FormattedMessage id="DelOppPeriodeModal.Beskrivelse" />
              </BodyShort>
              <VStack gap="space-4">
                <Label>
                  <FormattedMessage id="DelOppPeriodeModal.PeriodeLabel" />
                </Label>
                <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom} />
              </VStack>
              <RhfDatepicker
                name="dato"
                control={formMethods.control}
                size="medium"
                description={intl.formatMessage({ id: 'DelOppPeriodeModal.DatePickerBeskrivelse' })}
                label={<FormattedMessage id="DelOppPeriodeModal.DatePickerTittel" />}
                validate={[required, hasValidDate, validerInnenforIntervall(periode.fom, periode.tom, intl)]}
                fromDate={dayjs(periode.fom, ISO_DATE_FORMAT).toDate()}
                toDate={dayjs(periode.tom, ISO_DATE_FORMAT).subtract(1, 'day').toDate()}
              />
              {perioder && (
                <Box
                  background="neutral-moderate"
                  padding="space-8"
                  borderRadius="8"
                  style={{ width: 'max-content' }}
                >
                  <VStack gap="space-4">
                    <Label>
                      <FormattedMessage id="DelOppPeriodeModal.NyePeriodeLabel" />
                    </Label>
                    {perioder.map((p, index) => (
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
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="secondary" onClick={cancel} type="button">
              <FormattedMessage id="DelOppPeriodeModal.Avbryt" />
            </Button>
            <Button type="submit" variant="primary">
              <FormattedMessage id="DelOppPeriodeModal.Submit" />
            </Button>
          </Dialog.Footer>
        </RhfForm>
      </Dialog.Popup>
    </Dialog>
  );
};

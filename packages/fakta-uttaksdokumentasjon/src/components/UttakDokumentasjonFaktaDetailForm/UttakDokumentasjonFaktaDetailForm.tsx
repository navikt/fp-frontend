import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFieldArray, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { BodyShort, Box, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { required } from '@navikt/ft-form-validators';
import { calcDaysAndWeeks, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { DokumentasjonVurderingBehov } from '@navikt/fp-types';
import { DelOppPeriodeButton, DelOppPeriodeModal } from '../DelOppPeriode';
import SlåSammenPeriodeButton from '../SlåSammenPeriodeButton';
import { getFormatertPeriode, periodeErMerEnnEnDag } from '../../utils/periodeUtils';
import lagVurderingsAlternativer from './vurderingsValg';
import Card from '../Card';

interface OwnProps {
  behov: DokumentasjonVurderingBehov;
  readOnly: boolean;
  submit: (dokBehov: { perioder: DokumentasjonVurderingBehov[] }) => void;
  cancel: () => void;
}

type FormValues = {
  perioder: DokumentasjonVurderingBehov[];
};

const UttakDokumentasjonFaktaDetailForm: FunctionComponent<OwnProps> = ({ behov, readOnly, cancel, submit }) => {
  const intl = useIntl();

  const [valgtPeriodeIndex, settValgtPeriodeIndex] = useState<number | undefined>();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      perioder: [behov],
    },
  });

  const { fields, update, remove, insert } = useFieldArray({
    control: formMethods.control,
    name: 'perioder',
  });

  const lagNyPeriode = (currentIndex: number, dato: string) => {
    const currentPeriode = fields[currentIndex];

    update(currentIndex, {
      ...currentPeriode,
      tom: dato,
      vurdering: undefined,
    });

    insert(currentIndex + 1, {
      ...currentPeriode,
      fom: dayjs(dato).add(1, 'day').format(ISO_DATE_FORMAT),
      tom: currentPeriode.tom,
      vurdering: undefined,
    });
    settValgtPeriodeIndex(undefined);
  };

  const slåSammenMedPeriodeOver = (currentIndex: number) => {
    const previousIndex = currentIndex - 1;
    const previousPeriode = fields[previousIndex];
    update(previousIndex, { ...previousPeriode, vurdering: undefined, tom: fields[currentIndex].tom });
    remove(currentIndex);
  };

  const vurderingsalternativ = lagVurderingsAlternativer(intl, behov.årsak);

  return (
    <Box
      padding="4"
      style={
        !behov.vurdering &&
        fields.length === 1 && {
          borderLeft: '3px solid var(--a-surface-warning)',
        }
      }
    >
      <Form formMethods={formMethods} onSubmit={submit}>
        <VStack gap="4">
          {fields.length === 1 && (
            <div>
              <DelOppPeriodeButton
                display={!readOnly && periodeErMerEnnEnDag(fields[0])}
                onClick={() => settValgtPeriodeIndex(0)}
              />
              <RadioGroupPanel
                name={`perioder.${0}.vurdering`}
                label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Vurdering" />}
                validate={[required]}
                isReadOnly={readOnly}
                radios={vurderingsalternativ}
              />
            </div>
          )}

          {fields.length > 1 &&
            fields.map((periode, index) => (
              <Card key={periode.fom}>
                <Card.Header>
                  <Label>
                    <FormattedMessage
                      id="UttakDokumentasjonFaktaDetailForm.PeriodeMedIndex"
                      values={{ index: index + 1 }}
                    />
                  </Label>
                  <HStack gap="2">
                    <DelOppPeriodeButton
                      display={!readOnly && periodeErMerEnnEnDag(periode)}
                      onClick={() => settValgtPeriodeIndex(index)}
                    />
                    <SlåSammenPeriodeButton
                      display={!readOnly && fields.length > 1 && index > 0}
                      onClick={() => slåSammenMedPeriodeOver(index)}
                      disabled={!periode.tom}
                    />
                  </HStack>
                </Card.Header>
                <Card.Content>
                  <HStack gap="6">
                    <BodyShort weight="semibold">{getFormatertPeriode(periode)}</BodyShort>
                    <BodyShort>{calcDaysAndWeeks(periode.fom, periode.tom).formattedString}</BodyShort>
                  </HStack>
                  <RadioGroupPanel
                    name={`perioder.${index}.vurdering`}
                    label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Vurdering" />}
                    validate={[required]}
                    isReadOnly={readOnly}
                    radios={vurderingsalternativ}
                  />
                </Card.Content>
              </Card>
            ))}
          {!readOnly && (
            <HStack gap="2">
              <Button
                size="small"
                type="submit"
                variant="primary"
                loading={false}
                disabled={!formMethods.formState.isDirty || readOnly}
              >
                <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Oppdater" />
              </Button>
              <Button size="small" type="button" variant="secondary" onClick={cancel} disabled={readOnly}>
                <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Avbryt" />
              </Button>
            </HStack>
          )}
        </VStack>
      </Form>
      {valgtPeriodeIndex !== undefined && (
        <DelOppPeriodeModal
          periode={fields[valgtPeriodeIndex]}
          submit={dato => lagNyPeriode(valgtPeriodeIndex, dato)}
          cancel={() => settValgtPeriodeIndex(undefined)}
        />
      )}
    </Box>
  );
};

export default UttakDokumentasjonFaktaDetailForm;

import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFieldArray, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { BodyShort, Box, Button, HStack, Label, Link, ReadMore, VStack } from '@navikt/ds-react';
import { maxValue, minValue, required } from '@navikt/ft-form-validators';
import { calcDaysAndWeeks, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Form, NumberField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { DokumentasjonVurderingBehov } from '@navikt/fp-types';
import { FOLKETRYGDLOVEN_KAP14_13_URL } from '@navikt/fp-konstanter';
import { DelOppPeriodeButton, DelOppPeriodeModal } from '../DelOppPeriode';
import {
  erUttaksperiodeMedAktivitetskravArbeid,
  fraFormValues,
  tilFormValues,
} from './DokumentasjonVurderingBehovFormMapper';
import lagVurderingsAlternativer from './VurderingsAlternativUtleder';
import FormValues, { VurderingsAlternativ } from '../../../types/FormValues';
import SlåSammenPeriodeButton from '../SlåSammenPeriodeButton';
import { getFormatertPeriode, periodeErMerEnnEnDag } from '../../utils/periodeUtils';
import Card from '../Card';

const ReadMoreLink = (msg: ReactNode[]) => (
  <Link inlineText href={FOLKETRYGDLOVEN_KAP14_13_URL} className="lenke" rel="noreferrer" target="_blank">
    {msg}
  </Link>
);

interface OwnProps {
  behov: DokumentasjonVurderingBehov;
  readOnly: boolean;
  submit: (dokBehov: { perioder: DokumentasjonVurderingBehov[] }) => void;
  cancel: () => void;
}

const UttakDokumentasjonFaktaDetailForm: FunctionComponent<OwnProps> = ({ behov, readOnly, cancel, submit }) => {
  const intl = useIntl();

  const [valgtPeriodeIndex, settValgtPeriodeIndex] = useState<number | undefined>();

  const formMethods = useForm<FormValues>({
    defaultValues: tilFormValues(behov),
  });

  const { fields, update, remove, insert } = useFieldArray({
    control: formMethods.control,
    name: 'perioder',
  });

  const lagNyPeriode = useCallback(
    (currentIndex: number, dato: string) => {
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
    },
    [fields],
  );

  const slåSammenMedPeriodeOver = (currentIndex: number) => {
    const previousIndex = currentIndex - 1;
    const previousPeriode = fields[previousIndex];
    update(previousIndex, { ...previousPeriode, vurdering: undefined, tom: fields[currentIndex].tom });
    remove(currentIndex);
  };

  const vurderingsalternativ = lagVurderingsAlternativer(intl, behov.type, behov.årsak);

  const handleSubmit = (formvalues: FormValues): void => submit(fraFormValues(formvalues));

  return (
    <Box
      padding="4"
      style={!behov.vurdering && fields.length === 1 ? { borderLeft: '3px solid var(--a-surface-warning)' } : {}}
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <VStack gap="6">
          {fields.length === 1 && (
            <VStack gap="6">
              <HStack>
                <DelOppPeriodeButton
                  display={!readOnly && periodeErMerEnnEnDag(fields[0])}
                  onClick={() => settValgtPeriodeIndex(0)}
                />
              </HStack>
              <RadioGroupPanel
                name={`perioder.${0}.vurdering`}
                label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Vurdering" />}
                validate={[required]}
                isReadOnly={readOnly}
                radios={vurderingsalternativ}
              />
              {formMethods.watch(`perioder.0.vurdering`) === VurderingsAlternativ.GODKJENT_UNDER75 && (
                <NumberField
                  label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.Label" />}
                  name={`perioder.0.morsStillingsprosent`}
                  validate={[required, minValue(0.01), maxValue(74.99)]}
                  readOnly={readOnly}
                />
              )}
            </VStack>
          )}

          {fields.length > 1 &&
            fields.map((periode, index) => (
              <Card key={periode.fom}>
                <Card.Header>
                  <HStack gap="4">
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
                  {formMethods.watch(`perioder.${index}.vurdering`) === VurderingsAlternativ.GODKJENT_UNDER75 && (
                    <NumberField
                      label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.Label" />}
                      name={`perioder.${index}.morsStillingsprosent`}
                      validate={[required, minValue(0.01), maxValue(74.99)]}
                      readOnly={readOnly}
                    />
                  )}
                </Card.Content>
              </Card>
            ))}
          {erUttaksperiodeMedAktivitetskravArbeid(fields[0].type, fields[0].årsak) && (
            <ReadMore
              size="small"
              header={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.ReadMoreTittel" />}
            >
              <FormattedMessage
                id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.ReadMoreInnhold"
                values={{
                  a: ReadMoreLink,
                }}
              />
            </ReadMore>
          )}
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

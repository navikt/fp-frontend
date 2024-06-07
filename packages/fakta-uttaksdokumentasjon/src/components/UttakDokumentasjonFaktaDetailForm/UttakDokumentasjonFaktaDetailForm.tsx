import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFieldArray, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { BodyShort, Button, HStack, Label, Link, ReadMore, VStack } from '@navikt/ds-react';
import { required } from '@navikt/ft-form-validators';
import { PencilIcon } from '@navikt/aksel-icons';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Form, RadioGroupPanel, NumberField } from '@navikt/ft-form-hooks';
import { AvsnittSkiller, DateLabel } from '@navikt/ft-ui-komponenter';
import { DokumentasjonVurderingBehov, UttakÅrsak } from '@navikt/fp-types';
import { FOLKETRYGDLOVEN_KAP14_13_URL } from '@navikt/fp-konstanter';

import styles from './uttakDokumentasjonFaktaDetailForm.module.css';
import { DelOppPeriodeModal, DelOppPeriodeButton } from '../DelOppPeriode';
import { lagVurderingsAlternativer } from './vurderingsAlternativer';
import { FormValues, fraFormValues, tilFormValues } from './formValues';
import { VurderingsAlternativ } from '../../types';

interface OwnProps {
  valgtDokBehov: DokumentasjonVurderingBehov;
  readOnly: boolean;
  oppdaterDokBehov: (dokBehov: { perioder: DokumentasjonVurderingBehov[] }) => void;
  avbrytEditeringAvAktivitetskrav: () => void;
}

const UttakDokumentasjonFaktaDetailForm: FunctionComponent<OwnProps> = ({
  valgtDokBehov,
  readOnly,
  avbrytEditeringAvAktivitetskrav,
  oppdaterDokBehov,
}) => {
  const intl = useIntl();

  const [sistOppdeltPeriodeIndex, setSistOppdeltPeriodeIndex] = useState<number>();
  const [valgtPeriodeIndex, settValgtPeriodeIndex] = useState<number | undefined>();

  const formMethods = useForm<FormValues>({
    defaultValues: tilFormValues(valgtDokBehov),
  });

  const { fields, append, update, remove } = useFieldArray({
    control: formMethods.control,
    name: 'perioder',
  });

  const perioder = formMethods.watch('perioder');

  const lagNyPeriode = (dato: string) => {
    if (valgtPeriodeIndex !== undefined) {
      const periode = perioder[valgtPeriodeIndex];
      const nyPeriode = {
        ...periode,
        tom: dato,
      };
      update(valgtPeriodeIndex, nyPeriode);
      append({
        ...periode,
        fom: dayjs(dato).add(1, 'day').format(ISO_DATE_FORMAT),
        tom: periode.tom,
        vurdering: undefined,
      });

      settValgtPeriodeIndex(undefined);
      setSistOppdeltPeriodeIndex(valgtPeriodeIndex);
    }
  };

  const oppdaterOgNullstillPerioder = (dato: string) => {
    if (valgtPeriodeIndex !== undefined) {
      settValgtPeriodeIndex(undefined);

      for (let i = fields.length - 1; i > valgtPeriodeIndex + 1; i -= 1) {
        remove(i);
      }

      update(valgtPeriodeIndex, {
        ...perioder[valgtPeriodeIndex],
        tom: dato,
      });
      update(valgtPeriodeIndex + 1, {
        ...perioder[valgtPeriodeIndex + 1],
        fom: dayjs(dato).add(1, 'day').format(ISO_DATE_FORMAT),
        tom: valgtDokBehov.tom,
      });

      setSistOppdeltPeriodeIndex(valgtPeriodeIndex);
    }
  };
  const vurderingsalternativ = lagVurderingsAlternativer(intl, valgtDokBehov.årsak);

  const handleSubmit = (formvalues: FormValues): void => oppdaterDokBehov(fraFormValues(formvalues));

  return (
    <>
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <VStack gap="4">
          {fields.map((field, index) => (
            <VStack key={field.id} gap="4">
              {index > 0 && <AvsnittSkiller dividerParagraf className={styles.skiller} />}
              {fields.length === 1 && !readOnly && perioder[index].fom !== perioder[index].tom && (
                <HStack>
                  <DelOppPeriodeButton onClick={() => settValgtPeriodeIndex(index)} />
                </HStack>
              )}
              {fields.length > 1 && (
                <>
                  <Label size="medium">
                    <FormattedMessage
                      id="UttakDokumentasjonFaktaDetailForm.PeriodeMedIndex"
                      values={{ index: index + 1 }}
                    />
                  </Label>
                  <HStack gap="4">
                    <HStack gap="2">
                      <Label size="small">
                        <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Fom" />
                      </Label>
                      {perioder[index].fom && (
                        <BodyShort size="small">
                          <DateLabel dateString={perioder[index].fom} />
                        </BodyShort>
                      )}
                    </HStack>
                    <HStack gap="1">
                      <Label size="small">
                        <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Tom" />
                      </Label>
                      {perioder[index].tom && (
                        <BodyShort size="small">
                          <DateLabel dateString={perioder[index].tom} />
                        </BodyShort>
                      )}
                    </HStack>
                    {!!sistOppdeltPeriodeIndex && sistOppdeltPeriodeIndex >= index && (
                      <HStack>
                        <Button
                          size="small"
                          variant="tertiary"
                          icon={<PencilIcon aria-hidden />}
                          onClick={() => settValgtPeriodeIndex(index)}
                          type="button"
                          disabled={!perioder[index].tom}
                        >
                          <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.RedigerPeriode" />
                        </Button>
                      </HStack>
                    )}
                  </HStack>
                  {perioder[index].fom !== perioder[index].tom && fields.length > 1 && index === fields.length - 1 && (
                    <HStack>
                      <DelOppPeriodeButton onClick={() => settValgtPeriodeIndex(index)} />
                    </HStack>
                  )}
                </>
              )}
              <RadioGroupPanel
                name={`perioder.${index}.vurdering`}
                label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Vurdering" />}
                validate={[required]}
                isReadOnly={readOnly}
                radios={vurderingsalternativ}
              />
              {formMethods.getValues(`perioder.${index}.vurdering`) === VurderingsAlternativ.GODKJENT_UNDER75 && (
                <NumberField
                  label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.Label" />}
                  name={`perioder.${index}.morsStillingsprosent`}
                  readOnly={readOnly}
                />
              )}
              {field.årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID && (
                <ReadMore
                  size="small"
                  header={
                    <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.ReadMoreTittel" />
                  }
                >
                  <FormattedMessage
                    id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.ReadMoreInnhold"
                    values={{
                      a: (msg: any) => (
                        <Link
                          inlineText
                          href={FOLKETRYGDLOVEN_KAP14_13_URL}
                          className="lenke"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {msg}
                        </Link>
                      ),
                    }}
                  />
                </ReadMore>
              )}
            </VStack>
          ))}
          {!readOnly && (
            <HStack gap="2">
              <Button
                size="small"
                variant="primary"
                loading={false}
                disabled={!formMethods.formState.isDirty || readOnly}
              >
                <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Oppdater" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                onClick={avbrytEditeringAvAktivitetskrav}
                disabled={readOnly}
                type="button"
              >
                <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Avbryt" />
              </Button>
            </HStack>
          )}
        </VStack>
      </Form>
      {valgtPeriodeIndex !== undefined && (
        <DelOppPeriodeModal
          periode={perioder[valgtPeriodeIndex]}
          originalTom={valgtDokBehov.tom}
          submit={dato =>
            valgtPeriodeIndex + 1 < fields.length ? oppdaterOgNullstillPerioder(dato) : lagNyPeriode(dato)
          }
          cancel={() => settValgtPeriodeIndex(undefined)}
          visSlettEtterfølgendePerioder={valgtPeriodeIndex < fields.length - 1}
        />
      )}
    </>
  );
};

export default UttakDokumentasjonFaktaDetailForm;

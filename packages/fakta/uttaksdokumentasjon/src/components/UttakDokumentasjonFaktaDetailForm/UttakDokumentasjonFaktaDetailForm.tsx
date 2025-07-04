import { type ReactNode, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, HStack, Label, Link, ReadMore, Table, VStack } from '@navikt/ds-react';
import { RhfForm, RhfNumericField, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { maxValue, minValue, required } from '@navikt/ft-form-validators';
import { calcDaysAndWeeks, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { Boks } from '@navikt/fp-fakta-felles';
import { FOLKETRYGDLOVEN_KAP14_13_URL } from '@navikt/fp-konstanter';
import { type DokumentasjonVurderingBehov } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { type FormValues, VurderingsAlternativ } from '../../types/FormValues';
import { getFormatertPeriode, periodeErMerEnnEnDag } from '../../utils/periodeUtils';
import { Card } from '../Card';
import { DelOppPeriodeButton, DelOppPeriodeModal } from '../DelOppPeriode';
import { SlåSammenPeriodeButton } from '../SlåSammenPeriodeButton';
import {
  erUttaksperiodeMedAktivitetskravArbeid,
  fraFormValues,
  tilFormValues,
} from './DokumentasjonVurderingBehovFormMapper';
import { lagVurderingsAlternativer } from './VurderingsAlternativUtleder';

const ReadMoreLink = (msg: ReactNode[]) => (
  <Link inlineText href={FOLKETRYGDLOVEN_KAP14_13_URL} className="lenke" rel="noreferrer" target="_blank">
    {msg}
  </Link>
);

const HEADER_TEXT_CODES = [
  'UttakDokumentasjonFaktaDetailForm.AktivitetskravGrunnlagArbeid',
  'UttakDokumentasjonFaktaDetailForm.AktivitetskravGrunnlagStillingsprosent',
  'UttakDokumentasjonFaktaDetailForm.AktivitetskravGrunnlagPermisjon',
];

interface Props {
  behov: DokumentasjonVurderingBehov;
  readOnly: boolean;
  submit: (dokBehov: { perioder: DokumentasjonVurderingBehov[] }) => void;
  cancel: () => void;
}

export const UttakDokumentasjonFaktaDetailForm = ({ behov, readOnly, cancel, submit }: Props) => {
  const intl = useIntl();

  const [valgtPeriodeIndex, setValgtPeriodeIndex] = useState<number | undefined>();

  const formMethods = useForm<FormValues>({
    defaultValues: tilFormValues(behov),
  });

  const { fields, update, remove, insert } = useFieldArray({
    control: formMethods.control,
    name: 'perioder',
  });

  const { alleKodeverk } = usePanelDataContext();

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
    setValgtPeriodeIndex(undefined);
  };

  const slåSammenMedPeriodeOver = (currentIndex: number) => {
    const previousIndex = currentIndex - 1;
    const previousPeriode = fields[previousIndex];
    update(previousIndex, { ...previousPeriode, vurdering: undefined, tom: fields[currentIndex].tom });
    remove(currentIndex);
  };

  const vurderingsalternativ = lagVurderingsAlternativer(intl, behov.type, behov.årsak);

  const handleSubmit = (formvalues: FormValues): void => submit(fraFormValues(formvalues));

  const aktivitetskravGrunnlagArbeids = behov.aktivitetskravGrunnlag ?? [];
  const morsArbeid = aktivitetskravGrunnlagArbeids.toSorted((a, b) => a.orgNummer.localeCompare(b.orgNummer));
  return (
    <Boks harBorderLeft={!behov.vurdering && fields.length === 1}>
      <RhfForm formMethods={formMethods} onSubmit={handleSubmit}>
        <VStack gap="6">
          {fields.length === 1 && (
            <VStack gap="6">
              <div>
                <DelOppPeriodeButton
                  display={!readOnly && periodeErMerEnnEnDag(fields[0])}
                  onClick={() => setValgtPeriodeIndex(0)}
                />
              </div>
              {aktivitetskravGrunnlagArbeids.length > 0 && (
                <Table size="small">
                  <Table.Header>
                    <Table.Row>
                      {HEADER_TEXT_CODES.map(headerId => (
                        <Table.HeaderCell key={headerId} scope="col" textSize="small">
                          <FormattedMessage id={headerId} />
                        </Table.HeaderCell>
                      ))}
                      <Table.HeaderCell key="empty-header-cell" />
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {morsArbeid.map(ag => {
                      return (
                        <Table.Row key={ag.orgNummer}>
                          <Table.DataCell>{ag.orgNummer}</Table.DataCell>
                          <Table.DataCell>
                            <FormattedMessage
                              id="UttakDokumentasjonFaktaDetailForm.AktivitetskravGrunnlagProsent"
                              values={{ value: ag.stillingsprosent }}
                            />
                          </Table.DataCell>
                          <Table.DataCell>
                            {ag.permisjon.prosent > 0 ? (
                              <FormattedMessage
                                id="UttakDokumentasjonFaktaDetailForm.PermisjonsprosentJa"
                                values={{
                                  prosent: ag.permisjon.prosent,
                                  type: alleKodeverk['AktivitetskravPermisjonType'].find(
                                    o => o.kode === ag.permisjon.type,
                                  )?.navn,
                                }}
                              />
                            ) : (
                              <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.PermisjonsprosentNei" />
                            )}
                          </Table.DataCell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              )}
              <RhfRadioGroup
                name={`perioder.${0}.vurdering`}
                control={formMethods.control}
                label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Vurdering" />}
                validate={[required]}
                isReadOnly={readOnly}
                radios={vurderingsalternativ}
              />
              {formMethods.watch(`perioder.0.vurdering`) === VurderingsAlternativ.GODKJENT_UNDER75 && (
                <RhfNumericField
                  name="perioder.0.morsStillingsprosent"
                  control={formMethods.control}
                  label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.Label" />}
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
                        onClick={() => setValgtPeriodeIndex(index)}
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
                  <RhfRadioGroup
                    name={`perioder.${index}.vurdering`}
                    control={formMethods.control}
                    label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Vurdering" />}
                    validate={[required]}
                    isReadOnly={readOnly}
                    radios={vurderingsalternativ}
                  />
                  {formMethods.watch(`perioder.${index}.vurdering`) === VurderingsAlternativ.GODKJENT_UNDER75 && (
                    <RhfNumericField
                      label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.MorsStillingsprosent.Label" />}
                      control={formMethods.control}
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
      </RhfForm>
      {valgtPeriodeIndex !== undefined && (
        <DelOppPeriodeModal
          periode={fields[valgtPeriodeIndex]}
          submit={dato => lagNyPeriode(valgtPeriodeIndex, dato)}
          cancel={() => setValgtPeriodeIndex(undefined)}
        />
      )}
    </Boks>
  );
};

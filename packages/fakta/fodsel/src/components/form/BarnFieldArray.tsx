import { useEffect } from 'react';
import {
  type FieldPath,
  useFieldArray,
  useFormContext,
  type UseFormGetValues,
  type UseFormSetError,
  useWatch,
} from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Detail, ErrorMessage, HelpText, HStack, Table, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfFieldArrayAppendButton, RhfFieldArrayRemoveButton } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { type FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';
import type { FødselGjeldende } from '@navikt/fp-types';
import {
  dødsdatoAfterOrEqualFødselsdato,
  fødselErINærhetenAvTermin,
  maxFodselsdato,
  minFodselsdato,
} from '@navikt/fp-utils';

import styles from './barnFieldArray.module.css';

const FIELD_ARRAY_NAME = 'barn';

const defaultAntallBarn: FieldArrayRow = {
  fødselsdato: '',
  dødsdato: '',
  kanOverstyres: true,
  kilde: 'SAKSBEHANDLER',
};

type FieldArrayRow = {
  fødselsdato: string;
  dødsdato?: string;
  kanOverstyres: boolean;
  kilde: FaktaKilde;
};

export type BarnFormValues = {
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
};

type FormValuesMedTermin = BarnFormValues & { termindato?: string };

interface Props {
  isReadOnly: boolean;
}

export const BarnFieldArray = ({ isReadOnly }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    setError,
    clearErrors,
    formState: { dirtyFields, errors },
  } = useFormContext<FormValuesMedTermin>();
  const { fields, remove, append } = useFieldArray({ control, name: FIELD_ARRAY_NAME });

  const barn = useWatch({
    control,
    name: FIELD_ARRAY_NAME,
  });
  const termindato = useWatch({
    control,
    name: 'termindato',
  });

  useEffect(() => {
    validateAlleFødselsdatoer(getValues, setError, clearErrors);
  }, [barn, termindato]);

  const today = dayjs().toDate();

  const skalViseDødsdato = !isReadOnly || barn.some(b => b.dødsdato !== undefined);

  return (
    <VStack gap="space-8">
      <Table className={styles['tableNoBorder']} size="small">
        <Table.Header>
          <Table.Row>
            {fields.length > 1 && (
              <Table.HeaderCell>
                <FormattedMessage id="Label.Barn" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell>
              <FormattedMessage id="Label.Fødselsdato" />
            </Table.HeaderCell>
            {skalViseDødsdato && (
              <Table.HeaderCell>
                <FormattedMessage id="Label.Dødsdato" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => {
            const isDirty = dirtyFields.barn?.[index]?.fødselsdato ?? dirtyFields.barn?.[index]?.dødsdato;
            const fieldArrayRow = `${FIELD_ARRAY_NAME}.${index}` as const;

            return (
              <Table.Row shadeOnHover={false} key={field.id}>
                {fields.length > 1 && (
                  <Table.DataCell>
                    <BodyShort size="medium">{index + 1}</BodyShort>
                  </Table.DataCell>
                )}
                <Table.DataCell>
                  <RhfDatepicker
                    size="medium"
                    control={control}
                    name={`${fieldArrayRow}.fødselsdato`}
                    label={intl.formatMessage({ id: 'Label.Fødselsdato' })}
                    hideLabel
                    validate={[required, hasValidDate, dateAfterOrEqual(minFodselsdato()), dateBeforeOrEqualToToday]}
                    fromDate={minFodselsdato().toDate()}
                    toDate={maxFodselsdato().toDate()}
                    readOnly={isReadOnly}
                    disabled={!field.kanOverstyres}
                  />
                </Table.DataCell>
                {skalViseDødsdato && (
                  <Table.DataCell>
                    <RhfDatepicker
                      name={`${fieldArrayRow}.dødsdato`}
                      control={control}
                      size="medium"
                      label={intl.formatMessage({ id: 'Label.Dødsdato' })}
                      hideLabel
                      validate={[hasValidDate, dateBeforeOrEqualToToday, validerDødsdato(getValues, index)]}
                      toDate={today}
                      readOnly={isReadOnly}
                      disabled={!field.kanOverstyres}
                    />
                  </Table.DataCell>
                )}
                <Table.DataCell className={styles['rowDescription']}>
                  <HStack gap="space-8" align="center">
                    <Detail>{getLabelForFaktaKilde(isDirty ? 'SAKSBEHANDLER' : field.kilde)}</Detail>
                    {!isReadOnly && (
                      <>
                        {!field.kanOverstyres && (
                          <HelpText>
                            <FormattedMessage id="BarnFieldArray.HelpText" />
                          </HelpText>
                        )}
                        <RhfFieldArrayRemoveButton
                          index={index}
                          remove={remove}
                          size="small"
                          skjul={!field.kanOverstyres || isReadOnly}
                        />
                      </>
                    )}
                  </HStack>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {!isReadOnly && errors.barn && <ErrorMessage>{errors.barn.message}</ErrorMessage>}
      <div>
        <RhfFieldArrayAppendButton
          append={append}
          emptyTemplate={defaultAntallBarn}
          size="small"
          skjul={isReadOnly || fields.length >= 9}
        >
          <FormattedMessage id="BarnFieldArray.LeggTilBarn" />
        </RhfFieldArrayAppendButton>
      </div>
    </VStack>
  );
};

BarnFieldArray.initialValues = ({ barn, antallBarn }: FødselGjeldende): BarnFormValues => ({
  barn:
    barn.length > 0
      ? barn.map(({ barn: { fødselsdato, dødsdato }, kanOverstyres, kilde }) => ({
          fødselsdato,
          dødsdato,
          kanOverstyres,
          kilde,
        }))
      : lagBarn(antallBarn.antall),
});

BarnFieldArray.transformValues = (
  values: BarnFormValues,
  erBarnFødt: boolean,
): { barn: { fødselsdato: string; dødsdato: string | undefined }[] | undefined } =>
  erBarnFødt
    ? {
        barn: values.barn.map(({ fødselsdato, dødsdato }) => ({
          fødselsdato: fødselsdato,
          dødsdato: dødsdato || undefined,
        })),
      }
    : { barn: undefined };

const lagBarn = (antallBarnFraSoknad: number): FieldArrayRow[] => {
  const antallBarn = antallBarnFraSoknad > 0 ? antallBarnFraSoknad : 1;
  return new Array<FieldArrayRow>(antallBarn).fill({
    fødselsdato: '',
    kanOverstyres: true,
    kilde: 'SAKSBEHANDLER',
  });
};

const validerDødsdato = (getValues: UseFormGetValues<BarnFormValues>, index: number) => (dødsdato: string) => {
  const fødselsdato = getValues(`${FIELD_ARRAY_NAME}.${index}.fødselsdato`);
  return dødsdatoAfterOrEqualFødselsdato(fødselsdato, dødsdato);
};

const validateAlleFødselsdatoer = (
  getValues: UseFormGetValues<FormValuesMedTermin>,
  setError: UseFormSetError<FormValuesMedTermin>,
  clearErrors: (name: FieldPath<FormValuesMedTermin>) => void,
) => {
  const barn = getValues('barn');
  const termindato = getValues('termindato');

  const { minDate, maxDate } = finnMaksOgMinDato(barn);

  if (minDate && maxDate && maxDate.diff(minDate, 'day') > 2) {
    setError(FIELD_ARRAY_NAME, { type: 'manual', message: 'Fødseldatoer må være innenfor 2 dager av hverandre' });
    return false;
  }

  if (minDate) {
    const avvikFeil = fødselErINærhetenAvTermin(minDate.format(ISO_DATE_FORMAT), termindato);
    if (avvikFeil) {
      setError(FIELD_ARRAY_NAME, { type: 'manual', message: avvikFeil });
      return false;
    }
  }

  clearErrors(FIELD_ARRAY_NAME);
  return true;
};

type MaksOgMinDato = { minDate: dayjs.Dayjs | undefined; maxDate: dayjs.Dayjs | undefined };

const finnMaksOgMinDato = (barn: FieldArrayRow[]) =>
  barn.reduce<MaksOgMinDato>(
    (acc, b) => {
      if (!b.fødselsdato) return acc;
      const date = dayjs(b.fødselsdato);
      if (!date.isValid()) return acc;
      if (!acc.minDate || date.isBefore(acc.minDate)) acc.minDate = date;
      if (!acc.maxDate || date.isAfter(acc.maxDate)) acc.maxDate = date;
      return acc;
    },
    { minDate: undefined, maxDate: undefined },
  );

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

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { Button, Detail, ErrorMessage, HelpText, HStack, Table, VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfDatepicker } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import { type FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';
import type { FødselGjeldende } from '@navikt/fp-types';
import { dødsdatoAfterOrEqualFødselsdato, maxFodselsdato, minFodselsdato } from '@navikt/fp-utils';

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
  dødsdato: string | null;
  kanOverstyres: boolean;
  kilde: FaktaKilde;
};

export type BarnFormValues = {
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
};

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
  } = useFormContext<BarnFormValues>();
  const { fields, remove, append } = useFieldArray({ control, name: FIELD_ARRAY_NAME });

  const barn = useWatch({
    control,
    name: FIELD_ARRAY_NAME,
  });

  useEffect(() => {
    validateAlleFødselsdatoer(getValues, setError, clearErrors);
  }, [barn]);

  const today = dayjs().toDate();

  const skalViseDødsdato = !isReadOnly || barn.some(b => b.dødsdato !== null);

  return (
    <VStack gap="space-8">
      <Table className={styles.tableNoBorder} size="small">
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
                    <ReadOnlyField
                      size="medium"
                      label={<FormattedMessage id="Label.Barn" />}
                      value={index + 1}
                      hideLabel
                    />
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
                    isReadOnly={isReadOnly}
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
                      isReadOnly={isReadOnly}
                      disabled={!field.kanOverstyres}
                    />
                  </Table.DataCell>
                )}
                <Table.DataCell className={styles.rowDescription}>
                  <HStack gap="space-8" align="center">
                    <Detail>{getLabelForFaktaKilde(isDirty ? 'SAKSBEHANDLER' : field.kilde)}</Detail>
                    {!isReadOnly && (
                      <>
                        {!field.kanOverstyres && (
                          <HelpText>
                            <FormattedMessage id="BarnFieldArray.HelpText" />
                          </HelpText>
                        )}
                        {index !== 0 && field.kanOverstyres && (
                          <Button
                            size="medium"
                            type="button"
                            variant="tertiary-neutral"
                            icon={<TrashIcon />}
                            onClick={() => remove(index)}
                          />
                        )}
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
      {!isReadOnly && fields.length < 9 && (
        <div>
          <Button
            onClick={() => append(defaultAntallBarn)}
            type="button"
            variant="tertiary-neutral"
            icon={<PlusCircleIcon aria-hidden />}
            size="small"
          >
            <FormattedMessage id="BarnFieldArray.LeggTilBarn" />
          </Button>
        </div>
      )}
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
): { barn?: { fødselsdato: string; dødsdato: string | undefined }[] } =>
  erBarnFødt
    ? {
        barn: values.barn.map(({ fødselsdato, dødsdato }) => ({
          fødselsdato: fødselsdato,
          dødsdato: dødsdato || undefined,
        })),
      }
    : {};

const lagBarn = (antallBarnFraSoknad: number): FieldArrayRow[] => {
  const antallBarn = antallBarnFraSoknad > 0 ? antallBarnFraSoknad : 1;
  return Array<FieldArrayRow>(antallBarn).fill({
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
  getValues: UseFormGetValues<BarnFormValues>,
  setError: UseFormSetError<BarnFormValues>,
  clearErrors: (name: FieldPath<BarnFormValues>) => void,
) => {
  const barn = getValues('barn');

  const { minDate, maxDate } = barn.reduce<{ minDate?: dayjs.Dayjs; maxDate?: dayjs.Dayjs }>((acc, b) => {
    const date = dayjs(b.fødselsdato);
    if (!acc.minDate || date.isBefore(acc.minDate)) acc.minDate = date;
    if (!acc.maxDate || date.isAfter(acc.maxDate)) acc.maxDate = date;
    return acc;
  }, {});

  if (minDate && maxDate && maxDate.diff(minDate, 'day') > 2) {
    setError(FIELD_ARRAY_NAME, { type: 'manual', message: 'Fødseldatoer må være innenfor 2 dager av hverandre' });
    return false;
  }

  clearErrors(FIELD_ARRAY_NAME);
  return true;
};

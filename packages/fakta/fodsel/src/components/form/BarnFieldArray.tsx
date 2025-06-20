import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { Button, Detail, Table } from '@navikt/ds-react';
import { Datepicker, ReadOnlyField } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import type { FødselGjeldende } from '@navikt/fp-types';
import { dødsdatoAfterOrEqualFødselsdato, maxFodselsdato, minFodselsdato } from '@navikt/fp-utils';

import styles from './barnFieldArray.module.css';

const FIELD_ARRAY_NAME = 'barn';

export const defaultAntallBarn: FieldArrayRow = {
  fødselsdato: '',
  dødsdato: '',
  erRedigerbar: true,
};

type FieldArrayRow = {
  fødselsdato: string;
  dødsdato: string | null;
  erRedigerbar?: boolean;
};

export type BarnFormValues = {
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
};

interface Props {
  isReadOnly: boolean;
}

export const BarnFieldArray = ({ isReadOnly }: Props) => {
  const intl = useIntl();

  const { control, watch, getValues } = useFormContext<BarnFormValues>();
  const { fields, remove, append } = useFieldArray({ control, name: FIELD_ARRAY_NAME });

  const barn = watch(FIELD_ARRAY_NAME);
  const today = dayjs().toDate();

  const skalViseDødsdato = !isReadOnly || barn.some(b => b.dødsdato !== null);

  return (
    <>
      <Table className={styles.tableNoBorder} size="small">
        <Table.Header>
          <Table.Row>
            {fields.length > 1 && (
              <Table.HeaderCell>
                <FormattedMessage id="Label.Barn" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell>
              <FormattedMessage id="Label.Fodselsdato" />
            </Table.HeaderCell>
            {skalViseDødsdato && (
              <Table.HeaderCell>
                <FormattedMessage id="Label.Dodsdato" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => {
            const disabled = field.erRedigerbar !== true;
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
                  <Datepicker
                    size="medium"
                    name={`${FIELD_ARRAY_NAME}.${index}.fødselsdato`}
                    label={intl.formatMessage({ id: 'Label.Fodselsdato' })}
                    hideLabel
                    validate={[required, hasValidDate, dateAfterOrEqual(minFodselsdato()), dateBeforeOrEqualToToday]}
                    fromDate={minFodselsdato().toDate()}
                    toDate={maxFodselsdato().toDate()}
                    isReadOnly={isReadOnly}
                    disabled={disabled}
                  />
                </Table.DataCell>
                {skalViseDødsdato && (
                  <Table.DataCell>
                    <Datepicker
                      size="medium"
                      name={`${FIELD_ARRAY_NAME}.${index}.dødsdato`}
                      label={intl.formatMessage({ id: 'Label.Dodsdato' })}
                      hideLabel
                      validate={[hasValidDate, dateBeforeOrEqualToToday, validerDødsdato(getValues, index)]}
                      toDate={today}
                      isReadOnly={isReadOnly}
                      disabled={disabled}
                    />
                  </Table.DataCell>
                )}

                {index !== 0 && !isReadOnly && !disabled && (
                  <Table.DataCell>
                    <Button
                      size="medium"
                      type="button"
                      variant="tertiary-neutral"
                      icon={<TrashIcon />}
                      onClick={() => remove(index)}
                    />
                  </Table.DataCell>
                )}
                {!isReadOnly && disabled && (
                  <Table.DataCell className={styles.rowDescription}>
                    <Detail as="span">Hentet fra folkeregisteret – kan ikke endres</Detail>
                  </Table.DataCell>
                )}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {!isReadOnly && (
        <div>
          <Button
            onClick={() => append(defaultAntallBarn)}
            type="button"
            variant="tertiary-neutral"
            icon={<PlusCircleIcon aria-hidden />}
            size="small"
          >
            <FormattedMessage id="AvklartBarnFieldArray.LeggTilBarn" />
          </Button>
        </div>
      )}
    </>
  );
};

BarnFieldArray.initialValues = (gjeldende: FødselGjeldende): BarnFormValues => ({
  barn:
    gjeldende.barn.length > 0
      ? gjeldende.barn.map(({ barn: { fødselsdato, dødsdato }, kanOverstyres }) => ({
          fødselsdato: fødselsdato,
          dødsdato: dødsdato ?? null,
          erRedigerbar: kanOverstyres,
        }))
      : lagBarn(gjeldende.termin?.antallBarn ?? 0),
});

BarnFieldArray.transformValues = (
  values: BarnFormValues,
  skalListeBrukes: boolean,
): { uidentifiserteBarn: { fødselsdato: string; dødsdato: string | undefined }[] } => ({
  uidentifiserteBarn: skalListeBrukes
    ? values.barn.map(ab => ({
        fødselsdato: ab.fødselsdato,
        dødsdato: ab.dødsdato === '' || ab.dødsdato === null ? undefined : ab.dødsdato,
      }))
    : [],
});

const lagBarn = (antallBarnFraSoknad: number): FieldArrayRow[] => {
  const antallBarn = antallBarnFraSoknad > 0 ? antallBarnFraSoknad : 1;
  return Array(antallBarn).fill({
    fødselsdato: '',
    dødsdato: null,
    erRedigerbar: true,
  });
};

const validerDødsdato = (getValues: UseFormGetValues<BarnFormValues>, index: number) => (dødsdato: string) => {
  const fødselsdato = getValues(`${FIELD_ARRAY_NAME}.${index}.fødselsdato`);
  return dødsdatoAfterOrEqualFødselsdato(fødselsdato, dødsdato);
};

import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { Button, Table } from '@navikt/ds-react';
import { Datepicker, ReadOnlyField } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import type { AvklartBarn, FødselGjeldende } from '@navikt/fp-types';
import { dødsdatoAfterOrEqualFødselsdato, maxFodselsdato, minFodselsdato } from '@navikt/fp-utils';

import styles from './avklartBarnFieldArray.module.css';

const FIELD_ARRAY_NAME = 'avklartBarn';

export const defaultAntallBarn: FieldArrayRow = {
  fodselsdato: '',
  dodsdato: '',
  erRedigerbar: true,
};

type FieldArrayRow = AvklartBarn & {
  erRedigerbar?: boolean;
};

export type AvklarBarnFormValues = {
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
};

interface Props {
  readOnly: boolean;
}

export const AvklartBarnFieldArray = ({ readOnly }: Props) => {
  const intl = useIntl();

  const { control, watch, getValues } = useFormContext<AvklarBarnFormValues>();
  const { fields, remove, append } = useFieldArray({ control, name: FIELD_ARRAY_NAME });

  const avklartBarn = watch(FIELD_ARRAY_NAME);
  const today = dayjs().toDate();
  return (
    <div>
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
            <Table.HeaderCell>
              <FormattedMessage id="Label.Dodsdato" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => {
            const disabled = watch(`${FIELD_ARRAY_NAME}.${index}.erRedigerbar`) !== true;
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
                    name={`${FIELD_ARRAY_NAME}.${index}.fodselsdato`}
                    label={intl.formatMessage({ id: 'Label.Fodselsdato' })}
                    hideLabel
                    validate={[required, hasValidDate, dateAfterOrEqual(minFodselsdato()), dateBeforeOrEqualToToday]}
                    fromDate={minFodselsdato().toDate()}
                    toDate={maxFodselsdato().toDate()}
                    isReadOnly={readOnly}
                    disabled={disabled}
                  />
                </Table.DataCell>
                <Table.DataCell>
                  <Datepicker
                    size="medium"
                    name={`${FIELD_ARRAY_NAME}.${index}.dodsdato`}
                    label={intl.formatMessage({ id: 'Label.Dodsdato' })}
                    hideLabel
                    validate={[hasValidDate, dateBeforeOrEqualToToday, validerDødsdato(getValues, index)]}
                    toDate={today}
                    isReadOnly={readOnly}
                    disabled={disabled}
                  />
                </Table.DataCell>
                {avklartBarn.length > 1 && !(readOnly || disabled) && (
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
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {!readOnly && (
        <Button
          onClick={() => append(defaultAntallBarn)}
          type="button"
          variant="tertiary-neutral"
          icon={<PlusCircleIcon aria-hidden />}
          size="small"
        >
          {intl.formatMessage({ id: 'AvklartBarnFieldArray.LeggTilBarn' })}
        </Button>
      )}
    </div>
  );
};

AvklartBarnFieldArray.initialValues = (gjeldende: FødselGjeldende): AvklarBarnFormValues => ({
  avklartBarn:
    gjeldende.barn.length > 0
      ? gjeldende.barn.map(({ barn: { fødselsdato, dødsdato }, kilde }) => ({
          fodselsdato: fødselsdato,
          dodsdato: dødsdato ?? null,
          erRedigerbar: kilde !== 'FOLKEREGISTER',
        }))
      : lagBarn(gjeldende.antallBarn || 0),
});

AvklartBarnFieldArray.transformValues = (values: AvklarBarnFormValues) => ({
  uidentifiserteBarn: values.avklartBarn.map(ab => ({
    fodselsdato: ab.fodselsdato,
    dodsdato: ab.dodsdato === '' || ab.dodsdato === null ? undefined : ab.dodsdato,
  })),
});

const lagBarn = (antallBarnFraSoknad: number): FieldArrayRow[] => {
  const antallBarn = antallBarnFraSoknad > 0 ? antallBarnFraSoknad : 1;
  return Array(antallBarn).fill({
    fodselsdato: '',
    dodsdato: null,
    erRedigerbar: true,
  });
};

const validerDødsdato = (getValues: UseFormGetValues<AvklarBarnFormValues>, index: number) => (dødsdato: string) => {
  const fødselsdato = getValues(`${FIELD_ARRAY_NAME}.${index}.fodselsdato`);
  return dødsdatoAfterOrEqualFødselsdato(fødselsdato, dødsdato);
};

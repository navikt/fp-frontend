import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { Box, Button, HStack, Label } from '@navikt/ds-react';
import { Datepicker, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import type { AvklartBarn, FødselGjeldende } from '@navikt/fp-types';
import { dødsdatoAfterOrEqualFødselsdato, maxFodselsdato, minFodselsdato } from '@navikt/fp-utils';

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
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultAntallBarn}
      readOnly={readOnly}
      bodyText={intl.formatMessage({ id: 'AvklartBarnFieldArray.LeggTilBarn' })}
      shouldShowAddButton={avklartBarn.length < 5}
      remove={remove}
      append={append}
    >
      {(field, index) => {
        const disabled = watch(`${FIELD_ARRAY_NAME}.${index}.erRedigerbar`) !== true;
        return (
          <HStack gap="4" align="end" key={field.id} paddingBlock="2 0">
            {fields.length > 1 && (
              <Box paddingBlock="3">
                <Label size="medium">
                  <FormattedMessage id="Label.NummerertBarn" values={{ nummer: index + 1 }} />
                </Label>
              </Box>
            )}
            <Datepicker
              size="medium"
              name={`${FIELD_ARRAY_NAME}.${index}.fodselsdato`}
              label={intl.formatMessage({ id: 'Label.Fodselsdato' })}
              hideLabel={index > 0}
              validate={[required, hasValidDate, dateAfterOrEqual(minFodselsdato()), dateBeforeOrEqualToToday]}
              fromDate={minFodselsdato().toDate()}
              toDate={maxFodselsdato().toDate()}
              isReadOnly={readOnly}
              disabled={disabled}
            />
            <Datepicker
              size="medium"
              name={`${FIELD_ARRAY_NAME}.${index}.dodsdato`}
              label={intl.formatMessage({ id: 'Label.Dodsdato' })}
              hideLabel={index > 0}
              validate={[hasValidDate, dateBeforeOrEqualToToday, validerDødsdato(getValues, index)]}
              toDate={today}
              isReadOnly={readOnly}
              disabled={disabled}
            />
            {avklartBarn.length > 1 && !(readOnly || disabled) && (
              <div>
                <Button
                  size="medium"
                  type="button"
                  variant="tertiary-neutral"
                  icon={<TrashIcon />}
                  onClick={() => remove(index)}
                />
              </div>
            )}
          </HStack>
        );
      }}
    </PeriodFieldArray>
  );
};

AvklartBarnFieldArray.initialValues = (gjeldende: FødselGjeldende): AvklarBarnFormValues => ({
  avklartBarn:
    gjeldende.barn.length > 0
      ? gjeldende.barn.map(({ barn: { fødselsdato, dødsdato }, kanOverstyres }) => ({
          fodselsdato: fødselsdato,
          dodsdato: dødsdato ?? null,
          erRedigerbar: kanOverstyres,
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

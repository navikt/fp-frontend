import { useMemo } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { Datepicker, InputField, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, maxLength } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { FRILANS_NAME_PREFIX } from '../constants';
import type { FrilansFormValues } from '../types';

const getValue = (
  getValues: UseFormGetValues<FrilansFormValues>,
  fieldName: string,
  // @ts-expect-error Fiks
): string => getValues(fieldName);

const sortFomDates = (
  perioder: {
    periodeFom: string;
    periodeTom?: string;
  }[] = [],
) =>
  perioder
    .map(p => p.periodeFom)
    .filter(p => p && p !== '')
    .sort((periodeFom1, periodeFom2) => dayjs(periodeFom1, ISO_DATE_FORMAT).diff(dayjs(periodeFom2, ISO_DATE_FORMAT)));

const maxLength50 = maxLength(50);

const getValiderAtFomDatoErFørFørstePeriode =
  (getValues: UseFormGetValues<FrilansFormValues>, namePart1: string, sorterteFomDatoer: string[], intl: IntlShape) =>
  () => {
    const fomVerdi = getValue(getValues, `${namePart1}.fomDato`);
    if (sorterteFomDatoer.length > 0 && sorterteFomDatoer[0] && fomVerdi) {
      const isBefore = dayjs(sorterteFomDatoer[0]).isSameOrBefore(dayjs(fomVerdi));
      if (!isBefore) {
        return intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation' });
      }
    }
    return null;
  };

interface Props {
  readOnly: boolean;
}

/**
 * FrilansOppdragForFamilieFieldArray
 *
 * Viser inputfelter for fra og til dato for frilansperioder.
 */
export const FrilansOppdragForFamilieFieldArray = ({ readOnly }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    watch,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<FrilansFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `${FRILANS_NAME_PREFIX}.oppdragPerioder`,
  });

  const perioder = watch(`${FRILANS_NAME_PREFIX}.perioder`);
  const sorterteFomDatoer = useMemo(() => sortFomDates(perioder), [perioder]);

  return (
    <PeriodFieldArray
      bodyText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      fields={fields}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => {
        const namePart1 = `${FRILANS_NAME_PREFIX}.oppdragPerioder.${index}`;
        return (
          <HStack key={field.id} gap="4" paddingBlock="2" align="end">
            <Datepicker
              name={`${namePart1}.fomDato`}
              label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeFom' })}
              validate={[
                hasValidDate,
                getValiderAtFomDatoErFørFørstePeriode(getValues, namePart1, sorterteFomDatoer, intl),
                () => {
                  const fomVerdi = getValue(getValues, `${namePart1}.fomDato`);
                  const tomVerdi = getValue(getValues, `${namePart1}.tomDato`);
                  return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <Datepicker
              name={`${namePart1}.tomDato`}
              label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeTom' })}
              validate={[
                hasValidDate,
                () => {
                  const fomVerdi = getValue(getValues, `${namePart1}.fomDato`);
                  const tomVerdi = getValue(getValues, `${namePart1}.tomDato`);
                  return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <InputField
              name={`${namePart1}.oppdragsgiver`}
              validate={[maxLength50]}
              label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver' })}
            />
            {getRemoveButton && <div>{getRemoveButton()}</div>}
          </HStack>
        );
      }}
    </PeriodFieldArray>
  );
};

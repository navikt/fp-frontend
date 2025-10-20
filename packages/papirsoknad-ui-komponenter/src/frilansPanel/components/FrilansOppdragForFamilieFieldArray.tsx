import { useFieldArray, useFormContext } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfFieldArray, RhfTextField } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, maxLength } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { FRILANS_NAME_PREFIX } from '../constants';
import type { FrilansFormValues } from '../types';

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
  (sorterteFomDatoer: string[], intl: IntlShape, fomVerdi?: string) => () => {
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
  const sorterteFomDatoer = sortFomDates(perioder);

  return (
    <RhfFieldArray
      addButtonText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      fields={fields}
      readOnly={readOnly}
      append={append}
      remove={remove}
      emptyTemplate={{ fomDato: '', tomDato: '', oppdragsgiver: '' }}
    >
      {(field, index, removeButton) => {
        const namePart1 = `${FRILANS_NAME_PREFIX}.oppdragPerioder.${index}` as const;
        return (
          <HStack key={field.id} gap="space-8" align="end">
            <RhfDatepicker
              name={`${FRILANS_NAME_PREFIX}.oppdragPerioder.${index}.fomDato`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeFom' })}
              hideLabel={index > 0}
              validate={[
                hasValidDate,
                getValiderAtFomDatoErFørFørstePeriode(sorterteFomDatoer, intl, getValues(`${namePart1}.fomDato`)),
                () => {
                  const fomVerdi = getValues(`${namePart1}.fomDato`);
                  const tomVerdi = getValues(`${namePart1}.tomDato`);
                  return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <RhfDatepicker
              name={`${FRILANS_NAME_PREFIX}.oppdragPerioder.${index}.tomDato`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeTom' })}
              hideLabel={index > 0}
              validate={[
                hasValidDate,
                () => {
                  const fomVerdi = getValues(`${namePart1}.fomDato`);
                  const tomVerdi = getValues(`${namePart1}.tomDato`);
                  return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <RhfTextField
              name={`${FRILANS_NAME_PREFIX}.oppdragPerioder.${index}.oppdragsgiver`}
              control={control}
              validate={[maxLength50]}
              label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver' })}
              hideLabel={index > 0}
            />
            <div>{removeButton}</div>
          </HStack>
        );
      }}
    </RhfFieldArray>
  );
};

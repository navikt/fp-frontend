import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfFieldArray } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';

import { FRILANS_NAME_PREFIX } from '../constants';
import type { FrilansFormValues, FrilansSubFormValues } from '../types';

interface Props {
  readOnly: boolean;
}

/**
 * FrilansPerioderFieldArray
 *
 * Viser inputfelter for fra og til dato for frilansperioder
 */
export const FrilansPerioderFieldArray = ({ readOnly }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    formState: { isSubmitted },
    trigger,
  } = useFormContext<FrilansFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `${FRILANS_NAME_PREFIX}.perioder`,
  });

  return (
    <RhfFieldArray
      fields={fields}
      addButtonText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      emptyTemplate={{ periodeFom: '', periodeTom: '' }}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, removeButton) => {
        const namePart1 = `${FRILANS_NAME_PREFIX}.perioder.${index}` as const;
        return (
          <HStack key={field.id} gap="space-8" align="end">
            <RhfDatepicker
              name={`${FRILANS_NAME_PREFIX}.perioder.${index}.periodeFom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Frilans.periodeFom' })}
              hideLabel={index > 0}
              validate={[
                required,
                hasValidDate,
                () => {
                  const fomVerdi = getValues(`${namePart1}.periodeFom`);
                  const tomVerdi = getValues(`${namePart1}.periodeTom`);
                  return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <RhfDatepicker
              name={`${FRILANS_NAME_PREFIX}.perioder.${index}.periodeTom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Frilans.periodeTom' })}
              hideLabel={index > 0}
              validate={[
                required,
                hasValidDate,
                () => {
                  const fomVerdi = getValues(`${namePart1}.periodeFom`);
                  const tomVerdi = getValues(`${namePart1}.periodeTom`);
                  return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <div>{removeButton}</div>
          </HStack>
        );
      }}
    </RhfFieldArray>
  );
};

FrilansPerioderFieldArray.initialValues = (): FrilansSubFormValues => ({
  perioder: [{ periodeFom: '', periodeTom: '' }],
});

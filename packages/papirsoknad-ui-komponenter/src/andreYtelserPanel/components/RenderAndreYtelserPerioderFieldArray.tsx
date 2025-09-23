import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfFieldArray } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';

import { ANDRE_YTELSER_NAME_PREFIX, ANDRE_YTELSER_PERIODER_NAME } from '../constants';
import type { AndreYtelserFormValue } from '../types';

interface Props {
  readOnly: boolean;
  name: `${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`;
}

export const RenderAndreYtelserPerioderFieldArray = ({ readOnly, name }: Props) => {
  const intl = useIntl();
  const {
    getValues,
    control,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<AndreYtelserFormValue>();
  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });
  useEffect(() => {
    if (fields.length === 0) {
      append({ periodeFom: '', periodeTom: '' });
    }
  }, []);

  return (
    <RhfFieldArray
      fields={fields}
      addButtonText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      emptyTemplate={{ periodeFom: '', periodeTom: '' }}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, removeButton) => {
        const fieldNamePrefix = `${name}.${index}` as const;
        return (
          <HStack key={field.id} gap="space-8" align="end">
            <RhfDatepicker
              name={`${fieldNamePrefix}.periodeFom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeFom' })}
              hideLabel={index > 0}
              validate={[
                required,
                hasValidDate,
                () => {
                  const { periodeFom, periodeTom } = getValues(`${name}.${index}`);
                  return periodeTom && periodeFom ? dateBeforeOrEqual(periodeTom)(periodeFom) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            <RhfDatepicker
              name={`${name}.${index}.periodeTom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeTom' })}
              hideLabel={index > 0}
              validate={[
                required,
                hasValidDate,
                () => {
                  const { periodeFom, periodeTom } = getValues(`${name}.${index}`);
                  return periodeFom && periodeTom ? dateAfterOrEqual(periodeFom)(periodeTom) : null;
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

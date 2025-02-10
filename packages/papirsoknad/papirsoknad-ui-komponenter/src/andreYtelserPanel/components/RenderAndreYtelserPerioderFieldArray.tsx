import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { Button, HStack } from '@navikt/ds-react';
import { Datepicker, PeriodFieldArray } from '@navikt/ft-form-hooks';
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
    <PeriodFieldArray
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index) => {
        const fieldNamePrefix = `${name}.${index}` as const;
        return (
          <HStack key={field.id} gap="2">
            <Datepicker
              name={`${fieldNamePrefix}.periodeFom`}
              label={index === 0 ? intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeFom' }) : ''}
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

            <Datepicker
              name={`${name}.${index}.periodeTom`}
              label={index === 0 ? intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeTom' }) : ''}
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
            {!readOnly && index > 0 && (
              <div>
                <Button
                  size="small"
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

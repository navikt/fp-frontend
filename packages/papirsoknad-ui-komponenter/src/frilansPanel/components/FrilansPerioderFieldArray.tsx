import React from 'react';
import { useIntl } from 'react-intl';
import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import { Datepicker, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { required, hasValidDate, dateBeforeOrEqual, dateAfterOrEqual } from '@navikt/ft-form-validators';

import { FrilansFormValues, FrilansSubFormValues } from '../types';

import { FRILANS_NAME_PREFIX } from '../constants';
import { HStack } from '@navikt/ds-react';

const getValue = (
  getValues: UseFormGetValues<FrilansFormValues>,
  fieldName: string,
  // @ts-ignore
): string => getValues(fieldName);

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
    <PeriodFieldArray
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => {
        const namePart1 = `${FRILANS_NAME_PREFIX}.perioder.${index}`;
        return (
          <HStack key={field.id} gap="4" paddingBlock="2">
            <Datepicker
              name={`${namePart1}.periodeFom`}
              label={index === 0 ? intl.formatMessage({ id: 'Registrering.Frilans.periodeFom' }) : ''}
              validate={[
                required,
                hasValidDate,
                () => {
                  const fomVerdi = getValue(getValues, `${namePart1}.periodeFom`);
                  const tomVerdi = getValue(getValues, `${namePart1}.periodeTom`);
                  return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <Datepicker
              name={`${namePart1}.periodeTom`}
              label={index === 0 ? intl.formatMessage({ id: 'Registrering.Frilans.periodeTom' }) : ''}
              validate={[
                required,
                hasValidDate,
                () => {
                  const fomVerdi = getValue(getValues, `${namePart1}.periodeFom`);
                  const tomVerdi = getValue(getValues, `${namePart1}.periodeTom`);
                  return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                },
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            {getRemoveButton && <div>{getRemoveButton()}</div>}
          </HStack>
        );
      }}
    </PeriodFieldArray>
  );
};

FrilansPerioderFieldArray.initialValues = (): FrilansSubFormValues => ({
  perioder: [{ periodeFom: '', periodeTom: '' }],
});

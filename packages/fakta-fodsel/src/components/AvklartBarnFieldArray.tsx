import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { Datepicker, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import type { AvklartBarn } from '@navikt/fp-types';

const FIELD_ARRAY_NAME = 'avklartBarn';

export const defaultAntallBarn = {
  fodselsdato: undefined,
  dodsdato: undefined,
};

interface Props {
  readOnly: boolean;
}

export const AvklartBarnFieldArray = ({ readOnly }: Props) => {
  const intl = useIntl();

  const { control, watch } = useFormContext<{ avklartBarn: AvklartBarn[] }>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  const avklartBarn = watch('avklartBarn');

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultAntallBarn}
      readOnly={readOnly}
      bodyText={intl.formatMessage({ id: 'AvklartBarnFieldArray.LeggTilBarn' })}
      shouldShowAddButton={avklartBarn.length < 9}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton = () => '-') => (
        <React.Fragment key={field.id}>
          <VerticalSpacer sixteenPx />
          <HStack gap="4" align="end">
            <Datepicker
              name={`${FIELD_ARRAY_NAME}.${index}.fodselsdato`}
              label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Title' })}
              validate={[hasValidDate, required, dateBeforeOrEqualToToday]}
              isReadOnly={readOnly}
            />
            <Datepicker
              name={`${FIELD_ARRAY_NAME}.${index}.dodsdato`}
              label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Dodsdato' })}
              validate={[hasValidDate, dateBeforeOrEqualToToday]}
              isReadOnly={readOnly}
            />
            {!readOnly && getRemoveButton()}
          </HStack>
        </React.Fragment>
      )}
    </PeriodFieldArray>
  );
};

import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, VStack } from '@navikt/ds-react';
import { Datepicker, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';

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

  const avklartBarn = watch(FIELD_ARRAY_NAME);

  return (
    <VStack paddingBlock="3">
      <PeriodFieldArray
        fields={fields}
        emptyPeriodTemplate={defaultAntallBarn}
        readOnly={readOnly}
        titleText={intl.formatMessage({ id: 'AvklartBarnFieldArray.FyllInnDokumenterteOpplysninger' })}
        bodyText={intl.formatMessage({ id: 'AvklartBarnFieldArray.LeggTilBarn' })}
        shouldShowAddButton={avklartBarn.length < 9}
        remove={remove}
        append={append}
      >
        {(field, index) => (
          <HStack gap="4" align="center" key={field.id} paddingBlock="2 0">
            {fields.length > 1 && <BodyShort size="medium">Barn {index + 1}:</BodyShort>}
            <Datepicker
              size="medium"
              name={`${FIELD_ARRAY_NAME}.${index}.fodselsdato`}
              label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Title' })}
              validate={[hasValidDate, required, dateBeforeOrEqualToToday]}
              isReadOnly={readOnly}
            />
            <Datepicker
              size="medium"
              name={`${FIELD_ARRAY_NAME}.${index}.dodsdato`}
              label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Dodsdato' })}
              validate={[hasValidDate, dateBeforeOrEqualToToday]}
              isReadOnly={readOnly}
            />
            {!readOnly && avklartBarn.length > 1 && (
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
        )}
      </PeriodFieldArray>
    </VStack>
  );
};

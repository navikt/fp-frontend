import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { hasValidDate, required, dateBeforeOrEqualToToday } from '@fpsak-frontend/utils';
import { AvklartBarn } from '@fpsak-frontend/types';
import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, PeriodFieldArray } from '@fpsak-frontend/form-hooks';

const FIELD_ARRAY_NAME = 'avklartBarn';

type FIELD_ARRAY_TYPE = {
  fodselsdato?: string;
  dodsdato?: string;
  id: string;
};

export const defaultAntallBarn = {
  fodselsdato: undefined,
  dodsdato: undefined,
};

interface OwnProps {
  readOnly: boolean;
}

export const AvklartBarnFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const { control, watch } = useFormContext<{ avklartBarn: AvklartBarn[] }>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  const avklartBarn = watch('avklartBarn');

  return (
    <PeriodFieldArray<FIELD_ARRAY_TYPE>
      fields={fields}
      emptyPeriodTemplate={defaultAntallBarn}
      readOnly={readOnly}
      bodyText={intl.formatMessage({ id: 'AvklartBarnFieldArray.LeggTilBarn' })}
      shouldShowAddButton={avklartBarn.length < 9}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => (
        <Row key={field.id}>
          <Column xs="12">
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <DatepickerField
                    name={`${FIELD_ARRAY_NAME}.${index}.fodselsdato`}
                    label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Title' })}
                    validate={[hasValidDate, required, dateBeforeOrEqualToToday]}
                    readOnly={readOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    name={`${FIELD_ARRAY_NAME}.${index}.dodsdato`}
                    label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Dodsdato' })}
                    validate={[hasValidDate, dateBeforeOrEqualToToday]}
                    readOnly={readOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  {getRemoveButton()}
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

export default AvklartBarnFieldArray;

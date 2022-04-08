import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { useIntl } from 'react-intl';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { hasValidDate, required, dateBeforeOrEqualToToday } from '@navikt/ft-utils';
import { AvklartBarn } from '@fpsak-frontend/types';
import { Datepicker, PeriodFieldArray, formHooks } from '@navikt/ft-form-hooks';

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

  const { control, watch } = formHooks.useFormContext<{ avklartBarn: AvklartBarn[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
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
                  <Datepicker
                    name={`${FIELD_ARRAY_NAME}.${index}.fodselsdato`}
                    label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Title' })}
                    validate={[hasValidDate, required, dateBeforeOrEqualToToday]}
                    isReadOnly={readOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${FIELD_ARRAY_NAME}.${index}.dodsdato`}
                    label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Dodsdato' })}
                    validate={[hasValidDate, dateBeforeOrEqualToToday]}
                    isReadOnly={readOnly}
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

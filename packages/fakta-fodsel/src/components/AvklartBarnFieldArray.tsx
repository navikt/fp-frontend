import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { hasValidDate, required, dateBeforeOrEqualToToday } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { CheckboxField, DatepickerField, PeriodFieldArray } from '@fpsak-frontend/form-hooks';

import styles from './avklartBarnFieldArray.less';

const FIELD_ARRAY_NAME = 'avklartBarn';

type FIELD_ARRAY_TYPE = {
  fodselsdato: string;
  isBarnDodt: boolean;
  dodsDato: string;
};

export const defaultAntallBarn = {
  fodselsdato: undefined,
  isBarnDodt: false,
  dodsDato: undefined,
};

interface OwnProps {
  readOnly: boolean;
}

export const AvklartBarnFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const { control, watch } = useFormContext();
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
                  <CheckboxField
                    className={styles.registerBarnCheckbox}
                    name={`${FIELD_ARRAY_NAME}.${index}.isBarnDodt`}
                    label={intl.formatMessage({ id: 'AvklartBarnFieldArray.ErBarnetDott' })}
                    disabled={readOnly}
                  />
                </FlexColumn>
                {avklartBarn[index].dodsdato && (
                  <FlexColumn>
                    <span>{avklartBarn[index].dod}</span>
                    <DatepickerField
                      name={`${FIELD_ARRAY_NAME}.${index}.dodsdato`}
                      label={intl.formatMessage({ id: 'AvklartBarnFieldArray.Dodsdato' })}
                      validate={[hasValidDate, dateBeforeOrEqualToToday]}
                      readOnly={readOnly}
                    />
                  </FlexColumn>
                )}
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

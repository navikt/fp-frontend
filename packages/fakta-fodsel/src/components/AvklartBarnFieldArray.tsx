import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { hasValidDate, required, dateBeforeOrEqualToToday } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { CheckboxField, DatepickerField } from '@fpsak-frontend/form';
import { FamilieHendelse } from '@fpsak-frontend/types';

import styles from './avklartBarnFieldArray.less';

export const defaultAntallBarn = {
  fodselsdato: '',
  isBarnDodt: false,
  dodsDato: '',
};

interface OwnProps {
  fields: FieldArrayFieldsProps<{ arbeidsgiver: string }>;
  meta?: FieldArrayMetaProps;
  readOnly: boolean;
  avklartBarn?: FamilieHendelse['avklartBarn'];
}

export const AvklartBarnFieldArray: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  readOnly,
  avklartBarn,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    emptyPeriodTemplate={defaultAntallBarn}
    readOnly={readOnly}
    bodyText={intl.formatMessage({ id: 'AvklartBarnFieldArray.LeggTilBarn' })}
    shouldShowAddButton={avklartBarn.length < 9}
  >
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
        <Column xs="12">
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.fodselsdato`}
                  label={{ id: 'AvklartBarnFieldArray.Title' }}
                  validate={[hasValidDate, required, dateBeforeOrEqualToToday]}
                  readOnly={readOnly}
                />
              </FlexColumn>
              <FlexColumn>
                <CheckboxField
                  className={styles.registerBarnCheckbox}
                  name={`${periodeElementFieldId}.isBarnDodt`}
                  label={{ id: 'AvklartBarnFieldArray.ErBarnetDott' }}
                  disabled={readOnly}
                />
              </FlexColumn>
              {avklartBarn[index].dodsdato
              && (
              <FlexColumn>
                <span>{periodeElementFieldId.dod}</span>
                <DatepickerField
                  name={`${periodeElementFieldId}.dodsdato`}
                  label={{ id: 'AvklartBarnFieldArray.Dodsdato' }}
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

export default injectIntl(AvklartBarnFieldArray);

import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

import { DatepickerField, PeriodFieldArray } from '@fpsak-frontend/form';
import {
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';

type Periode = {
  periodeFom: string;
  periodeTom: string;
}

const showAddButton = (fields: FieldArrayFieldsProps<Periode>): boolean => {
  if (fields.length > 0) {
    return (fields.get(fields.length - 1).periodeFom !== undefined && fields.get(fields.length - 1).periodeTom !== undefined);
  }
  return false;
};

interface OwnProps {
  readOnly: boolean;
  meta: FieldArrayMetaProps;
  fields: FieldArrayFieldsProps<Periode>;
}

const IkkeOmsorgPeriodeField: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  readOnly,
}) => (
  <div>
    <FormattedMessage id="IkkeOmsorgPeriodeField.Periode" />
    <PeriodFieldArray
      fields={fields}
      meta={meta}
      bodyText={intl.formatMessage({ id: 'IkkeOmsorgPeriodeField.Add' })}
      shouldShowAddButton={!readOnly && showAddButton(fields)}
      createAddButtonInsteadOfImageLink
      readOnly={readOnly}
    >
      {(ikkeOmsorgElementFieldId, index, getRemoveButton) => (
        <Row key={ikkeOmsorgElementFieldId}>
          <Column xs="5">
            <DatepickerField
              name={`${ikkeOmsorgElementFieldId}.periodeFom`}
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
          </Column>
          <Column xs="5">
            <DatepickerField
              name={`${ikkeOmsorgElementFieldId}.periodeTom`}
              validate={[hasValidDate]}
              readOnly={readOnly}
            />
          </Column>
          {!readOnly && (
            <Column xs="2">
              {getRemoveButton()}
            </Column>
          )}
        </Row>
      )}
    </PeriodFieldArray>
  </div>
);

export default injectIntl(IkkeOmsorgPeriodeField);

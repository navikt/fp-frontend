import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';

import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { DatepickerField } from '@fpsak-frontend/form';
import {
  dateIsAfter,
  dateRangesNotOverlapping,
  dateRangesOverlappingMessage,
  hasValidDate,
  invalidPeriodMessage,
  isObjectEmpty,
  required,
} from '@fpsak-frontend/utils';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';

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

interface StaticFunctions {
  validate?: (values: { omsorg: any, ikkeOmsorgPerioder: any }) => any,
}

const IkkeOmsorgPeriodeField: FunctionComponent<OwnProps> & StaticFunctions = ({
  fields,
  meta,
  readOnly,
}) => (
  <div>
    <FormattedMessage id="IkkeOmsorgPeriodeField.Periode" />
    <PeriodFieldArray
      fields={fields}
      meta={meta}
      textCode="IkkeOmsorgPeriodeField.Add"
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

const hasValue = (values: Periode[]): boolean => values && values.length && values.length < 2 && !values[0].periodeTom;

const checkArrayErrors = (values: Periode[]) => values.map(({
  periodeFom,
  periodeTom,
}: any, index: any) => {
  if (isObjectEmpty(periodeFom) && isObjectEmpty(periodeTom)) {
    return null;
  }
  let periodeFomError = required(periodeFom);
  if (periodeTom) {
    periodeFomError = moment(periodeFom).isSameOrBefore(moment(periodeTom).startOf('day')) ? null : invalidPeriodMessage();
  }
  let periodeTomError;
  if (values.length > index + 1) {
    periodeTomError = required(periodeTom);
  }
  if (periodeFomError || periodeTomError) {
    return {
      periodeFom: periodeFomError,
      periodeTom: periodeTomError,
    };
  }
  return null;
});

const checkOverlapError = (values: any) => dateRangesNotOverlapping(values.reduce((result: any, current: any) => {
  if (current.periodeTom && current.periodeFom) {
    result.push([current.periodeFom, current.periodeTom]);
  }
  return result;
}, []));

const hasValidPeriodOrOnlyStartDate = (values: Periode[]) => {
  if (hasValue(values)) {
    return null;
  }

  const arrayErrors = checkArrayErrors(values);

  if (arrayErrors.some((errors: any) => errors !== null)) {
    return arrayErrors;
  }
  if (values.length > 1) {
    let overlapError = checkOverlapError(values);

    const lastEntry = values[values.length - 1];
    if (!overlapError && lastEntry.periodeFom && !lastEntry.periodeTom) {
      const arrayWithoutLast = values.slice(0, values.length - 1);
      overlapError = arrayWithoutLast.some((date: any) => dateIsAfter(date.periodeFom, lastEntry.periodeFom)
        || dateIsAfter(date.periodeTom, lastEntry.periodeFom))
        ? dateRangesOverlappingMessage() : null;
    }
    if (overlapError) {
      return { _error: overlapError };
    }
  }
  return null;
};

IkkeOmsorgPeriodeField.validate = (values: { omsorg: any, ikkeOmsorgPerioder: any }) => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { omsorg, ikkeOmsorgPerioder } = values;
  if (omsorg === false) {
    return {
      ikkeOmsorgPerioder: hasValidPeriodOrOnlyStartDate(ikkeOmsorgPerioder),
    };
  }
  return errors;
};

export default IkkeOmsorgPeriodeField;

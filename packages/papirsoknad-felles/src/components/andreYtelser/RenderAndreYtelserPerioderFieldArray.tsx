import React from 'react';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';

import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField } from '@fpsak-frontend/form';
import {
  dateAfterOrEqual, hasValidDate, ISO_DATE_FORMAT, isRequiredMessage, required,
} from '@fpsak-frontend/utils';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './renderAndreYtelserPerioderFi... Remove this comment to see the full error message
import styles from './renderAndreYtelserPerioderFieldArray.less';

type Props = {
    fields: {};
    meta: {};
    readOnly: boolean;
};

/**
 *  RenderAndreYtelserPerioderFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for fra og til dato for perioder for andre ytelser
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderAndreYtelserPerioderFieldArray = ({ fields, meta, readOnly }: Props) => (
  // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
  <PeriodFieldArray fields={fields} meta={meta} readOnly={readOnly}>
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'. */}
        <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.periodeFom`}
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                  defaultValue={null}
                  label={index === 0 ? { id: 'Registrering.AndreYtelser.periodeFom' } : ''}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.periodeTom`}
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                  defaultValue={null}
                  label={index === 0 ? { id: 'Registrering.AndreYtelser.periodeTom' } : ''}
                />
              </FlexColumn>
              <FlexColumn>
                {/* @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message */}
                {getRemoveButton()}
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Column>
      </Row>
    )}
  </PeriodFieldArray>
);

RenderAndreYtelserPerioderFieldArray.validate = (values: any) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }

  const arrayErrors = values.map(({
    periodeFom,
    periodeTom,
  }: any) => {
    const periodeFomDate = moment(periodeFom, ISO_DATE_FORMAT);
    const periodeTomDate = moment(periodeTom, ISO_DATE_FORMAT);
    const periodeFomError = required(periodeFom) || hasValidDate(periodeFom);
    let periodeTomError = required(periodeTom) || hasValidDate(periodeTom);

    if (!periodeFomError && !periodeTomError) {
      periodeTomError = dateAfterOrEqual(periodeFomDate)(periodeTomDate);
    }
    if (periodeFomError || periodeTomError) {
      return {
        periodeFom: periodeFomError,
        periodeTom: periodeTomError,
      };
    }
    return null;
  });

  if (arrayErrors.some((errors: any) => errors !== null)) {
    return arrayErrors;
  }
  return null;
};

RenderAndreYtelserPerioderFieldArray.transformValues = (values: any, ytelseType: any) => values.map((ytelsePeriode: any) => ({
  ytelseType,
  periodeFom: ytelsePeriode.periodeFom,
  periodeTom: ytelsePeriode.periodeTom,
}));

export default RenderAndreYtelserPerioderFieldArray;

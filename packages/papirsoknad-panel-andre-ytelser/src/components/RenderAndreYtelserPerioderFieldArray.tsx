import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { DatepickerField, PeriodFieldArray } from '@fpsak-frontend/form';
import {
  dateAfterOrEqual, hasValidDate, ISO_DATE_FORMAT, isRequiredMessage, required,
} from '@navikt/ft-utils';

import styles from './renderAndreYtelserPerioderFieldArray.less';

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  readOnly: boolean;
}

export type FormValues = {
  periodeFom: string;
  periodeTom: string;
}

interface StaticFunctions {
  validate?: (values: FormValues[]) => any,
  transformValues: (values: FormValues[], ytelseType: string) => {
    ytelseType: string;
    periodeFom: string;
    periodeTom: string;
  }[];
}

/**
 *  RenderAndreYtelserPerioderFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for fra og til dato for perioder for andre ytelser
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderAndreYtelserPerioderFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  fields,
  meta,
  readOnly,
}) => (
  <PeriodFieldArray fields={fields} meta={meta} readOnly={readOnly}>
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
        <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.periodeFom`}
                  label={index === 0 ? { id: 'Registrering.AndreYtelser.periodeFom' } : ''}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.periodeTom`}
                  label={index === 0 ? { id: 'Registrering.AndreYtelser.periodeTom' } : ''}
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

RenderAndreYtelserPerioderFieldArray.validate = (values: FormValues[]): any => {
  // eslint-disable-next-line react/destructuring-assignment
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }

  // eslint-disable-next-line react/destructuring-assignment
  const arrayErrors = values.map(({
    periodeFom,
    periodeTom,
  }) => {
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

  if (arrayErrors.some((errors) => errors !== null)) {
    return arrayErrors;
  }
  return null;
};

RenderAndreYtelserPerioderFieldArray.transformValues = (values: FormValues[], ytelseType: string): any => values.map((ytelsePeriode) => ({
  ytelseType,
  periodeFom: ytelsePeriode.periodeFom,
  periodeTom: ytelsePeriode.periodeTom,
}));

export default RenderAndreYtelserPerioderFieldArray;

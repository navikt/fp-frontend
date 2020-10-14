import React from 'react';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';

import {
  dateAfterOrEqual, hasValidDate, isArrayEmpty, ISO_DATE_FORMAT, maxLength, required,
} from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, InputField } from '@fpsak-frontend/form';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './renderInntektsgivendeArbeidF... Remove this comment to see the full error message
import styles from './renderInntektsgivendeArbeidFieldArray.less';

const maxLength50 = maxLength(50);

const defaultInntektsgivendeArbeidAmbassade = {
  arbeidsgiver: '',
  periodeFom: '',
  periodeTom: '',
};

type Props = {
    fields: {};
    readOnly: boolean;
    meta: {};
};

/**
 *  RenderInntektsgivendeArbeidAmbassadFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold som ambassadpersonell.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderInntektsgivendeArbeidAmbassadeFieldArray = ({ fields, meta, readOnly }: Props) => (
  <PeriodFieldArray
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    fields={fields}
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    meta={meta}
    emptyPeriodTemplate={defaultInntektsgivendeArbeidAmbassade}
    textCode="Registrering.InntektsgivendeArbeid.LeggTilArbeidAmbassade"
    readOnly={readOnly}
  >
    {(ambassadeElementFieldId, index, getRemoveButton) => (
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'.
      <Row key={ambassadeElementFieldId} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
        <Column xs="12">
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <InputField
                  readOnly={readOnly}
                  name={`${ambassadeElementFieldId}.arbeidsgiver`}
                  label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.Arbeidsgiver' } : ''}
                  bredde="XXL"
                  // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
                  validate={[maxLength50]}
                  maxLength={99}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  readOnly={readOnly}
                  name={`${ambassadeElementFieldId}.periodeFom`}
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                  defaultValue={null}
                  label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.periodeFom' } : ''}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  readOnly={readOnly}
                  name={`${ambassadeElementFieldId}.periodeTom`}
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                  defaultValue={null}
                  label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.periodeTom' } : ''}
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

RenderInntektsgivendeArbeidAmbassadeFieldArray.validate = (values: any) => {
  if (!values) {
    return null;
  }
  const arrayErrors = values.map(({
    arbeidsgiver,
    periodeFom,
    periodeTom,
  }: any) => {
    const periodeFomDate = moment(periodeFom, ISO_DATE_FORMAT);
    const periodeTomDate = moment(periodeTom, ISO_DATE_FORMAT);
    const periodeFomError = arbeidsgiver ? (required(periodeFom) || hasValidDate(periodeFom)) : hasValidDate(periodeFom);
    let periodeTomError = hasValidDate(periodeTom);

    if (!periodeFomError) {
      periodeTomError = periodeTom ? (periodeTomError || dateAfterOrEqual(periodeFomDate)(periodeTomDate)) : periodeTomError;
    }
    if ((periodeFomError || periodeTomError)) {
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

  if (isArrayEmpty(values)) {
    return null;
  }

  return null;
};

export default RenderInntektsgivendeArbeidAmbassadeFieldArray;

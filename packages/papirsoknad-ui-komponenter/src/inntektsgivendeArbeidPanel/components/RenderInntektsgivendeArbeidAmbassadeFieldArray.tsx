import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { maxLength } from '@navikt/ft-form-validators';
import {
  formHooks, Datepicker, InputField, PeriodFieldArray,
} from '@navikt/ft-form-hooks';

import styles from './renderInntektsgivendeArbeidFieldArray.less';

const maxLength50 = maxLength(50);

export const RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY = 'ambassadearbeidsforhold';

export type FormValues = {
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
}

const defaultInntektsgivendeArbeidAmbassade: FormValues = {
  arbeidsgiver: '',
  periodeFom: '',
  periodeTom: '',
};

interface OwnProps {
  readOnly: boolean;
}

/**
 *  RenderInntektsgivendeArbeidAmbassadFieldArray
 *
 * Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold som ambassadpersonell.
 */
export const RenderInntektsgivendeArbeidAmbassadeFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]: FormValues[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY,
  });

  return (
    <PeriodFieldArray<FormValues>
      fields={fields}
      emptyPeriodTemplate={defaultInntektsgivendeArbeidAmbassade}
      bodyText={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.LeggTilArbeidAmbassade' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(ambassadeElementFieldId, index, getRemoveButton) => (
        <Row key={ambassadeElementFieldId} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <Column xs="12">
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <InputField
                    readOnly={readOnly}
                    name={`${ambassadeElementFieldId}.arbeidsgiver`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Arbeidsgiver' }) : ''}
                    bredde="XXL"
                    validate={[maxLength50]}
                    maxLength={99}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    isReadOnly={readOnly}
                    name={`${ambassadeElementFieldId}.periodeFom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeFom' }) : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    isReadOnly={readOnly}
                    name={`${ambassadeElementFieldId}.periodeTom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeTom' }) : ''}
                  />
                </FlexColumn>
                {getRemoveButton && (
                  <FlexColumn>
                    {getRemoveButton()}
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

/*
RenderInntektsgivendeArbeidAmbassadeFieldArray.validate = (values) => {
  if (!values) {
    return null;
  }
  // eslint-disable-next-line react/destructuring-assignment
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

  if (arrayErrors.some((errors) => errors !== null)) {
    return arrayErrors;
  }

  if (isArrayEmpty(values)) {
    return null;
  }

  return null;
};
*/

export default RenderInntektsgivendeArbeidAmbassadeFieldArray;

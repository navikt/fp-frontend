import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { Datepicker, formHooks, PeriodFieldArray } from '@navikt/ft-form-hooks';

import styles from './renderAndreYtelserPerioderFieldArray.less';

export const ANDRE_YTELSER_NAME_PREFIX = 'andreYtelser';

export const ANDRE_YTELSER_PERIODE_SUFFIX = 'PERIODER';

export type FormValues = {
  periodeFom: string;
  periodeTom: string;
}

interface OwnProps {
  readOnly: boolean;
  name: string;
}

interface StaticFunctions {
  transformValues: (values: FormValues[], ytelseType: string) => {
    ytelseType: string;
    periodeFom: string;
    periodeTom: string;
  }[];
}

/**
 *  RenderAndreYtelserPerioderFieldArray
 *
 * Viser inputfelter for fra og til dato for perioder for andre ytelser
 */
const RenderAndreYtelserPerioderFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  name,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [ANDRE_YTELSER_NAME_PREFIX]: FormValues}>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${ANDRE_YTELSER_NAME_PREFIX}.${name}`,
  });

  return (
    <PeriodFieldArray
      fields={fields}
      bodyText=""
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(periodeElementFieldId, index, getRemoveButton) => (
        <Row key={periodeElementFieldId}>
          <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name={`${ANDRE_YTELSER_NAME_PREFIX}.${name}.${periodeElementFieldId}.periodeFom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeFom' }) : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${ANDRE_YTELSER_NAME_PREFIX}.${name}.${periodeElementFieldId}.periodeTom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeTom' }) : ''}
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

/*
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
*/

RenderAndreYtelserPerioderFieldArray.transformValues = (values: FormValues[], ytelseType: string): any => values.map((ytelsePeriode) => ({
  ytelseType,
  periodeFom: ytelsePeriode.periodeFom,
  periodeTom: ytelsePeriode.periodeTom,
}));

export default RenderAndreYtelserPerioderFieldArray;

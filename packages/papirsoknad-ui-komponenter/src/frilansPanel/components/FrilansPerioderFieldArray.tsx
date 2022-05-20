import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  dateAfterOrEqual, hasValidDate, required,
} from '@navikt/ft-form-validators';
import { DatepickerField, formHooks, PeriodFieldArray } from '@navikt/ft-form-hooks';

import styles from './frilansPerioderFieldArray.less';

interface OwnProps {
  readOnly: boolean;
}

export type FormValues = {
  periodeFom: string;
  periodeTom?: string;
}

interface StaticFunctions {
  validate: (values: FormValues[]) => {
    periodeFom: any;
    periodeTom: any;
  }[] | null,
}

/**
 *  FrilansPerioderFieldArray
 *
 * Viser inputfelter for fra og til dato for frilansperioder
 */
const FrilansPerioderFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
}) => {
  const { control } = formHooks.useFormContext<{ fremtidigeOppholdUtenlands: FormValues[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: 'fremtidigeOppholdUtenlands',
  });

  return (
    <PeriodFieldArray<FormValues>
      fields={fields}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(periodeElementFieldId, index, getRemoveButton) => (
        <Row key={periodeElementFieldId}>
          <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <DatepickerField
                    name={`${periodeElementFieldId}.periodeFom`}
                    label={index === 0 ? { id: 'Registrering.Frilans.periodeFom' } : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    name={`${periodeElementFieldId}.periodeTom`}
                    label={index === 0 ? { id: 'Registrering.Frilans.periodeTom' } : ''}
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

FrilansPerioderFieldArray.validate = (values: FormValues[] = []): any => {
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

export default FrilansPerioderFieldArray;

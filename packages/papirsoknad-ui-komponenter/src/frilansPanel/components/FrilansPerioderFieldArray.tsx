import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { Datepicker, formHooks, PeriodFieldArray } from '@navikt/ft-form-hooks';

import styles from './frilansPerioderFieldArray.less';

const FRILANS_NAME_PREFIX = 'frilans';

export type FormValues = {
  perioder: {
    periodeFom: string;
    periodeTom?: string;
  }[],
};

interface OwnProps {
  readOnly: boolean;
}

/**
 *  FrilansPerioderFieldArray
 *
 * Viser inputfelter for fra og til dato for frilansperioder
 */
const FrilansPerioderFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [FRILANS_NAME_PREFIX]: FormValues}>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${FRILANS_NAME_PREFIX}.perioder`,
  });

  return (
    <PeriodFieldArray
      fields={fields}
      bodyText=""
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
                  <Datepicker
                    name={`${FRILANS_NAME_PREFIX}.perioder.${periodeElementFieldId}.periodeFom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Frilans.periodeFom' }) : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${FRILANS_NAME_PREFIX}.perioder.${periodeElementFieldId}.periodeTom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Frilans.periodeTom' }) : ''}
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
*/

export default FrilansPerioderFieldArray;

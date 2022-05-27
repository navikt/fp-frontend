import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import { Column, Row } from 'nav-frontend-grid';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Datepicker, formHooks, PeriodFieldArray } from '@navikt/ft-form-hooks';
import {
  required, hasValidDate, dateBeforeOrEqual, dateAfterOrEqual,
} from '@navikt/ft-form-validators';

import styles from './frilansPerioderFieldArray.less';

const FRILANS_NAME_PREFIX = 'frilans';

export type FormValues = {
  perioder: {
    periodeFom: string;
    periodeTom?: string;
  }[],
};

const getValue = (
  getValues: UseFormGetValues<{ [FRILANS_NAME_PREFIX]: FormValues}>,
  fieldName: string,
// @ts-ignore
): string => getValues(fieldName);

interface OwnProps {
  readOnly: boolean;
}

/**
 * FrilansPerioderFieldArray
 *
 * Viser inputfelter for fra og til dato for frilansperioder
 */
const FrilansPerioderFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const {
    control, getValues, formState: { isSubmitted }, trigger,
  } = formHooks.useFormContext<{ [FRILANS_NAME_PREFIX]: FormValues}>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${FRILANS_NAME_PREFIX}.perioder`,
  });

  return (
    <PeriodFieldArray
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => {
        const namePart1 = `${FRILANS_NAME_PREFIX}.perioder.${index}`;
        return (
          <div key={field.id}>
            <Row>
              <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <Datepicker
                        name={`${namePart1}.periodeFom`}
                        label={index === 0 ? intl.formatMessage({ id: 'Registrering.Frilans.periodeFom' }) : ''}
                        validate={[
                          required,
                          hasValidDate,
                          () => {
                            const fomVerdi = getValue(getValues, `${namePart1}.periodeFom`);
                            const tomVerdi = getValue(getValues, `${namePart1}.periodeTom`);
                            return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                          },
                        ]}
                        onChange={() => (isSubmitted ? trigger() : undefined)}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <Datepicker
                        name={`${namePart1}.periodeTom`}
                        label={index === 0 ? intl.formatMessage({ id: 'Registrering.Frilans.periodeTom' }) : ''}
                        validate={[
                          required,
                          hasValidDate,
                          () => {
                            const fomVerdi = getValue(getValues, `${namePart1}.periodeFom`);
                            const tomVerdi = getValue(getValues, `${namePart1}.periodeTom`);
                            return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                          },
                        ]}
                        onChange={() => (isSubmitted ? trigger() : undefined)}
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
            <VerticalSpacer sixteenPx />
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

export default FrilansPerioderFieldArray;

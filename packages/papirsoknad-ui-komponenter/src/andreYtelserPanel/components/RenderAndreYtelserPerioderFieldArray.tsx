import React from 'react';
import { useIntl } from 'react-intl';
import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Datepicker, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { required, hasValidDate, dateAfterOrEqual, dateBeforeOrEqual } from '@navikt/ft-form-validators';

import styles from './renderAndreYtelserPerioderFieldArray.module.css';

export const ANDRE_YTELSER_NAME_PREFIX = 'andreYtelser';

export const ANDRE_YTELSER_PERIODE_SUFFIX = 'PERIODER';

export type FormValues = {
  periodeFom: string;
  periodeTom: string;
};

export type TransformValues = {
  ytelseType: string;
  periodeFom: string;
  periodeTom: string;
};

const getValue = (
  getValues: UseFormGetValues<{ [ANDRE_YTELSER_NAME_PREFIX]: FormValues }>,
  fieldName: string,
  // @ts-ignore
): string => getValues(fieldName);

interface Props {
  readOnly: boolean;
  name: string;
}

/**
 * RenderAndreYtelserPerioderFieldArray
 *
 * Viser inputfelter for fra og til dato for perioder for andre ytelser
 */
export const RenderAndreYtelserPerioderFieldArray = ({ readOnly, name }: Props) => {
  const intl = useIntl();

  const {
    getValues,
    control,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<{ [ANDRE_YTELSER_NAME_PREFIX]: FormValues }>();
  const { fields, remove, append } = useFieldArray({
    control,
    // @ts-ignore Usikker på korleis ein fiksar denne (Dynamisk name basert på verdiar fra backend)
    name: `${ANDRE_YTELSER_NAME_PREFIX}.${name}`,
  });

  return (
    <PeriodFieldArray
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => {
        const namePart1 = `${ANDRE_YTELSER_NAME_PREFIX}.${name}.${index}`;
        return (
          <div key={field.id}>
            <div className={index !== fields.length - 1 ? styles.notLastRow : ''}>
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <Datepicker
                      name={`${namePart1}.periodeFom`}
                      label={index === 0 ? intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeFom' }) : ''}
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
                      label={index === 0 ? intl.formatMessage({ id: 'Registrering.AndreYtelser.periodeTom' }) : ''}
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
                  {getRemoveButton && <FlexColumn>{getRemoveButton()}</FlexColumn>}
                </FlexRow>
              </FlexContainer>
            </div>
            <VerticalSpacer sixteenPx />
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

RenderAndreYtelserPerioderFieldArray.transformValues = (values: FormValues[], ytelseType: string): TransformValues[] =>
  values.map(ytelsePeriode => ({
    ytelseType,
    periodeFom: ytelsePeriode.periodeFom,
    periodeTom: ytelsePeriode.periodeTom,
  }));

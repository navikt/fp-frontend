import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Datepicker, formHooks, PeriodFieldArray } from '@navikt/ft-form-hooks';
import {
  required, hasValidDate, dateAfterOrEqual, dateBeforeOrEqual,
} from '@navikt/ft-form-validators';

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
 * RenderAndreYtelserPerioderFieldArray
 *
 * Viser inputfelter for fra og til dato for perioder for andre ytelser
 */
const RenderAndreYtelserPerioderFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  name,
}) => {
  const intl = useIntl();

  const {
    getValues, control, trigger, formState: { isSubmitted },
  } = formHooks.useFormContext<{ [ANDRE_YTELSER_NAME_PREFIX]: FormValues}>();
  const { fields, remove, append } = formHooks.useFieldArray({
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
            <Row>
              <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
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
                            const fomVerdi = getValues(`${namePart1}.periodeFom`) as string;
                            const tomVerdi = getValues(`${namePart1}.periodeTom`) as string;
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
                            const fomVerdi = getValues(`${namePart1}.periodeFom`) as string;
                            const tomVerdi = getValues(`${namePart1}.periodeTom`) as string;
                            return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                          },
                        ]}
                        onChange={() => (isSubmitted ? trigger() : undefined)}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      {getRemoveButton()}
                    </FlexColumn>
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

RenderAndreYtelserPerioderFieldArray.transformValues = (values: FormValues[], ytelseType: string): any => values.map((ytelsePeriode) => ({
  ytelseType,
  periodeFom: ytelsePeriode.periodeFom,
  periodeTom: ytelsePeriode.periodeTom,
}));

export default RenderAndreYtelserPerioderFieldArray;

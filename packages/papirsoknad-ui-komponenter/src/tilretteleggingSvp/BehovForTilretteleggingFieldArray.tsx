import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Datepicker, InputField, PeriodFieldArray,SelectField } from '@navikt/ft-form-hooks';
import { maxValue,required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { TilretteleggingType } from '@navikt/fp-kodeverk';

import styles from './behovForTilretteleggingFieldArray.module.css';

const maxValue3 = maxValue(100);

export const behovForTilretteleggingFieldArrayName = 'tilretteleggingArbeidsgiver';
export const selvstendigNaringsdrivendeFieldArrayName = 'tilretteleggingSelvstendigNaringsdrivende';
export const frilansFieldArrayName = 'tilretteleggingFrilans';

type FormValues = {
  tilretteleggingType: string;
  dato: string;
  stillingsprosent: string;
};

const defaultTilrettelegging: FormValues = {
  tilretteleggingType: '',
  dato: '',
  stillingsprosent: '',
};

interface Props {
  readOnly: boolean;
  name: string;
}

/**
 * BehovForTilrettteleggingFieldArray
 *
 * Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.
 */
export const BehovForTilretteleggingFieldArray = ({ readOnly, name }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultTilrettelegging);
    }
  }, []);

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultTilrettelegging}
      bodyText={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => (
        <div key={field.id} className={index !== fields.length - 1 ? styles.notLastRow : ''}>
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <SelectField
                  readOnly={readOnly}
                  name={`${name}.${index}.tilretteleggingType`}
                  label={
                    index === 0
                      ? intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.BehovForTilrettelegging' })
                      : ''
                  }
                  validate={[required]}
                  selectValues={[
                    <option
                      value={TilretteleggingType.HEL_TILRETTELEGGING}
                      key={TilretteleggingType.HEL_TILRETTELEGGING}
                    >
                      {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanGjennomfores' })}
                    </option>,
                    <option
                      value={TilretteleggingType.DELVIS_TILRETTELEGGING}
                      key={TilretteleggingType.DELVIS_TILRETTELEGGING}
                    >
                      {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.RedusertArbeid' })}
                    </option>,
                    <option
                      value={TilretteleggingType.INGEN_TILRETTELEGGING}
                      key={TilretteleggingType.INGEN_TILRETTELEGGING}
                    >
                      {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores' })}
                    </option>,
                  ]}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  isReadOnly={readOnly}
                  name={`${name}.${index}.dato`}
                  label={index === 0 ? intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.FraDato' }) : ''}
                  validate={[required]}
                />
              </FlexColumn>
              <FlexColumn>
                <InputField
                  readOnly={readOnly}
                  name={`${name}.${index}.stillingsprosent`}
                  label={
                    index === 0 ? intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.Stillingsprosent' }) : ''
                  }
                  validate={[required, maxValue3]}
                  maxLength={99}
                />
              </FlexColumn>
              {getRemoveButton && <FlexColumn>{getRemoveButton()}</FlexColumn>}
            </FlexRow>
          </FlexContainer>
        </div>
      )}
    </PeriodFieldArray>
  );
};

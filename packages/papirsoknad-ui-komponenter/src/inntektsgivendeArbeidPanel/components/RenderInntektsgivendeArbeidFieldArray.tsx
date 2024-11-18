import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { maxLength, hasValidDate } from '@navikt/ft-form-validators';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Datepicker, InputField, SelectField, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { KodeverkType, Landkode } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './renderInntektsgivendeArbeidFieldArray.module.css';

const maxLength50 = maxLength(50);

export const INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME = 'arbeidsforhold';

type FormValues = {
  arbeidsgiver: string;
  periodeFom: string;
  periodeTom: string;
  land: string;
};

const defaultInntektsgivendeArbeid: FormValues = {
  arbeidsgiver: '',
  periodeFom: '',
  periodeTom: '',
  land: '',
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] =>
  countryCodes
    .filter(({ kode }) => kode !== Landkode.NORGE)
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RenderInntektsgivendeArbeidFieldArray
 *
 * Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.
 */
export const RenderInntektsgivendeArbeidFieldArray = ({ alleKodeverk, readOnly }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<{ [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: FormValues[] }>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME,
  });

  const sortedCountriesByName = alleKodeverk[KodeverkType.LANDKODER]
    .slice()
    .sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <PeriodFieldArray<FormValues>
      fields={fields}
      emptyPeriodTemplate={defaultInntektsgivendeArbeid}
      bodyText={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => (
        <div key={field.id} className={index !== fields.length - 1 ? styles.notLastRow : ''}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <InputField
                  readOnly={readOnly}
                  name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.arbeidsgiver`}
                  label={
                    index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Arbeidsgiver' }) : ''
                  }
                  validate={[maxLength50]}
                  maxLength={99}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  isReadOnly={readOnly}
                  name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeFom`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeFom' }) : ''}
                  validate={[hasValidDate]}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  isReadOnly={readOnly}
                  name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeTom`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeTom' }) : ''}
                  validate={[hasValidDate]}
                />
              </FlexColumn>
              <FlexColumn>
                <SelectField
                  readOnly={readOnly}
                  name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.land`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Land' }) : ''}
                  selectValues={countrySelectValues(sortedCountriesByName)}
                />
              </FlexColumn>
              {getRemoveButton && <FlexColumn>{getRemoveButton()}</FlexColumn>}
            </FlexRow>
          </FlexContainer>
          <VerticalSpacer twentyPx />
        </div>
      )}
    </PeriodFieldArray>
  );
};

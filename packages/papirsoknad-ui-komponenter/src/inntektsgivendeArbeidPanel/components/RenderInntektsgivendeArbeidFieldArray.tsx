import { type ReactElement } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { RhfDatepicker, RhfFieldArray, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, maxLength } from '@navikt/ft-form-validators';

import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { FieldArrayRow } from '../../felles/FieldArrayRow';
import { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from '../constants';
import type { InntektsgivendeArbeidFormValues } from '../types';

const maxLength50 = maxLength(50);

const countrySelectValues = (countryCodes: KodeverkMedNavn<'Landkoder'>[]): ReactElement[] =>
  countryCodes
    .filter(({ kode }) => kode !== 'NOR')
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

  const { control } = useFormContext<InntektsgivendeArbeidFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME,
  });

  const sortedCountriesByName = alleKodeverk['Landkoder'].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <RhfFieldArray
      fields={fields}
      addButtonText={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold' })}
      readOnly={readOnly}
      emptyTemplate={{ arbeidsgiver: '', periodeFom: '', periodeTom: '', land: '' }}
      remove={remove}
      append={append}
    >
      {(field, index) => (
        <FieldArrayRow key={field.id} remove={remove} index={index} readOnly={readOnly}>
          <RhfTextField
            readOnly={readOnly}
            control={control}
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.arbeidsgiver`}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Arbeidsgiver' })}
            validate={[maxLength50]}
            maxLength={99}
          />

          <RhfDatepicker
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeFom`}
            control={control}
            isReadOnly={readOnly}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeFom' })}
            validate={[hasValidDate]}
          />
          <RhfDatepicker
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeTom`}
            control={control}
            isReadOnly={readOnly}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeTom' })}
            validate={[hasValidDate]}
          />
          <RhfSelect
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.land`}
            control={control}
            readOnly={readOnly}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Land' })}
            selectValues={countrySelectValues(sortedCountriesByName)}
            size="small"
          />
        </FieldArrayRow>
      )}
    </RhfFieldArray>
  );
};

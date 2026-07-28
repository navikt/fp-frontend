import { type ReactElement } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { RhfDatepicker, RhfFieldArray, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, maxLength, required } from '@navikt/ft-form-validators';

import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { FieldArrayRow } from '../../felles/FieldArrayRow';
import { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from '../constants';
import type { InntektsgivendeArbeidFormValues } from '../types';

const maxLength50 = maxLength(50);
const requiredIfOther =
  (getValues: UseFormGetValues<InntektsgivendeArbeidFormValues>, index: number) => (value: string) => {
    const { arbeidsgiver, land, periodeFom, periodeTom } =
      getValues(`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}`) ?? {};
    if (arbeidsgiver || land || periodeFom || periodeTom) {
      return required(value);
    }
    return undefined;
  };
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

  const { control, getValues } = useFormContext<InntektsgivendeArbeidFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME,
  });

  const sortedCountriesByName = alleKodeverk['Landkoder'].toSorted((a, b) => a.navn.localeCompare(b.navn));

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
            validate={[requiredIfOther(getValues, index), maxLength50]}
          />

          <RhfDatepicker
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeFom`}
            control={control}
            readOnly={readOnly}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeFom' })}
            validate={[requiredIfOther(getValues, index), hasValidDate]}
          />

          <RhfDatepicker
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeTom`}
            control={control}
            readOnly={readOnly}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeTom' })}
            validate={[requiredIfOther(getValues, index), hasValidDate]}
          />

          <RhfSelect
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.land`}
            control={control}
            readOnly={readOnly}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Land' })}
            selectValues={countrySelectValues(sortedCountriesByName)}
            size="small"
            validate={[requiredIfOther(getValues, index)]}
          />
        </FieldArrayRow>
      )}
    </RhfFieldArray>
  );
};

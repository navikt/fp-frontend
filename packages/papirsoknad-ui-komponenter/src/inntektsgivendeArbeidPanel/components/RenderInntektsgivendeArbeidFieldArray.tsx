import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { HStack } from '@navikt/ds-react';
import { maxLength, hasValidDate } from '@navikt/ft-form-validators';
import { Datepicker, InputField, SelectField, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { KodeverkType, Landkode } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { InntektsgivendeArbeidFormValues } from '../types';
import { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from '../constants';

const maxLength50 = maxLength(50);

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

  const { control } = useFormContext<InntektsgivendeArbeidFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME,
  });

  const sortedCountriesByName = alleKodeverk[KodeverkType.LANDKODER]
    .slice()
    .sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <PeriodFieldArray
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => (
        <HStack key={field.id} gap="4" paddingBlock="2">
          <InputField
            readOnly={readOnly}
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.arbeidsgiver`}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Arbeidsgiver' })}
            validate={[maxLength50]}
            maxLength={99}
          />
          <Datepicker
            isReadOnly={readOnly}
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeFom`}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeFom' })}
            validate={[hasValidDate]}
          />
          <Datepicker
            isReadOnly={readOnly}
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.periodeTom`}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.periodeTom' })}
            validate={[hasValidDate]}
          />
          <SelectField
            readOnly={readOnly}
            name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.land`}
            label={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Land' })}
            selectValues={countrySelectValues(sortedCountriesByName)}
          />
          {getRemoveButton && <div>{getRemoveButton()}</div>}
        </HStack>
      )}
    </PeriodFieldArray>
  );
};

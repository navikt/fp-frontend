import React, { FunctionComponent, ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { maxLength, hasValidDate } from '@navikt/ft-form-validators';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  Datepicker, InputField, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType, Landkode } from '@navikt/ft-kodeverk';

import styles from './renderInntektsgivendeArbeidFieldArray.less';

const maxLength50 = maxLength(50);

export const INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME = 'arbeidsforhold';

type FormValues = {
  arbeidsgiver: string;
  periodeFom: string;
  periodeTom: string;
  land: string;
}

const defaultInntektsgivendeArbeid: FormValues = {
  arbeidsgiver: '',
  periodeFom: '',
  periodeTom: '',
  land: '',
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] => countryCodes
  .filter(({
    kode,
  }) => kode !== Landkode.NORGE)
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RenderInntektsgivendeArbeidFieldArray
 *
 * Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.
 */
const RenderInntektsgivendeArbeidFieldArray: FunctionComponent<OwnProps> = ({
  alleKodeverk,
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: FormValues[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME,
  });

  const sortedCountriesByName = alleKodeverk[KodeverkType.LANDKODER].slice().sort((a, b) => a.navn.localeCompare(b.navn));

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
        <Row key={field.id} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <Column xs="12">
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <InputField
                    readOnly={readOnly}
                    name={`${INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}.${index}.arbeidsgiver`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.Arbeidsgiver' }) : ''}
                    bredde="XXL"
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
                    bredde="m"
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

export default RenderInntektsgivendeArbeidFieldArray;

import React, { FunctionComponent, ReactElement } from 'react';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { maxLength } from '@navikt/ft-utils';
import {
  DatepickerField, InputField, SelectField, PeriodFieldArray,
} from '@fpsak-frontend/form';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import { injectIntl, WrappedComponentProps } from 'react-intl';
import styles from './renderInntektsgivendeArbeidFieldArray.less';

const maxLength50 = maxLength(50);

const defaultInntektsgivendeArbeid = {
  arbeidsgiver: '',
  periodeFom: '',
  periodeTom: '',
  land: '',
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] => countryCodes
  .filter(({
    kode,
  }) => kode !== landkoder.NORGE)
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 *  RenderInntektsgivendeArbeidFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
const RenderInntektsgivendeArbeidFieldArray: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  alleKodeverk,
  readOnly,
}) => {
  const sortedCountriesByName = alleKodeverk[kodeverkTyper.LANDKODER].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <PeriodFieldArray
      fields={fields}
      meta={meta}
      emptyPeriodTemplate={defaultInntektsgivendeArbeid}
      bodyText={intl.formatMessage({ id: 'Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold' })}
      readOnly={readOnly}
    >
      {(arbeidsforholdElementFieldId, index, getRemoveButton) => (
        <Row key={arbeidsforholdElementFieldId} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <Column xs="12">
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <InputField
                    readOnly={readOnly}
                    name={`${arbeidsforholdElementFieldId}.arbeidsgiver`}
                    label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.Arbeidsgiver' } : ''}
                    bredde="XXL"
                    validate={[maxLength50]}
                    maxLength={99}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    readOnly={readOnly}
                    name={`${arbeidsforholdElementFieldId}.periodeFom`}
                    label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.periodeFom' } : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    readOnly={readOnly}
                    name={`${arbeidsforholdElementFieldId}.periodeTom`}
                    label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.periodeTom' } : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <SelectField
                    readOnly={readOnly}
                    name={`${arbeidsforholdElementFieldId}.land`}
                    label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.Land' } : ''}
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

export default injectIntl(RenderInntektsgivendeArbeidFieldArray);

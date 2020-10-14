import React from 'react';
import { connect } from 'react-redux';
import { Column, Row } from 'nav-frontend-grid';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { maxLength } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, InputField, SelectField } from '@fpsak-frontend/form';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './renderInntektsgivendeArbeidF... Remove this comment to see the full error message
import styles from './renderInntektsgivendeArbeidFieldArray.less';

const maxLength50 = maxLength(50);

const defaultInntektsgivendeArbeid = {
  arbeidsgiver: '',
  periodeFom: '',
  periodeTom: '',
  land: '',
};

const countrySelectValues = (countryCodes: any) => countryCodes
  .filter(({
    kode,
  }: any) => kode !== landkoder.NORGE)
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

type RenderInntektsgivendeArbeidFieldArrayProps = {
    fields: {};
    readOnly: boolean;
    meta: {};
    countryCodes: {
        kode?: string;
        navn?: string;
    }[];
};

/**
 *  RenderInntektsgivendeArbeidFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderInntektsgivendeArbeidFieldArray = ({
  fields, meta, countryCodes, readOnly,
}: RenderInntektsgivendeArbeidFieldArrayProps) => {
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const sortedCountriesByName = countryCodes.slice().sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <PeriodFieldArray
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
      fields={fields}
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
      meta={meta}
      emptyPeriodTemplate={defaultInntektsgivendeArbeid}
      textCode="Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"
      readOnly={readOnly}
    >
      {(arbeidsforholdElementFieldId, index, getRemoveButton) => (
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'.
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
                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
                    validate={[maxLength50]}
                    maxLength={99}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    readOnly={readOnly}
                    name={`${arbeidsforholdElementFieldId}.periodeFom`}
                    // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                    defaultValue={null}
                    label={index === 0 ? { id: 'Registrering.InntektsgivendeArbeid.periodeFom' } : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    readOnly={readOnly}
                    name={`${arbeidsforholdElementFieldId}.periodeTom`}
                    // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                    defaultValue={null}
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
                <FlexColumn>
                  {/* @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message */}
                  {getRemoveButton()}
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  countryCodes: ownProps.alleKodeverk[kodeverkTyper.LANDKODER],
});

export default connect(mapStateToProps)(RenderInntektsgivendeArbeidFieldArray);

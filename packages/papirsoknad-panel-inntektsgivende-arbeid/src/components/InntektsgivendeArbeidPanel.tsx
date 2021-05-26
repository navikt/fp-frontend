import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldArray } from 'redux-form';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';

import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { AlleKodeverk } from '@fpsak-frontend/types';

import RenderInntektsgivendeArbeidFieldArray from './RenderInntektsgivendeArbeidFieldArray';
import RenderInntektsgivendeArbeidAmbassadeFieldArray, { FormValues as IAFormValues } from './RenderInntektsgivendeArbeidAmbassadeFieldArray';

const localFeature = false;

const INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME = 'arbeidsforhold';
const RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY = 'ambassadearbeidsforhold';

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export type FormValues = {
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: Record<string, any>;
  [RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]?: IAFormValues[];
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  validate?: (values: FormValues) => any,
}

/**
 * InntektsgivendeArbeidPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
const InntektsgivendeArbeidPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleKodeverk,
}) => (
  <BorderBox>
    <Undertittel><FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.Title" /></Undertittel>
    <VerticalSpacer eightPx />
    <Undertekst>
      <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold" />
    </Undertekst>
    <VerticalSpacer sixteenPx />
    <VerticalSpacer sixteenPx />
    <Undertittel><FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title" /></Undertittel>
    <VerticalSpacer eightPx />
    <FieldArray
      name={INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME}
      component={RenderInntektsgivendeArbeidFieldArray}
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
    />
    {localFeature
      && (
      <div>
        <VerticalSpacer sixteenPx />
        <Undertittel>
          <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidPaAmbassade" />
        </Undertittel>
        <VerticalSpacer eightPx />
        <FieldArray
          name={RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY}
          component={RenderInntektsgivendeArbeidAmbassadeFieldArray}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      </div>
      )}
  </BorderBox>
);

InntektsgivendeArbeidPanel.validate = (values: FormValues) => ({
  [RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]: {
    ...RenderInntektsgivendeArbeidAmbassadeFieldArray.validate(values[RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]),
  },
});

InntektsgivendeArbeidPanel.buildInitialValues = (): FormValues => ({
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: [{}],
  [RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]: [{}],
});

export default InntektsgivendeArbeidPanel;

import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';

import RenderInntektsgivendeArbeidFieldArray, { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from './RenderInntektsgivendeArbeidFieldArray';
import RenderInntektsgivendeArbeidAmbassadeFieldArray, {
  FormValues as IAFormValues,
  RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY,
} from './RenderInntektsgivendeArbeidAmbassadeFieldArray';

// TODO Kva er dette?
const localFeature = false;

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
}

/**
 * InntektsgivendeArbeidPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
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
    <RenderInntektsgivendeArbeidFieldArray readOnly={readOnly} alleKodeverk={alleKodeverk} />
    {localFeature && (
      <div>
        <VerticalSpacer sixteenPx />
        <Undertittel>
          <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidPaAmbassade" />
        </Undertittel>
        <VerticalSpacer eightPx />
        <RenderInntektsgivendeArbeidAmbassadeFieldArray readOnly={readOnly} />
      </div>
    )}
  </BorderBox>
);

/*
InntektsgivendeArbeidPanel.validate = (values) => ({
  [RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]: {
    ...RenderInntektsgivendeArbeidAmbassadeFieldArray.validate(values[RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]),
  },
});
*/

InntektsgivendeArbeidPanel.buildInitialValues = () => ({
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: [{}],
  [RENDER_INNTEKTSGIVENDE_ARBEID_AMBASSADE_FIELD_ARRAY]: [{}],
});

export default InntektsgivendeArbeidPanel;

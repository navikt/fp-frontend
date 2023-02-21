import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail, Heading } from '@navikt/ds-react';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/fp-types';

import RenderInntektsgivendeArbeidFieldArray, { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from './RenderInntektsgivendeArbeidFieldArray';

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export type FormValues = {
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: Record<string, any>;
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
    <Heading size="small"><FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.Title" /></Heading>
    <VerticalSpacer eightPx />
    <Detail size="small">
      <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold" />
    </Detail>
    <VerticalSpacer sixteenPx />
    <VerticalSpacer sixteenPx />
    <Detail size="small"><FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title" /></Detail>
    <VerticalSpacer eightPx />
    <RenderInntektsgivendeArbeidFieldArray readOnly={readOnly} alleKodeverk={alleKodeverk} />
  </BorderBox>
);

InntektsgivendeArbeidPanel.buildInitialValues = () => ({
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: [{}],
});

export default InntektsgivendeArbeidPanel;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail, Heading } from '@navikt/ds-react';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/fp-types';

import {
  RenderInntektsgivendeArbeidFieldArray,
  INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME,
} from './RenderInntektsgivendeArbeidFieldArray';

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export type FormValues = {
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: Record<string, any>;
};

/**
 * InntektsgivendeArbeidPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const InntektsgivendeArbeidPanel = ({ readOnly, alleKodeverk }: Props) => (
  <BorderBox>
    <Heading size="small">
      <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.Title" />
    </Heading>
    <VerticalSpacer eightPx />
    <Detail>
      <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold" />
    </Detail>
    <VerticalSpacer sixteenPx />
    <VerticalSpacer sixteenPx />
    <Detail>
      <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title" />
    </Detail>
    <VerticalSpacer eightPx />
    <RenderInntektsgivendeArbeidFieldArray readOnly={readOnly} alleKodeverk={alleKodeverk} />
  </BorderBox>
);

InntektsgivendeArbeidPanel.buildInitialValues = () => ({
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: [{}],
});

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail, Heading, VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/fp-types';

import { RenderInntektsgivendeArbeidFieldArray } from './RenderInntektsgivendeArbeidFieldArray';
import { InntektsgivendeArbeidFormValues } from '../types';
import { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from '../constants';

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * InntektsgivendeArbeidPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const InntektsgivendeArbeidPanel = ({ readOnly, alleKodeverk }: Props) => (
  <BorderBox>
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.Title" />
      </Heading>
      <Detail>
        <FormattedMessage id="Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold" />
      </Detail>
      <RenderInntektsgivendeArbeidFieldArray readOnly={readOnly} alleKodeverk={alleKodeverk} />
    </VStack>
  </BorderBox>
);

InntektsgivendeArbeidPanel.initialValues = (): InntektsgivendeArbeidFormValues => ({
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: [
    {
      arbeidsgiver: '',
      periodeFom: '',
      periodeTom: '',
      land: '',
    },
  ],
});

InntektsgivendeArbeidPanel.transformValues = ({
  arbeidsforhold,
}: InntektsgivendeArbeidFormValues): InntektsgivendeArbeidFormValues => ({
  arbeidsforhold,
});

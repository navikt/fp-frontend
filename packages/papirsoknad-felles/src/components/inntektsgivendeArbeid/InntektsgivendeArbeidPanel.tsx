import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldArray } from 'redux-form';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';

import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';

import RenderInntektsgivendeArbeidFieldArray from './RenderInntektsgivendeArbeidFieldArray';
import RenderInntektsgivendeArbeidAmbassadeFieldArray from './RenderInntektsgivendeArbeidAmbassadeFieldArray';

// TODO: (aa) Ambassadepersonell - den här hamnade på backburner men jobben var reden gjort - ta bort raden nedan og tillsvarande kode
// för att få tilbake FE för ambassadpersonell

const localFeature = false;

const inntektsgivendeArbeidFieldArrayName = 'arbeidsforhold';
const renderInntektsgivendeArbeidAmbassadeFieldArray = 'ambassadearbeidsforhold';

const AMBASSADE_ARBEIDS_FORHOLD_PREFIX = 'ambassadearbeidsforhold';

type Props = {
    readOnly: boolean;
    alleKodeverk: {};
};

/**
 * InntektsgivendeArbeidPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
const InntektsgivendeArbeidPanel = ({ readOnly, alleKodeverk }: Props) => (
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
      name={inntektsgivendeArbeidFieldArrayName}
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
          name={renderInntektsgivendeArbeidAmbassadeFieldArray}
          component={RenderInntektsgivendeArbeidAmbassadeFieldArray}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      </div>
      )}
  </BorderBox>
);

InntektsgivendeArbeidPanel.validate = (values: any) => {
  const errors = {
    [AMBASSADE_ARBEIDS_FORHOLD_PREFIX]: {
      ...RenderInntektsgivendeArbeidAmbassadeFieldArray.validate(values[AMBASSADE_ARBEIDS_FORHOLD_PREFIX]),
    },
  };
  return errors;
};

InntektsgivendeArbeidPanel.initialValues = {
  [inntektsgivendeArbeidFieldArrayName]: [{}],
  [renderInntektsgivendeArbeidAmbassadeFieldArray]: [{}],
};

export default InntektsgivendeArbeidPanel;

import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Normaltekst } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { DDMMYYYY_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { FaktaOmBeregning, KodeverkMedNavn, KortvarigAndel } from '@fpsak-frontend/types';
import { createVisningsnavnForAktivitet } from '../../ArbeidsforholdHelper';

const kortvarigStringId = 'BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold';

const createArbeidsforholdRadioKey = (andel) => (andel && andel.arbeidsforhold
  ? `${andel.arbeidsforhold.arbeidsgiverNavn}(${andel.arbeidsforhold.arbeidsforholdId})(${andel.andelsnr})`
  : '');

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    faktaOmBeregning: FaktaOmBeregning;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
};

interface StaticFunctions {
  transformValues: (values: any, andeler: KortvarigAndel[]) => any;
  buildInitialValues: (andeler: KortvarigAndel[]) => any;
}

/**
 * TidsbegrensetArbeidsforholdForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for Vurder Tidsbegrenset Arbeidsforhold som ber
 * bruker bestemme om en liste med arbeidsforhold er tidsbegrenset eller ikke.
 */

export const TidsbegrensetArbeidsforholdForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly, faktaOmBeregning, isAksjonspunktClosed, alleKodeverk,
}) => {
  const andelsliste = faktaOmBeregning.kortvarigeArbeidsforhold;
  return (
    <div>
      {andelsliste.map((andel) => (
        <div key={`fastsettTidsbegrensedeForhold_${createVisningsnavnForAktivitet(andel.arbeidsforhold, alleKodeverk)}`}>
          <Normaltekst>
            <FormattedMessage
              id={kortvarigStringId}
              values={{
                navn: createVisningsnavnForAktivitet(andel.arbeidsforhold, alleKodeverk),
                fom: moment(andel.arbeidsforhold.startdato).format(DDMMYYYY_DATE_FORMAT),
                tom: moment(andel.arbeidsforhold.opphoersdato).format(DDMMYYYY_DATE_FORMAT),
              }}
            />
          </Normaltekst>
          <VerticalSpacer eightPx />
          <RadioGroupField
            name={createArbeidsforholdRadioKey(andel)}
            validate={[required]}
            readOnly={readOnly}
            isEdited={isAksjonspunktClosed}
          >
            <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
            <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
          </RadioGroupField>
        </div>
      ))}
    </div>
  );
};

TidsbegrensetArbeidsforholdForm.buildInitialValues = (andeler) => {
  const initialValues = {};
  if (!andeler) {
    return initialValues;
  }
  andeler.forEach((andel) => {
    if (andel.erTidsbegrensetArbeidsforhold !== undefined) {
      initialValues[createArbeidsforholdRadioKey(andel)] = andel.erTidsbegrensetArbeidsforhold;
    }
  });
  return initialValues;
};

TidsbegrensetArbeidsforholdForm.transformValues = (values, andeler) => {
  const newValues = [];
  andeler.forEach((andel) => {
    const fieldName = createArbeidsforholdRadioKey(andel);
    const booleanValue = values[fieldName];
    const valueObject = {
      andelsnr: andel.andelsnr,
      tidsbegrensetArbeidsforhold: booleanValue,
      opprinneligVerdi: andel.erTidsbegrensetArbeidsforhold,
    };
    newValues.push(valueObject);
  });
  return {
    vurderTidsbegrensetArbeidsforhold: { fastsatteArbeidsforhold: newValues },
  };
};

export default TidsbegrensetArbeidsforholdForm;

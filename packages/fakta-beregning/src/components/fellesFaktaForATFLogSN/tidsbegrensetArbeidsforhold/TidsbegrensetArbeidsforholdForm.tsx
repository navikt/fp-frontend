import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Normaltekst } from 'nav-frontend-typografi';
import { getKodeverknavnFn, DDMMYYYY_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  KodeverkMedNavn,
  KortvarigAndel,
} from '@fpsak-frontend/types';
import ArbeidsgiverOpplysningerPerId from '@fpsak-frontend/types/src/arbeidsgiverOpplysningerTsType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { createVisningsnavnForAktivitet } from '../../ArbeidsforholdHelper';

const kortvarigStringId = 'BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold';

const createArbeidsforholdRadioKey = (andel: BeregningsgrunnlagAndel): string => (andel && andel.arbeidsforhold
  ? `${andel.arbeidsforhold.arbeidsgiverIdent}(${andel.arbeidsforhold.arbeidsforholdId})(${andel.andelsnr})`
  : '');

const lagVisningsnavn = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]}): string => {
  const agOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  if (!agOpplysninger) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavnFn(alleKodeverk, kodeverkTyper)(arbeidsforhold.arbeidsforholdType) : '';
  }
  return createVisningsnavnForAktivitet(agOpplysninger, arbeidsforhold.eksternArbeidsforholdId);
};

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    faktaOmBeregning: FaktaOmBeregning;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
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
  readOnly, faktaOmBeregning, isAksjonspunktClosed, alleKodeverk, arbeidsgiverOpplysningerPerId,
}) => {
  const andelsliste = faktaOmBeregning.kortvarigeArbeidsforhold;
  return (
    <div>
      {andelsliste.map((andel) => (
        <div key={`fastsettTidsbegrensedeForhold_${lagVisningsnavn(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId, alleKodeverk)}`}>
          <Normaltekst>
            <FormattedMessage
              id={kortvarigStringId}
              values={{
                navn: lagVisningsnavn(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId, alleKodeverk),
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

import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Normaltekst } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { DDMMYYYY_DATE_FORMAT, required } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  KortvarigAndel,
} from '@fpsak-frontend/types';
import { FaktaBeregningTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import { createVisningsnavnFakta } from '../../ArbeidsforholdHelper';
import { FaktaOmBeregningAksjonspunktValues, TidsbegrensetandelValues } from '../../../typer/FaktaBeregningTypes';

const kortvarigStringId = 'BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold';

const createArbeidsforholdRadioKey = (andel: KortvarigAndel): string => (andel && andel.arbeidsforhold
  ? `${andel.arbeidsforhold.arbeidsgiverIdent}(${andel.arbeidsforhold.arbeidsforholdId})(${andel.andelsnr})`
  : '');

const lagVisningsnavn = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  return createVisningsnavnFakta(agOpplysning, arbeidsforhold.eksternArbeidsforholdId);
};

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    faktaOmBeregning: FaktaOmBeregning;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  transformValues: (values: FaktaOmBeregningAksjonspunktValues, andeler: KortvarigAndel[]) => any;
  buildInitialValues: (andeler: KortvarigAndel[]) => TidsbegrensetandelValues;
}

/**
 * TidsbegrensetArbeidsforholdForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for Vurder Tidsbegrenset Arbeidsforhold som ber
 * bruker bestemme om en liste med arbeidsforhold er tidsbegrenset eller ikke.
 */

export const TidsbegrensetArbeidsforholdForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly, faktaOmBeregning, isAksjonspunktClosed, arbeidsgiverOpplysningerPerId,
}) => {
  const andelsliste = faktaOmBeregning.kortvarigeArbeidsforhold;
  return (
    <div>
      {andelsliste.map((andel) => (
        <div key={`fastsettTidsbegrensedeForhold_${lagVisningsnavn(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId)}`}>
          <Normaltekst>
            <FormattedMessage
              id={kortvarigStringId}
              values={{
                navn: lagVisningsnavn(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId),
                fom: moment(andel.arbeidsforhold.startdato).format(DDMMYYYY_DATE_FORMAT),
                tom: moment(andel.arbeidsforhold.opphoersdato).format(DDMMYYYY_DATE_FORMAT),
              }}
            />
          </Normaltekst>
          <VerticalSpacer eightPx />
          <RadioGroupField
            name={`tidsbegrensetValues.${createArbeidsforholdRadioKey(andel)}`}
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

TidsbegrensetArbeidsforholdForm.buildInitialValues = (andeler: KortvarigAndel[]): TidsbegrensetandelValues => {
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

TidsbegrensetArbeidsforholdForm.transformValues = (values: FaktaOmBeregningAksjonspunktValues,
  andeler: KortvarigAndel[]): FaktaBeregningTransformedValues => {
  const newValues = [];
  andeler.forEach((andel) => {
    const fieldName = createArbeidsforholdRadioKey(andel);
    const booleanValue = values.tidsbegrensetValues[fieldName];
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

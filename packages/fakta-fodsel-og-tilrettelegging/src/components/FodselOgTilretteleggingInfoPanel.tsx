import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape } from 'react-intl';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  Aksjonspunkt, Arbeidsforhold, ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, FodselOgTilrettelegging,
} from '@fpsak-frontend/types';
import { BekreftSvangerskapspengerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FodselOgTilretteleggingFaktaForm from './FodselOgTilretteleggingFaktaForm';

interface OwnProps {
  behandlingVersjon: number;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  aksjonspunkter: Aksjonspunkt[];
  iayArbeidsforhold: Arbeidsforhold[];
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  submitCallback: (aksjonspunktData: BekreftSvangerskapspengerAp) => Promise<void>
  submittable: boolean;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn[],
  intl: IntlShape;
}

/**
 * Svangerskapspenger
 * Fakta om Fødsel og tilrettelegging
 */
const FodselOgTilretteleggingInfoPanel: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  svangerskapspengerTilrettelegging,
  aksjonspunkter,
  iayArbeidsforhold,
  readOnly,
  hasOpenAksjonspunkter,
  submitCallback,
  submittable,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  uttakArbeidTyper,
  intl,
}) => (
  <>
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
      {[<FormattedMessage id="FodselOgTilretteleggingInfoPanel.Aksjonspunkt" key="svangerskapspengerAp" />]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer eightPx />
    <FodselOgTilretteleggingFaktaForm
      behandlingVersjon={behandlingVersjon}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
      aksjonspunkter={aksjonspunkter}
      iayArbeidsforhold={iayArbeidsforhold}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={hasOpenAksjonspunkter}
      submittable={submittable}
      erOverstyrer={erOverstyrer}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      uttakArbeidTyper={uttakArbeidTyper}
      intl={intl}
    />
  </>
);

export default FodselOgTilretteleggingInfoPanel;

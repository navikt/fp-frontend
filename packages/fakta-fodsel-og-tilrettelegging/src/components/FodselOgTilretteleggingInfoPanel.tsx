import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, Arbeidsforhold, ArbeidsgiverOpplysningerPerId, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import FodselOgTilretteleggingFaktaForm from './FodselOgTilretteleggingFaktaForm';
import FodselOgTilrettelegging from '../types/fodselOgTilretteleggingTsType';

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  aksjonspunkter: Aksjonspunkt[];
  iayArbeidsforhold: Arbeidsforhold[];
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  submitCallback?: (aksjonspunktData: { kode: string }) => Promise<any>
  submittable: boolean;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn[],
}

/**
 * Svangerskapspenger
 * Fakta om Fødsel og tilrettelegging
 */
const FodselOgTilretteleggingInfoPanel: FunctionComponent<OwnProps> = ({
  behandlingId,
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
}) => (
  <>
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
      {[<FormattedMessage id="FodselOgTilretteleggingInfoPanel.Aksjonspunkt" key="svangerskapspengerAp" />]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer eightPx />
    <FodselOgTilretteleggingFaktaForm
      behandlingId={behandlingId}
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
    />
  </>
);

export default FodselOgTilretteleggingInfoPanel;

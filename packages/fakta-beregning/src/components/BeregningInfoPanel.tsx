import React, { FunctionComponent } from 'react';

import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import { ArbeidsgiverOpplysningerPerId, AlleKodeverk } from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';

import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import AvklarBeregningsaktiviteterAP, { OverstyrBeregningsaktiviteterAP } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningAktivitetAP';
import BeregningFaktaAP, { BeregningOverstyringAP } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import { IntlShape } from 'react-intl';
import VurderFaktaBeregningPanel from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';
import AvklareAktiviteterPanel from './avklareAktiviteter/AvklareAktiviteterPanel';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
} = aksjonspunktCodes;

type OwnProps = {
  intl: IntlShape
  submitCallback: (aksjonspunktData: AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP
    | BeregningFaktaAP | BeregningOverstyringAP) => Promise<void>;
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  submittable: boolean;
  erOverstyrer: boolean;
  alleKodeverk: AlleKodeverk;
  beregningsgrunnlag?: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

/**
 * BeregningInfoPanel
 *
 * Container komponent.. Har ansvar for å sette opp Redux Formen for "avklar fakta om beregning" panel.
 */
const BeregningInfoPanel: FunctionComponent<OwnProps> = ({
  intl,
  readOnly,
  aksjonspunkter,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  erOverstyrer,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => (
  <div>
    <AvklareAktiviteterPanel
      readOnly={readOnly || (hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter) && !erOverstyrer)}
      harAndreAksjonspunkterIPanel={hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)}
      submitCallback={submitCallback}
      submittable={submittable}
      erOverstyrer={erOverstyrer}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
    <VerticalSpacer thirtyTwoPx />
    <VurderFaktaBeregningPanel
      intl={intl}
      readOnly={readOnly || ((hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aksjonspunkter) || beregningsgrunnlag.erOverstyrtInntekt) && !erOverstyrer)}
      submitCallback={submitCallback}
      submittable={submittable}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag}
      erOverstyrer={erOverstyrer}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </div>
);

export default BeregningInfoPanel;

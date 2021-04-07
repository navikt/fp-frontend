import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import { ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Beregningsgrunnlag } from '@fpsak-frontend/types';

import BeregningInfoPanel from './components/BeregningInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const BeregningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  beregningsgrunnlag,
  alleKodeverk,
  aksjonspunkter,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <BeregningInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      beregningsgrunnlag={beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      erOverstyrer={erOverstyrer}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default BeregningFaktaIndex;

import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Opptjening,
} from '@fpsak-frontend/types';

import OpptjeningInfoPanel from './components/OpptjeningInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  opptjening?: Opptjening;
  utlandDokStatus?: {
    dokStatus: string;
  };
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const OpptjeningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  opptjening,
  aksjonspunkter,
  utlandDokStatus,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  harApneAksjonspunkter,
  submittable,
  submitCallback,
  readOnly,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <OpptjeningInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      fastsattOpptjening={opptjening ? opptjening.fastsattOpptjening : undefined}
      opptjeningAktiviteter={opptjening ? opptjening.opptjeningAktivitetList : undefined}
      dokStatus={utlandDokStatus ? utlandDokStatus.dokStatus : undefined}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default OpptjeningFaktaIndex;

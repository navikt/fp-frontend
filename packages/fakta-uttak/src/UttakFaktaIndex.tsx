import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, Behandling, FaktaArbeidsforhold, FamilieHendelseSamling,
  KodeverkMedNavn, Personoversikt, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import UttakInfoPanel from './components/UttakInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  ytelsefordeling: Ytelsefordeling;
  personoversikt: Personoversikt;
  familiehendelse: FamilieHendelseSamling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  kanOverstyre: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const UttakFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
  aksjonspunkter,
  submitCallback,
  ytelsefordeling,
  uttakKontrollerFaktaPerioder,
  alleKodeverk,
  faktaArbeidsforhold,
  personoversikt,
  familiehendelse,
  readOnly,
  kanOverstyre,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <UttakInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingType={behandling.type}
      behandlingArsaker={behandling.behandlingÅrsaker}
      behandlingStatus={behandling.status}
      behandlingPaaVent={behandling.behandlingPaaVent}
      ytelsefordeling={ytelsefordeling}
      uttakPerioder={uttakKontrollerFaktaPerioder.perioder}
      alleKodeverk={alleKodeverk}
      faktaArbeidsforhold={faktaArbeidsforhold}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      kanOverstyre={kanOverstyre}
      personoversikt={personoversikt}
      familiehendelse={familiehendelse}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default UttakFaktaIndex;

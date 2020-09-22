import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, FaktaArbeidsforhold, FamilieHendelseSamling,
  KodeverkMedNavn, Personopplysninger, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakInfoPanel from './components/UttakInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  ytelsefordeling: Ytelsefordeling;
  personopplysninger: Personopplysninger;
  familiehendelse: FamilieHendelseSamling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  kanOverstyre: boolean;
}

const UttakFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  aksjonspunkter,
  submitCallback,
  ytelsefordeling,
  uttakKontrollerFaktaPerioder,
  alleKodeverk,
  faktaArbeidsforhold,
  personopplysninger,
  familiehendelse,
  readOnly,
  kanOverstyre,
}) => (
  <RawIntlProvider value={intl}>
    <UttakInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingType={behandling.type}
      behandlingArsaker={behandling.behandlingArsaker}
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
      personopplysninger={personopplysninger}
      familiehendelse={familiehendelse}
    />
  </RawIntlProvider>
);

export default UttakFaktaIndex;

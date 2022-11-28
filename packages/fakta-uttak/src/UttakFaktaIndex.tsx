import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, FaktaArbeidsforhold, FamilieHendelseSamling,
  Personoversikt, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import UttakInfoPanel from './components/UttakInfoPanel';
import messages from '../i18n/nb_NO.json';
import UttakFaktaForm from './comp/UttakFaktaForm';

const intl = createIntl(messages);

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  personoversikt: Personoversikt;
  familiehendelse: FamilieHendelseSamling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  kanOverstyre: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const UttakFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
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
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="UttakFaktaIndex" formData={formData} setFormData={setFormData}>
      <UttakInfoPanel
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
        submittable={submittable}
      />
    </ReduxWrapper>
    <UttakFaktaForm
      harApneAksjonspunkter={aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status))}
      uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default UttakFaktaIndex;

import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import {
  KontrollerFaktaPeriode, Ytelsefordeling, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, Aksjonspunkt, AlleKodeverk, Fagsak,
} from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import UttakFaktaForm from './components/UttakFaktaForm';

import messages from '../i18n/nb_NO.json';

import '@navikt/fp-fakta-felles/dist/style.css';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  kanOverstyre: boolean;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleKodeverk: AlleKodeverk;
  formData?: any,
  setFormData: (data: any) => void,
}

const UttakFaktaIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  aksjonspunkter,
  submitCallback,
  ytelsefordeling,
  uttakKontrollerFaktaPerioder,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  alleKodeverk,
  readOnly,
  kanOverstyre,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <UttakFaktaForm
      fagsak={fagsak}
      ytelsefordeling={ytelsefordeling}
      uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      faktaArbeidsforhold={faktaArbeidsforhold}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      submittable={submittable}
      formData={formData}
      setFormData={setFormData}
      readOnly={readOnly}
      submitCallback={submitCallback}
      kanOverstyre={kanOverstyre}
    />
  </RawIntlProvider>
);

export default UttakFaktaIndex;

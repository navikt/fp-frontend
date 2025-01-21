import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Fagsak,
  FaktaArbeidsforhold,
  KontrollerFaktaPeriode,
  Ytelsefordeling,
} from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import UttakFaktaForm from './components/UttakFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
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
  formData?: any;
  setFormData: (data: any) => void;
}

export const UttakFaktaIndex = ({
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
}: Props) => (
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

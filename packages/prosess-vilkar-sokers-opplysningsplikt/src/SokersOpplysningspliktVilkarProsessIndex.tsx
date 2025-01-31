import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ArbeidsgiverOpplysningerPerId, Soknad, StandardProsessPanelProps } from '@navikt/fp-types';

import SokersOpplysningspliktForm from './components/SokersOpplysningspliktForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const SokersOpplysningspliktVilkarProsessIndex = ({
  behandling,
  soknad,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  alleMerknaderFraBeslutter,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <SokersOpplysningspliktForm
      behandlingsresultat={behandling.behandlingsresultat}
      soknad={soknad}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
    />
  </RawIntlProvider>
);

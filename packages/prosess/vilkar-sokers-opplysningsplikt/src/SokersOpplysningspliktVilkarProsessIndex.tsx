import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysningerPerId, Soknad } from '@navikt/fp-types';

import { SokersOpplysningspliktForm } from './components/SokersOpplysningspliktForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  status: string;
}

export const SokersOpplysningspliktVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <SokersOpplysningspliktForm {...props} />
  </RawIntlProvider>
);

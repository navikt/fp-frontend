import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { PermisjonFaktaPanel } from './components/PermisjonFaktaPanel';

import messages from '../i18n/nb_NO.json';

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const intl = createIntl(messages);

export const PermisjonFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <PermisjonFaktaPanel {...props} />
  </RawIntlProvider>
);

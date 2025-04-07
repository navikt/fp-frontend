import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import { TilkjentYtelsePanel } from './components/TilkjentYtelsePanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningresultat: BeregningsresultatDagytelse;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  søknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

export const TilkjentYtelseProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <TilkjentYtelsePanel {...props} />
  </RawIntlProvider>
);

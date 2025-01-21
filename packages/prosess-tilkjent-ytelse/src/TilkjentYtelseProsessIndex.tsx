import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  Fagsak,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
  StandardProsessPanelProps,
} from '@navikt/fp-types';

import TilkjentYtelsePanel from './components/TilkjentYtelsePanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningresultat: BeregningsresultatDagytelse;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

export const TilkjentYtelseProsessIndex = ({
  beregningresultat,
  familiehendelse,
  personoversikt,
  soknad,
  fagsak,
  aksjonspunkter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <TilkjentYtelsePanel
      beregningresultat={beregningresultat}
      familieHendelseSamling={familiehendelse}
      personoversikt={personoversikt}
      soknad={soknad}
      fagsak={fagsak}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      feriepengegrunnlag={feriepengegrunnlag}
    />
  </RawIntlProvider>
);

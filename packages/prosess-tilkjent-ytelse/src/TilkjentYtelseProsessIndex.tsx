import React, { FunctionComponent } from 'react';
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

interface OwnProps {
  beregningresultat: BeregningsresultatDagytelse;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

const TilkjentYtelseProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  beregningresultat,
  familiehendelse,
  personoversikt,
  soknad,
  fagsak,
  aksjonspunkter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
}) => (
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

export default TilkjentYtelseProsessIndex;

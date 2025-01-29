import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidsgiverOpplysningerPerId,
  Fagsak,
  FamilieHendelseSamling,
  PeriodeSoker,
  Personoversikt,
  Soknad,
  StandardProsessPanelProps,
  UttaksresultatPeriode,
  UttakStonadskontoer,
  Ytelsefordeling,
} from '@navikt/fp-types';

import UttakProsessPanel from './components/UttakProsessPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  uttaksresultatPerioder: UttaksresultatPeriode;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  kanOverstyre: boolean;
  oppdaterStønadskontoer: (params: { behandlingUuid: string; perioder: PeriodeSoker[] }) => Promise<any>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
}

export const UttakProsessIndex = ({
  behandling,
  uttaksresultatPerioder,
  uttakStonadskontoer,
  aksjonspunkter,
  familiehendelse,
  soknad,
  personoversikt,
  ytelsefordeling,
  alleKodeverk,
  kanOverstyre,
  submitCallback,
  isReadOnly,
  oppdaterStønadskontoer,
  arbeidsgiverOpplysningerPerId,
  fagsak,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <UttakProsessPanel
      behandling={behandling}
      uttaksresultatPeriode={uttaksresultatPerioder}
      uttakStonadskontoer={uttakStonadskontoer}
      aksjonspunkter={aksjonspunkter}
      familiehendelse={familiehendelse}
      soknad={soknad}
      personoversikt={personoversikt}
      ytelsefordeling={ytelsefordeling}
      alleKodeverk={alleKodeverk}
      kanOverstyre={kanOverstyre}
      submitCallback={submitCallback}
      oppdaterStønadskontoer={oppdaterStønadskontoer}
      isReadOnly={isReadOnly}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      fagsak={fagsak}
    />
  </RawIntlProvider>
);

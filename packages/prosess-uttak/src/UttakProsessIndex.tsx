import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidsgiverOpplysningerPerId,
  FamilieHendelseSamling,
  PeriodeSoker,
  Personoversikt,
  Soknad,
  UttaksresultatPeriode,
  UttakStonadskontoer,
  Ytelsefordeling,
} from '@navikt/fp-types';

import { UttakProsessPanel } from './components/UttakProsessPanel';

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
}

export const UttakProsessIndex = ({
  uttaksresultatPerioder,
  uttakStonadskontoer,
  familiehendelse,
  soknad,
  personoversikt,
  ytelsefordeling,
  kanOverstyre,
  oppdaterStønadskontoer,
  arbeidsgiverOpplysningerPerId,
}: Props) => (
  <RawIntlProvider value={intl}>
    <UttakProsessPanel
      uttaksresultatPeriode={uttaksresultatPerioder}
      uttakStonadskontoer={uttakStonadskontoer}
      familiehendelse={familiehendelse}
      soknad={soknad}
      personoversikt={personoversikt}
      ytelsefordeling={ytelsefordeling}
      kanOverstyre={kanOverstyre}
      oppdaterStønadskontoer={oppdaterStønadskontoer}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

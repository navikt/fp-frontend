import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type {
  ArbeidsgiverOpplysningerPerId,
  FamilieHendelseSamling,
  PeriodeSoker,
  Personoversikt,
  Soknad,
  Uttaksresultat,
  UttakStonadskontoer,
} from '@navikt/fp-types';

import { UttakProsessPanel } from './components/UttakProsessPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  uttaksresultat: Uttaksresultat;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  kanOverstyre: boolean;
  oppdaterStønadskontoer: (params: {
    behandlingUuid: string;
    perioder: PeriodeSoker[];
  }) => Promise<UttakStonadskontoer>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const UttakProsessIndex = ({
  uttaksresultat,
  uttakStonadskontoer,
  familiehendelse,
  soknad,
  personoversikt,
  kanOverstyre,
  oppdaterStønadskontoer,
  arbeidsgiverOpplysningerPerId,
}: Props) => (
  <RawIntlProvider value={intl}>
    <UttakProsessPanel
      uttaksresultat={uttaksresultat}
      uttakStonadskontoer={uttakStonadskontoer}
      familiehendelse={familiehendelse}
      soknad={soknad}
      personoversikt={personoversikt}
      kanOverstyre={kanOverstyre}
      oppdaterStønadskontoer={oppdaterStønadskontoer}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

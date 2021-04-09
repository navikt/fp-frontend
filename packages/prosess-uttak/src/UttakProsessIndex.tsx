import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardProsessPanelProps, Fagsak, FamilieHendelseSamling, Personoversikt,
  Soknad, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import UttakPanel from './components/UttakPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  uttaksresultatPerioder: UttaksresultatPeriode;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  uttakPeriodeGrense: UttakPeriodeGrense;
  ytelsefordeling: Ytelsefordeling;
  employeeHasAccess: boolean;
  tempUpdateStonadskontoer: (params: {
    behandlingId: {
      saksnummer: string;
      behandlingId: number;
    };
    perioder: any;
  }) => Promise<any>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const UttakProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  fagsak,
  behandling,
  uttaksresultatPerioder,
  uttakStonadskontoer,
  aksjonspunkter,
  familiehendelse,
  soknad,
  personoversikt,
  uttakPeriodeGrense,
  ytelsefordeling,
  alleKodeverk,
  employeeHasAccess,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  tempUpdateStonadskontoer,
  isAksjonspunktOpen,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <UttakPanel
      fagsak={fagsak}
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingType={behandling.type}
      behandlingsresultat={behandling.behandlingsresultat}
      behandlingStatus={behandling.status}
      sprakkode={behandling.sprakkode}
      uttaksresultat={uttaksresultatPerioder}
      stonadskonto={uttakStonadskontoer}
      aksjonspunkter={aksjonspunkter}
      employeeHasAccess={employeeHasAccess}
      soknad={soknad}
      person={personoversikt}
      familiehendelse={familiehendelse}
      uttakPeriodeGrense={uttakPeriodeGrense}
      alleKodeverk={alleKodeverk}
      ytelsefordeling={ytelsefordeling}
      tempUpdateStonadskontoer={tempUpdateStonadskontoer}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      apCodes={aksjonspunkter.map((a) => a.definisjon.kode)}
      isApOpen={isAksjonspunktOpen}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default UttakProsessIndex;

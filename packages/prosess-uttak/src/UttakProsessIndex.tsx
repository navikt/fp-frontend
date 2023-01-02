import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardProsessPanelProps, FamilieHendelseSamling, Personoversikt,
  Soknad, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling, PeriodeSoker,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import UttakProsessPanel from './nye/UttakProsessPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  uttaksresultatPerioder: UttaksresultatPeriode;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  kanOverstyre: boolean;
  oppdaterStønadskontoer: (params: {
    behandlingUuid: string;
    perioder: PeriodeSoker[];
  }) => Promise<any>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const UttakProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
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
  readOnlySubmitButton,
  oppdaterStønadskontoer,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
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
      readOnlySubmitButton={readOnlySubmitButton}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default UttakProsessIndex;

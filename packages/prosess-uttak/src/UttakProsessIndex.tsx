import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardProsessPanelProps, FamilieHendelseSamling, Personoversikt,
  Soknad, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling, PeriodeSoker,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import UttakPanel from './components/UttakPanel';
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
  isAksjonspunktOpen,
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
    <ReduxWrapper formName="UttakProsessIndex" formData={formData} setFormData={setFormData}>
      <UttakPanel
        // @ts-ignore
        behandlingUuid={behandling.uuid}
        // @ts-ignore
        behandlingType={behandling.type}
        // @ts-ignore
        behandlingsresultat={behandling.behandlingsresultat}
        // @ts-ignore
        behandlingStatus={behandling.status}
        // @ts-ignore
        sprakkode={behandling.sprakkode}
        // @ts-ignore
        uttaksresultat={uttaksresultatPerioder}
        // @ts-ignore
        stonadskonto={uttakStonadskontoer}
        // @ts-ignore
        aksjonspunkter={aksjonspunkter}
        // @ts-ignore
        employeeHasAccess={kanOverstyre}
        // @ts-ignore
        soknad={soknad}
        // @ts-ignore
        person={personoversikt}
        // @ts-ignore
        familiehendelse={familiehendelse}
        // @ts-ignore
        alleKodeverk={alleKodeverk}
        // @ts-ignore
        ytelsefordeling={ytelsefordeling}
        // @ts-ignore
        tempUpdateStonadskontoer={oppdaterStønadskontoer}
        // @ts-ignore
        submitCallback={submitCallback}
        // @ts-ignore
        readOnly={isReadOnly}
        // @ts-ignore
        readOnlySubmitButton={readOnlySubmitButton}
        // @ts-ignore
        apCodes={aksjonspunkter.map((a) => a.definisjon)}
        // @ts-ignore
        isApOpen={isAksjonspunktOpen}
        // @ts-ignore
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default UttakProsessIndex;
